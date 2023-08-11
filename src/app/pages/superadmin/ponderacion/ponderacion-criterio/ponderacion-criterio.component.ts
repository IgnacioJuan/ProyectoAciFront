import { Component, OnInit, ViewChild } from '@angular/core';



import { Indicador } from 'src/app/models/Indicador';
import { Modelo } from 'src/app/models/Modelo';
import { Subcriterio } from 'src/app/models/Subcriterio';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { AsignacionIndicadorService } from 'src/app/services/asignacion-indicador.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Criterio } from 'src/app/models/Criterio';
import { CriteriosService } from 'src/app/services/criterios.service';
import { Chart } from 'chart.js';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-ponderacion-criterio',
  templateUrl: './ponderacion-criterio.component.html',
  styleUrls: ['./ponderacion-criterio.component.css']
})
export class PonderacionCriterioComponent implements OnInit {
  itemsPerPageLabel = 'Criterios por página';
  nextPageLabel = 'Siguiente';
  lastPageLabel = 'Última';
  firstPageLabel='Primera';
  previousPageLabel='Anterior';
  rango:any= (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 de ${length}`;
    }
  
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  };

  model: Modelo = new Modelo();
  critrioClase = new Criterio();
  asignacion: any;
  criterio: Criterio = new Criterio();
  modelo: Modelo = new Modelo();
  color: any
  chart: any;

  dataSource = new MatTableDataSource<any>();
  columnasUsuario: string[] = ['id_indicador', 'nombre','peso', 'porc_valor', 'porc_utilidad','valor'];

  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;

  constructor(
    private indicadorservice: IndicadoresService,
    private router: Router, private fb: FormBuilder,
    public modeloService: ModeloService,private paginatorIntl: MatPaginatorIntl,
    public asignacionIndicadorService: AsignacionIndicadorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.paginatorIntl.nextPageLabel = this.nextPageLabel;
    this.paginatorIntl.lastPageLabel = this.lastPageLabel;
    this.paginatorIntl.firstPageLabel=this.firstPageLabel;
    this.paginatorIntl.previousPageLabel=this.previousPageLabel;
    this.paginatorIntl.itemsPerPageLabel = this.itemsPerPageLabel;
    this.paginatorIntl.getRangeLabel=this.rango;
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator || null;

  }
  ngOnInit(): void {
    this.llenar_datasource();
  }

  llenar_datasource() {
    this.criterio = history.state.criterio;
    this.modelo = history.state.modelo;
    this.indicadorservice.listarIndicadorPorCriterioModelo(this.criterio.id_criterio, this.modelo.id_modelo).subscribe(
      (data) => {
        this.dataSource.data = data;
        this.coloresTabla();
        this.GraficaPastel();
      }
    );

  }


  coloresTabla() {
    this.dataSource.data.forEach((indicador: any) => {

      if (indicador.porc_obtenido > 75 && indicador.porc_obtenido <= 100) {
        indicador.color = 'verde'; // Indicador con porcentaje mayor a 50% será de color verde
      }
      else if (indicador.porc_obtenido > 50 && indicador.porc_obtenido <= 75) {
        indicador.color = 'amarillo'; // Indicador con porcentaje mayor a 50% será de color verde
      }
      else if (indicador.porc_obtenido > 25 && indicador.porc_obtenido <= 50) {
        indicador.color = 'naranja'; // Indicador con porcentaje mayor a 50% será de color verde
      } else if (indicador.porc_obtenido <= 25) {
        indicador.color = 'rojo'; // Indicador con porcentaje menor a 30% será de color rojo
      } else {
        indicador.color = ''; // No se asigna ningún color a los indicadores que no cumplen las condiciones anteriores
      }
    });
  }


  //GRAFICA PASTEL

  GraficaPastel() {
    this.chart = new Chart("pastel", {
      type: 'pie',
      data: {
        labels: ['Menor o igual al 25%', 'Mayor al 25% y menor o igual al 50%', 'Mayor al 50% y menor al 75%', 'Mayor al 75%'],
        datasets: [
          {
            label: "Porcentaje de logro",
            data: [
              this.dataSource.data.filter((indicador: any) => indicador.porc_obtenido <= 25).length,
              this.dataSource.data.filter((indicador: any) => indicador.porc_obtenido > 25 && indicador.porc_obtenido <= 50).length,
              this.dataSource.data.filter((indicador: any) => indicador.porc_obtenido > 50 && indicador.porc_obtenido < 75).length,
              this.dataSource.data.filter((indicador: any) => indicador.porc_obtenido >= 75).length
            ],
            backgroundColor: ['red', 'orange', 'yellow', 'green']
          }
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
  regresar() {
    this.router.navigate(['/sup/modelo/detallemodelo']);
  }

  irinicio() {
    this.router.navigate(['/sup/modelo/modelo']);
  }
}
