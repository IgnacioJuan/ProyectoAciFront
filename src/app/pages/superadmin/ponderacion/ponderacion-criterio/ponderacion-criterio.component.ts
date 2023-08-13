import { Component, OnInit, ViewChild } from '@angular/core';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { AsignacionIndicadorService } from 'src/app/services/asignacion-indicador.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { FormBuilder } from '@angular/forms';
import { Chart } from 'chart.js';

import { Modelo } from 'src/app/models/Modelo';
import { Criterio } from 'src/app/models/Criterio';

type Archivo = {
  // Define las propiedades correctas para el tipo Archivo
};

@Component({
  selector: 'app-ponderacion-criterio',
  templateUrl: './ponderacion-criterio.component.html',
  styleUrls: ['./ponderacion-criterio.component.css']
})
export class PonderacionCriterioComponent implements OnInit {
  itemsPerPageLabel = 'Criterios por página';
  nextPageLabel = 'Siguiente';
  lastPageLabel = 'Última';
  firstPageLabel = 'Primera';
  previousPageLabel = 'Anterior';
  rango = (page: number, pageSize: number, length: number) => {
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
  archivos: Archivo[] = [];
  critrioClase = new Criterio();
  asignacion: any;
  criterio: Criterio = new Criterio();
  modelo: Modelo = new Modelo();
  color: any;
  chart: any;
  idndicadorseleccionado: number = 0;

  dataSource = new MatTableDataSource<any>();
  columnasUsuario: string[] = ['id_indicador', 'nombre', 'peso', 'porc_valor', 'porc_utilidad', 'valor'];

  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;

  constructor(
    private indicadorservice: IndicadoresService,
    private router: Router, private fb: FormBuilder,
    public modeloService: ModeloService, private paginatorIntl: MatPaginatorIntl,
    public asignacionIndicadorService: AsignacionIndicadorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.paginatorIntl.nextPageLabel = this.nextPageLabel;
    this.paginatorIntl.lastPageLabel = this.lastPageLabel;
    this.paginatorIntl.firstPageLabel = this.firstPageLabel;
    this.paginatorIntl.previousPageLabel = this.previousPageLabel;
    this.paginatorIntl.itemsPerPageLabel = this.itemsPerPageLabel;
    this.paginatorIntl.getRangeLabel = this.rango;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator || null;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.criterio = params['criterio'];
      this.modelo = params['modelo'];

      this.indicadorservice.listarIndicadorPorCriterioModelo(this.criterio.id_criterio, this.modelo.id_modelo).subscribe(
        (data) => {
          this.dataSource.data = data;
          this.coloresTabla();
          this.GraficaPastel();
        }
      );
    });
  }

  coloresTabla() {
    this.dataSource.data.forEach((indicador: any) => {
      if (indicador.porc_obtenido > 75 && indicador.porc_obtenido <= 100) {
        indicador.color = 'verde';
      } else if (indicador.porc_obtenido > 50 && indicador.porc_obtenido <= 75) {
        indicador.color = 'amarillo';
      } else if (indicador.porc_obtenido > 25 && indicador.porc_obtenido <= 50) {
        indicador.color = 'naranja';
      } else if (indicador.porc_obtenido <= 25) {
        indicador.color = 'rojo';
      } else {
        indicador.color = '';
      }
    });
  }

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
