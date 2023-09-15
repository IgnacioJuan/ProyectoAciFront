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
  botonDeshabilitado: boolean | undefined;
  dataSource = new MatTableDataSource<EvidenciaProjection>();
  displayedColumns: string[] = ['ID', 'Criterio', 'Subcriterio', 'Indicador', 'Estado', 'Descripción', 'Actividad'];

  constructor(
    private asignaService: AsignaEvidenciaService,
    private login: LoginService,
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
    // this.evidenciaService.geteviasig(this.user.username).subscribe(data => {
     //   this.evidencias = data;
   //   this.dataSource.data = data;
    //   this.dataSource.paginator = this.paginator; // Asigna el paginador aquí
    //   // ...
    // });
    this.evidenciaService.getevilist(this.user.username).subscribe(data => {
      // Filtrar duplicados utilizando un Set
     /* const uniqueIds = new Set<number>();
      this.evidencias = data.filter(ev => {
        if (!uniqueIds.has(ev.id_evidencia)) {
          uniqueIds.add(ev.id_evidencia);
          return true;
        }
        return false;
      });**/

      if(data.length!=0){
        this.verificar=true;
        this.titulo="EVIDENCIAS ASIGNADAS";
      } else{
        this.titulo="NO TIENES EVIDENCIAS ASIGNADAS";
      }
      this.dataSource.data = data;
      console.log("datos evid "+JSON.stringify(this.dataSource.data));
      this.dataSource.paginator = this.paginator;
      // ...
    });
    // ...
    // this.login.loginStatusSubjec.asObservable().subscribe(
    //   data => {
    //     this.isLoggedIn = this.login.isLoggedIn();
    //     this.user = this.login.getUser();
    //   }
    // );
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
  
        // Realiza la solicitud de datos solo una vez aquí
        this.evidenciaService.getevilist(this.user.username).subscribe(data => {
          /*const uniqueIds = new Set<number>();
          this.evidencias = data.filter(ev => {
            if (!uniqueIds.has(ev.id_evidencia)) {
              uniqueIds.add(ev.id_evidencia);
              return true;
            }
            return false;
          });*/
  
          this.dataSource.data = data;
          this.dataSource.paginator = this.paginator;
        });
  
        // Verifica la fecha límite después de obtener los datos
        this.verificarFechaLimite();
      }
    );
    console.log(this.user.username);
    this.evidenciaService.getevilist(this.user.username).subscribe(data => {
      this.evidencias = data;
      this.dataSource.data = data;
      this.dataSource.data = this.evidencias; // Actualizar el dataSource
    });

    this.verificarFechaLimite();
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
