import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModeloService } from 'src/app/services/modelo.service';

import { AsignaEvidenciaService } from 'src/app/services/asigna-evidencia.service';
import { EvidenciaProjection } from 'src/app/interface/EvidenciaProjection';
import { DetalleEvaluacionService } from 'src/app/services/detalle-evaluacion.service';
import { CriteriosService } from 'src/app/services/criterios.service';
import { Observacion2 } from 'src/app/models/Observaciones2';
import { detalleEvaluacion } from 'src/app/models/DetalleEvaluacion';

@Component({
  selector: 'app-evidencia-tareas-asginadas',
  templateUrl: './evidencia-tareas-asginadas.component.html',
  styleUrls: ['./evidencia-tareas-asginadas.component.css']
})
export class EvidenciaTareasAsginadasComponent {
  // Propiedades y métodos anteriores
  evidencias: EvidenciaProjection[] = []; // Declaración de la propiedad
  isLoggedIn: boolean;
  user: any;
 verificar=false;
 titulo="";
 ocultar=false;
  botonDeshabilitado: boolean | undefined;
  dataSource = new MatTableDataSource<EvidenciaProjection>();
  displayedColumns: string[] = ['ID', 'Criterio', 'Subcriterio', 'Indicador', 'Estado', 'Descripción','observacion', 'Actividad'];
  id_modelo!:number;
  constructor(
    private detaeva: DetalleEvaluacionService,
    private login: LoginService,private httpCriterios: CriteriosService,
    private evidenciaService: EvidenciaService,
    private modeloService: ModeloService,
    private router: Router,
    private paginatorIntl: MatPaginatorIntl,
  ) {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.paginatorIntl.nextPageLabel = 'Siguiente';
    this.paginatorIntl.lastPageLabel = 'Última';
    this.paginatorIntl.itemsPerPageLabel = 'Ítems por página';
    this.paginatorIntl.previousPageLabel = 'Anterior';
    this.paginatorIntl.firstPageLabel = 'Primera';
    this.paginatorIntl.getRangeLabel = (page, pageSize, length) => {
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
  }

  
  

  ngAfterViewInit() {
    console.log('Paginator:', this.paginator);
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  

  verDetalles(evidencia: any) {
    this.router.navigate(['/res/ActividadesResponsable'], { state: { data: evidencia.id_evidencia } });
  }
  

  ngOnInit(): void {
    localStorage.removeItem("eviden");
    
 
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    );

    console.log(this.user.username);
    
      this.httpCriterios.getModeMaximo().subscribe((data) => {
        this.id_modelo =data.id_modelo;
        this.Listado();
      });
    
        
        // Verifica la fecha límite después de obtener los datos
       // this.verificarFechaLimite();
   
  }

  Listado() {
    this.evidenciaService.getevilist(this.user.username).subscribe((data: any[]) => {
      if (data.length != 0) {
        this.verificar = true;
        this.titulo = "EVIDENCIAS ASIGNADAS";
        const evidata: any[] = data; // Anotación de tipo para evidata
        this.evidencias = evidata;
        
        // Iterar a través de las evidencias y obtener las observaciones
        evidata.forEach(evidencia => {
          console.log("tareas evidencia" + evidencia.id_evidencia + " modelo en for " + this.id_modelo);
          this.detaeva.getObservaciones(evidencia.id_evidencia, this.id_modelo).subscribe(
            (observac: detalleEvaluacion[]) => { // Asegúrate de que observac tenga el tipo adecuado
              // Asignar las observaciones al elemento de evidencia
              evidencia.observacion = observac.map((c) =>c.observacion);
            }
          );
        });
  
        this.dataSource.data = this.evidencias; // Actualizar el dataSource
        this.dataSource.paginator = this.paginator;
      } else {
        this.titulo = "NO TIENES EVIDENCIAS ASIGNADAS";
      }
    });
  }
  
  
  
  
  getColorEstado(estado: string): string {
    switch (estado.toLowerCase()) {
      case 'pendiente':
        return 'estado-pendiente';
      case 'aprobada':
        return 'estado-aprobada';
      case 'rechazada':
        return 'estado-rechazada';
      default:
        return '';
    }
  }
  
  
  // Resto del código

  verificarFechaLimite() {
    // Lógica para verificar la fecha límite usando el servicio ModeloService
    this.modeloService.getModeMaximo().subscribe(data => {
      const fechaActual = new Date();
      const fechaFin = new Date(data.fecha_final_act);

      if (fechaActual > fechaFin) {
        this.botonDeshabilitado = true;
        this.mostrarMensaje('Usted ya no puede crear actividades debido a una fecha límite superada.');
        return;
      }
    });
  }

  // Resto del código

  mostrarMensaje(mensaje: string) {
    Swal.fire({
      title: 'Advertencia',
      text: mensaje,
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    });
  }
}
