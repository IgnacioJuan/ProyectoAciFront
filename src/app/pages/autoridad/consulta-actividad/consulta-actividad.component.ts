import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Actividad } from 'src/app/models/Actividad';
import { AutoIndicador } from 'src/app/models/AutoridadIndicador';
import { Indicador } from 'src/app/models/Indicador';
import { CriteriosService } from 'src/app/services/criterios.service';

@Component({
  selector: 'app-consulta-actividad',
  templateUrl: './consulta-actividad.component.html',
  styleUrls: ['./consulta-actividad.component.css']
})
export class ConsultaActividadComponent implements OnInit {

  searchText = '';
  @ViewChild('datosModalRef') datosModalRef: any;
  actividad: Actividad[] = [];
  dataSource = new MatTableDataSource<any>(this.actividad);
  displayedColumns: string[] = ['Código', 'Nombre', 'Fecha Inicio', 'Fecha Fin', 'Responsable'];
  ngAfterViewInit() {
    console.log('Paginator:', this.paginator);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private service: CriteriosService) { }

  ngOnInit(): void {

    this.getListar();
  }

  getListar() {
    this.service.getActividadCumplida().subscribe(
      data => {
        this.actividad = data;
        
    this.dataSource.data = this.actividad;
      }
    )
  }

}