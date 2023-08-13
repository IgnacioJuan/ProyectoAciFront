import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActividadService } from 'src/app/services/actividad.service';
import { FormBuilder } from '@angular/forms';
import { Actividades } from 'src/app/models/actividades';
import { usuario } from 'src/app/models/Usuario';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ActivProyection } from 'src/app/interface/ActivProyection';




@Component({
  selector: 'app-actividad-autoridad',
  templateUrl: './actividad-autoridad.component.html',
  styleUrls: ['./actividad-autoridad.component.css']
})
export class ActividadAutoridadComponent implements AfterViewInit, OnInit {
  dataSource = new MatTableDataSource<ActivProyection>();
  displayedColumns: string[] = ['username', 'primer_nombre', 'primer_apellido', 'correo', 'acciones'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  

  constructor(
    private serEvide: EvidenciaService,
    private services: ActividadService,
    private fb: FormBuilder
   
  ) {}

  searchText = '';
  searchTerm: string = '';
  public actividades: Actividades[] = [];
  responsable: usuario[] = [];
  public actividad = new Actividades();
  filteredActividades: ActivProyection[] = [];
  resActividad: ActivProyection[] = [];


  ngAfterViewInit() {
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


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator; // Configura el paginator en la inicialización
    this.getResponsables();
    
   
  }

  get() {
    this.services.get().subscribe((actividades) => {
      this.actividades = actividades;
     /* this.filterActividades();*/
    });
  }

  getResponsables() {
    this.services.getActiv().subscribe(
      (data) => {
        this.resActividad = data;
        //this.filterActividades();
        console.log(JSON.stringify(this.resActividad));
    
      }
    );
  }

  listaAct(usu: usuario) {
    this.services.getActByUsua(usu.id).subscribe(
      (data) => {
        this.actividades = data;
        this.dataSource.data = this.filteredActividades;
      }
    );
  }

  /*filterActividades() {
    this.filteredActividades = this.resActividad.filter(
      (actividad) =>
  
        /*actividad.primer_nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
        
    );

  }*/
  listaAc(usu: usuario) {
    this.services.getActByUsua(usu.id).subscribe(
      (data) => {
        this.actividades = data;
        this.dataSource.data = this.filteredActividades;
      }
    );
  }

  
}