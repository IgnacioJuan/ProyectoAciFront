import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { detalleEvaluacion } from 'src/app/models/DetalleEvaluacion';
import { Evidencia } from 'src/app/models/Evidencia';
import { Indicador } from 'src/app/models/Indicador';
import { DetalleEvaluacionService } from 'src/app/services/detalle-evaluacion.service';
import { EmailServiceService } from 'src/app/services/email-service.service';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aprobar-rechazar-admin',
  templateUrl: './aprobar-rechazar-admin.component.html',
  styleUrls: ['./aprobar-rechazar-admin.component.css'],
})
export class AprobarRechazarAdminComponent implements OnInit {

  columnas: string[] = [
    'id_evidencia',
    'enlace',
    'nombre',
    'descripcion',
    'actions',
  ];

  dataSource2 = new MatTableDataSource<Evidencia>();
  evidenciaSele = new Evidencia();
  filterPost = '';
  detalleEvi: detalleEvaluacion = new detalleEvaluacion();
  fechaActual: Date = new Date();
  fechaFormateada: string = this.fechaActual.toLocaleDateString('es-ES');
  estadoEvi="";
  listaEvidencias : Evidencia[]=[];
  limpiar=""
  isLoggedIn = false;
  user: any = null;
  mostrar = false;
  issloading=true;
  isexist?:boolean;
  isLinear = true;
  listaIndicadores: Indicador[]=[];
 indicadorSelect: Indicador= new Indicador();
 indicador:Indicador[]=[];
 subcriterio: any;
criterio: any;
listaEvidenciasporIndicador: Evidencia[] = [];
evidencia: Evidencia =new Evidencia();
fileInfos: Observable<any> | undefined;
selectedFiles: FileList | undefined;
sent: boolean = false;
toUser: string="";
subject: string="";
message: string=" El archivo";
  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator || null;
  }

  constructor(
    private evidenciaService: EvidenciaService,
    private detalleEvaluaService: DetalleEvaluacionService,
    private indicadorService : IndicadoresService,
    public login:LoginService,
    private emailService: EmailServiceService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {

    this.evidenciaService.getEvidencias().subscribe((listaEvi) => {
      this.dataSource2.data = listaEvi;
      console.log(listaEvi)

    });

    this.indicadorService.getIndicadores().subscribe(
      listaIndi=>this. listaIndicadores=listaIndi );



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

    
  obtenerEvidencia(id:number) {
  
    this.evidenciaService.getEvidenciaIndicador(id).subscribe(
      (evidencia: Evidencia) => {
        this.evidencia = evidencia;
        console.log('Evidencia:', this.evidencia);
      },
      error => console.error(error)
    );
  }


  listar(): void {
    this.evidenciaService.getEvidencias().subscribe(
      (data: any[]) => {
        this.dataSource2.data = data;
        
      },
      (error: any) => {
        console.error('Error al listar ', error);
      }
    );
  
  }

  seleccionar(element: any) {
    this.evidenciaSele = element;
    this.detalleEvi.evidencia=this.evidenciaSele;
    this.detalleEvi.usuario=this.user.id;
    console.log(' INDICADORRRRRRRR');

    console.log(    this.evidenciaSele.indicador
      )
      if (this.evidenciaSele.indicador) { 
        console.log(this.evidenciaSele.indicador.id_indicador); 
      }

  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource2.filter = filtro.trim().toLowerCase();
  }

  Aprobado(){
    Swal.fire({
       icon: 'success',
      title: 'La evidencia ha sido aprobada',
      showConfirmButton: false,
      timer: 1500
    })
    this.mostrar = this.mostrar;

    this.estadoEvi="Evidencia Aprobada";
    this.detalleEvi.estado=true
    this.detalleEvi.observacion="Ninguna"
  }
  
  Rechazado(){
    Swal.fire({
      icon: 'error',
      title: 'La evidencia ha sido rechazada.',
    })
    this.estadoEvi="Evidencia Rechazada";
    this.detalleEvi.observacion=""

  this.detalleEvi.estado=false
  this.mostrar = !this.mostrar;

  }


Guardar(){
console.log("DATOSSSSSSSSSSSS")
  console.log(this.detalleEvi)

if(this.detalleEvi.estado !=null && this.detalleEvi.observacion!=null 
   &&  this.detalleEvi.observacion!="" )
this.detalleEvaluaService.create(this.detalleEvi)
.subscribe(data=> 
  Swal.fire(
    'Guardado con éxito!',
    'Observaciones guardado con éxito',
    'success'))


else{
 
  Swal.fire(
    'No agregó ninguna observación',
    'Porfavor agregue alguna',
    'warning'
  )


}

}

Limpiar(){
  this.detalleEvi.observacion=""
}


enviar() {
  this.emailService.sendEmail([this.toUser], this.subject, this.message).subscribe(
    response => {
      console.log('Email sent successfully!');
      this.openSnackBar('El correo electrónico se envió correctamente.', 'Cerrar');
    },
    error => {
      console.error('Error sending email:', error);
      this.openSnackBar('No se pudo enviar el correo electrónico.', 'Cerrar');
    }
  );
}
openSnackBar(message: string, action: string): void {
  this._snackBar.open(message, action, {
    duration: 3000,
  });
}

}
