import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Criterio } from 'src/app/models/Criterio';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CriteriosService } from 'src/app/services/criterios.service';
import Swal from 'sweetalert2';
import { CriterioSubcriteriosProjection } from 'src/app/interface/CriterioSubcriteriosProjection';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.css']
})
export class CriteriosComponent implements OnInit {
  frmCriterio: FormGroup;
  guardadoExitoso: boolean = false;
  miModal!: ElementRef;
  
  public crite = new Criterio();
  criterios: CriterioSubcriteriosProjection[] = [];
  

  filterPost = '';
  dataSource = new MatTableDataSource<CriterioSubcriteriosProjection>();
  columnasUsuario: string[] = ['id_criterio', 'nombre', 'descripcion', 'cantidadSubcriterios', 'actions'];

  @ViewChild('datosModalRef') datosModalRef: any;
  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;

  constructor(
    private criterioservice: CriteriosService,
    private router: Router, private fb: FormBuilder
  ) {
    this.frmCriterio = fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required]]
    })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator || null;

  }
  ngOnInit(): void {
    this.listar();
  }
  
 
  guardar() {
    this.crite = this.frmCriterio.value;
    this.criterioservice.crear(this.crite)
      .subscribe(
        (response) => {
          console.log('Criterio creado con éxito:', response);
          this.guardadoExitoso = true;
          this.listar();
          Swal.fire(
            'Exitoso',
            'Se ha completado el registro con exito',
            'success'
          )
        },
        (error) => {
          console.error('Error al crear el criterio:', error);
          Swal.fire(
            'Error',
            'Ha ocurrido un error',
            'warning'
          )
        }
      );

  }
  eliminar(criterio: any) {
    Swal.fire({
      title: 'Estas seguro de eliminar el registro?',
      showDenyButton: true,
      confirmButtonText: 'Cacelar',
      denyButtonText: `Eliminar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (!result.isConfirmed) {
        this.criterioservice.eliminar(criterio).subscribe(
          (response) => {
            this.listar()
            Swal.fire('Eliminado!', '', 'success')

          }
        );
      }
    })

  }

  listar(): void {
    this.criterioservice.obtenerDatosCriterios().subscribe(
      (data: any[]) => {
        this.criterios = data;
        this.dataSource.data = this.criterios;
        console.log(data)
      },
      (error: any) => {
        console.error('Error al listar los criterios:', error);
      }
    );
  }

  editDatos(criterio: Criterio) {
    this.crite = criterio;
    this.frmCriterio = new FormGroup({
      nombre: new FormControl(criterio.nombre),
      descripcion: new FormControl(criterio.descripcion)

    });
  }

  limpiarFormulario() {
    this.frmCriterio.reset();
    this.crite = new Criterio;
  }

  actualizar() {
    this.crite.nombre = this.frmCriterio.value.nombre;
    this.crite.descripcion = this.frmCriterio.value.descripcion;
    this.criterioservice.actualizar(this.crite.id_criterio, this.crite)
      .subscribe(response => {
        this.crite = new Criterio();
        this.listar();
        Swal.fire('Operacion exitosa!', 'El registro se actualizo con exito', 'success')
      });
  }

  verDetalles(criterio: any) {
    this.router.navigate(['/sup/flujo-criterio/criterios-subcriterio'], { state: { data: criterio } });
  }

  aplicarFiltro() {
    if (this.filterPost) {
      const lowerCaseFilter = this.filterPost.toLowerCase();
      this.dataSource.data = this.dataSource.data.filter((item: any) => {
        return JSON.stringify(item).toLowerCase().includes(lowerCaseFilter);
      });
    } else {
      this.dataSource.data = this.criterios;;
    }
  }


  
}
