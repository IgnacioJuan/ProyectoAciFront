import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Actividad } from 'src/app/models/Actividad';
import { AutoIndicador } from 'src/app/models/AutoridadIndicador';
import { Indicador } from 'src/app/models/Indicador';
import { CriteriosService } from 'src/app/services/criterios.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-consulta-actividad',
  templateUrl: './consulta-actividad.component.html',
  styleUrls: ['./consulta-actividad.component.css']
})
export class ConsultaActividadComponent implements AfterViewInit,OnInit {
  
  displayedColumns: string[] = ['codigo', 'nombre', 'fechaInicio', 'fechaFin', 'responsable'];
  dataSource = new MatTableDataSource<Actividad>
  // Inicializar con un array vacío

    @ViewChild(MatPaginator) paginator!: MatPaginator;
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Elementos por página:';
      this.paginator._intl.nextPageLabel = 'Siguiente página';
      this.paginator._intl.previousPageLabel = 'Página anterior';
      this.paginator._intl.firstPageLabel = 'Primera página';
      this.paginator._intl.lastPageLabel = 'Última página';
      this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
          return `0 de ${length}`;
        }
    
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    
        return `${startIndex + 1} – ${endIndex} de ${length}`;
      };
    }
  searchText = '';
  @ViewChild('datosModalRef') datosModalRef: any;
  actividad: Actividad[] = [];

  constructor(private service: CriteriosService) { }

 
  ngOnInit(): void {

    this.getListar();
   
  }

  getListar() {
    this.service.getActividadCumplida().subscribe(
      data => {
        this.dataSource.data = data; 
      }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
