import { Component, OnInit, ViewChild } from '@angular/core';
import { ModeloService } from 'src/app/services/modelo.service';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/models/Modelo';
import { CriteriosService } from 'src/app/services/criterios.service';
import { SubcriteriosService } from 'src/app/services/subcriterios.service';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { ActivatedRoute } from '@angular/router';
import { AsignacionIndicadorService } from 'src/app/services/asignacion-indicador.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MatDialog } from '@angular/material/dialog';
import { AsignarCriterioComponent } from './asignar-criterio/asignar-criterio.component';
import { PonderacionService } from 'src/app/services/ponderacion.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

type ColumnNames = {
  [key: string]: string;
}

type ponderar = {
  [key: string]: string;
}

interface f {
  fecha: Date;
}


@Component({
  selector: 'app-detalle-modelo',
  templateUrl: './detalle-modelo.component.html',
  styleUrls: ['./detalle-modelo.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DetalleModeloComponent implements OnInit {

  public columnNames: ColumnNames = {
    nombre: 'Nombre del Criterio',
    descripcion: 'Descripción del Criterio'
  };

  public ponderar: ponderar = {
    fecha: 'Fecha de Ponderación',
  }

  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSize = 10;
  pageIndex = 0;
  asignacion: any;


  columnsToDisplay = ['nombre', 'descripcion'];

  columnsToDisplayWithExpand = [...this.columnsToDisplay,'subcriterios', 'matriz', 'ponderacion', 'asignar'];
  expandedElement: any;

  model: Modelo = new Modelo();


  mostrarPrincipal: number = 0;
  mostrarSecundario: number = 0;
contador: number = 0;
  //lista de objetos de f llamada dataSourcePonderacion
  dataSourcePonderacion: any;
  dataSourcePonderacion2: f[] = [];
  columnsToDisplayPonderacion = ['fecha'];
  columnsToDisplayWithExpandPonderacion = [...this.columnsToDisplayPonderacion, 'revisar'];

  displayedColumns: string[] = ['contador','fecha', 'revisar'];

  fechas: Date[] = [];
  fechasfinal: Date[] = [];



  pond(element:any) {
    console.log("esta fecha modelo "+JSON.stringify(element));
    let fecha=element.fechapo;
    console.log("fecha elegida: "+fecha+" contador: "+element.contador);
    localStorage.setItem("contador", element.contador);
    this.router.navigate(['/sup/ponderacion/ponderacion-modelo'], { queryParams: { fecha: fecha, conf: 1 } });
  }

  constructor(
    private route: ActivatedRoute,
    public modeloService: ModeloService,
    public criterioService: CriteriosService,
    public subcriterioService: SubcriteriosService,
    public indicadorService: IndicadoresService,
    private asignacionIndicadorService: AsignacionIndicadorService,
    private sharedDataService: SharedDataService,
    private router: Router,
    private dialog: MatDialog,
    private ponderacionService: PonderacionService,
  ) {

   }
  ocultarBoton: boolean = false;
  ngOnInit(): void {
    this.recibeModelo();
  }

  // Función para manejar el cambio de página
  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.updateDataSource();
  }

  // Función para actualizar la fuente de datos con la paginación
  updateDataSource() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource = new MatTableDataSource(this.dataSource.data.slice(startIndex, endIndex));
  }
  id = localStorage.getItem("id");
  recibeModelo() {
    this.modeloService.getModeloById(Number(this.id)).subscribe(data => {
      if (data.visible) {
        this.mostrarPrincipal = 0;
        this.mostrarSecundario = 0;
        this.ocultarBoton = false;
        
        this.ponderacionService.listarPonderacionModelo(Number(this.id)).subscribe(
          (fechas) => {
            if (fechas.length > 0) {
              this.mostrarSecundario = 1;
            }
            this.dataSourcePonderacion = fechas;
          }
        );
      } else {
        this.mostrarPrincipal = 1;
        this.ocultarBoton = true;

        this.ponderacionService.listarPonderacionModelo(Number(this.id)).subscribe(data => {
          this.dataSourcePonderacion = data;
              this.updateDataSource();
        });

      }
      this.model = data;
      this.asignacionIndicadorService.getAsignacionIndicadorByIdModelo(Number(this.id)).subscribe(info => {
        this.criterioService.listarCriterio().subscribe(result => {
          this.dataSource = [];
          this.asignacion = info;
          console.log(this.asignacion);
          this.dataSource = result.filter((criterio: any) => {
            return info.some((asignacion: any) => {
              return criterio.id_criterio === asignacion.indicador.subcriterio.criterio.id_criterio;
            });
          });
        });
      });
    });
  }

  irPonderacionModelo(modelo: Modelo): void {

    //llevar modelo

    localStorage.setItem("id", modelo.id_modelo.toString());
    console.log(modelo.id_modelo)
    this.model = modelo;
    this.router.navigate(['/sup/ponderacion/ponderacion-modelo']);


  }
  ponderacionCriterio(event: Event, element: any) {
    event.stopPropagation();
    // código del método del botón
    this.router.navigate(['/sup/ponderacion/ponderacion-criterio'], { state: { criterio: element, modelo: this.model } });
  }

  mostrar(element: any) {
    console.log(element);
    this.sharedDataService.agregarIdCriterio(element.id_criterio);
    this.router.navigate(['/sup/modelo/detalle-subcriterio']);
  }

  evaluacion(event: Event, element: any) {
    event.stopPropagation();
    console.log(this.model)
    this.router.navigate(['/sup/modelo/matriz-evaluacion'], { state: { criterio: element, modelo: this.model } });
  }

  ponderacion(event: Event, element: any) {
    event.stopPropagation();
    // código del método del botón
    this.sharedDataService.agregarIdCriterio(element.id_criterio);
  }

  irinicio() {

    // código del método del botón
    this.router.navigate(['/sup/modelo/modelo']);

  }
  asignar_criterio(event: Event, criterio: any) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(AsignarCriterioComponent, {
      width: '45%',
      data: { id: criterio.id_criterio }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data === 'Succes') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Criterio asignado correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });




  }
}