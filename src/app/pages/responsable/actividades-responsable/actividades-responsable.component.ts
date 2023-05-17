import { Evidencia } from 'src/app/models/Evidencia';
import { Archivo } from './../../../models/Archivo';
import { Actividades } from './../../../services/actividades';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActividadService } from 'src/app/services/actividad.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
import { Notificacion } from 'src/app/models/Notificacion';
import { NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-actividades-responsable',
  templateUrl: './actividades-responsable.component.html',
  styleUrls: ['./actividades-responsable.component.css']
})
export class ActividadesResponsableComponent implements OnInit {
  searchText = '';
  @ViewChild('datosModalRef') datosModalRef: any;
  miModal!: ElementRef;
  public actividad = new Actividades();
  Actividades: any[] = [];
  guardadoExitoso: boolean = false;
  frmActividades: FormGroup;
  noti=new Notificacion();
  user:any = null;
  idusuario:any=null;
  nombre:any=null;
  nombreact:any=null;
  isLoggedIn = false;

  constructor(
    private services: ActividadService,
    private fb: FormBuilder,
    private router: Router,
    public login:LoginService,
    private notificationService:NotificacionService
    ) {
    this.frmActividades = fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(250)]],
      fecha_inicio: ['', Validators.required],
      fecha_fin: ['', Validators.required]

    })
  }
 evi:Evidencia =new Evidencia();
  ngOnInit(): void {

    const data = history.state.data;
    this.evi = data;
    if (this.evi == undefined) {
      this.router.navigate(['user-dashboard']);
      location.replace('/user-dashboard');
    }

    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();

      }
    )
    this.listar();
  }

  notificar() {
    this.noti.fecha = new Date();
    this.noti.rol = "SUPERADMIN";
    this.noti.mensaje = this.user.persona.primer_nombre+" "+this.user.persona.primer_apellido+" ha creado la actividad " + this.frmActividades.value.nombre;
    this.noti.visto = false;
    this.noti.usuario =  0;

    this.notificationService.crear(this.noti).subscribe(
      (data: Notificacion) => {
        this.noti = data;
        console.log('Notificacion guardada');
      },
      (error: any) => {
        console.error('No se pudo guardar la notificación', error);
      }
    );
  }

 
  
  notificaradmin() {
    this.noti.fecha = new Date();
    this.noti.rol = "ADMIN";
    this.noti.mensaje = this.user.persona.primer_nombre+" "+this.user.persona.primer_apellido+" ha creado la actividad " + this.frmActividades.value.nombre;
    this.noti.visto = false;
    this.noti.usuario =  0;

    this.notificationService.crear(this.noti).subscribe(
      (data: Notificacion) => {
        this.noti = data;
        console.log('Notificacion guardada');
      },
      (error: any) => {
        console.error('No se pudo guardar la notificación', error);
      }
    );
  }

  guardar() {
    this.actividad = this.frmActividades.value;
    this.actividad.evidencia=this.evi;
    this.actividad.usuario=this.user.id;
    this.services.crear(this.actividad)
      .subscribe(
        (response) => {
          console.log('creado con éxito:', response);
          this.guardadoExitoso = true;
          this.notificar();
          this.notificaradmin();
          this.listar();
          Swal.fire({
            title: 'Guardado con éxito',
            text: 'La actividad ha sido guardada satisfactoriamente',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
        },
        (error) => {
          console.error('Error al crear:', error);
          Swal.fire({
            title: 'Error al guardar',
            text: 'Ocurrió un error al guardar la actividad',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      );
  }
  editDatos(acti: Actividades) {
    this.actividad = acti;
    this.frmActividades = new FormGroup({
      nombre: new FormControl(acti.nombre),
      descripcion: new FormControl(acti.descripcion),
      fecha_inicio:new FormControl(acti.fecha_inicio),
      fecha_fin: new FormControl(acti.fecha_fin)
    });
  }

  listar(): void {
    const fechaActual = new Date();
    this.services.geteviasig(this.user.username).subscribe(data => {
      this.Actividades = data;
      this.Actividades.map(actividad => {
        const fechaFinActividad = new Date(actividad.fecha_fin);
        fechaFinActividad.setDate(fechaFinActividad.getDate() - 1); // Restar 1 día a la fecha de fin
        if (fechaFinActividad.getTime() === fechaActual.getTime()) {
          this.nombreact = actividad.nombre;
          this.notificaruser();
          console.log("Nombre de la actividad: " + this.nombreact);
          console.log("ID del usuario: " + this.user.id);
        }
      });
    });
  }
  

  notificaruser() {
    this.noti.fecha = new Date();
    this.noti.rol = "";
    this.noti.mensaje = "La actividad " + this.nombreact+" finalizara el dia de mañana "+
    "asegurese de haberla cumplido";
    this.noti.visto = false;
    this.noti.usuario =  this.user.id;

    this.notificationService.crear(this.noti).subscribe(
      (data: Notificacion) => {
        this.noti = data;
        console.log('Notificacion guardada');
      },
      (error: any) => {
        console.error('No se pudo guardar la notificación', error);
      }
    );
  }

  eliminar(act: any) {
    Swal.fire({
      title: '¿Está seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.services.eliminar(act).subscribe(
          (response) => {
            this.listar();
            Swal.fire({
              title: 'Eliminado',
              text: 'El registro ha sido eliminado correctamente',
              icon: 'success',
              confirmButtonText: 'Ok'
            });
          },
          (error) => {
            console.error('Error al eliminar:', error);
            Swal.fire({
              title: 'Error al eliminar',
              text: 'Ocurrió un error al eliminar el registro',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
        );
      }
    });
  }

  limpiarFormulario() {
    this.frmActividades.reset();
    this.actividad = new Actividades;
  }

  actualizar() {
    this.actividad.nombre = this.frmActividades.value.nombre;
    this.actividad.descripcion = this.frmActividades.value.descripcion;
    this.actividad.fecha_inicio = this.frmActividades.value.fecha_inicio;
    this.actividad.fecha_fin = this.frmActividades.value.fecha_fin;
    this.services.update(this.actividad.id_actividad, this.actividad)
      .subscribe(response => {
        this.actividad = new Actividades();
        this.listar();
        Swal.fire('Operacion exitosa!', 'El registro se actualizo con exito', 'success')
      });
  }
 archivo: Archivo=new Archivo();

  verDetalles(archivos: any) {
    this.router.navigate(['/evidenciaResponsable'], { state: { data: archivos} });
  }

}
