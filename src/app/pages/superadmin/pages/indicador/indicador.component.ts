import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Evidencia } from 'src/app/models/Evidencia';
import { Indicador } from 'src/app/models/Indicador';
import { IndicadoresService } from 'src/app/services/indicadores.service';
@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.css']
})
export class IndicadorComponent {



  miModal!: ElementRef;
  public indic = new Indicador();
  indicadors: any[] = [];

  filterPost = ''; 
  dataSource = new MatTableDataSource<Evidencia>();

  columnasUsuario: string[] = ['id_indicador', 'nombre', 'descripcion','peso', 'estandar', 'tipo', 'cantidadEvidencia'];

  @ViewChild('datosModalRef') datosModalRef: any;
  @ViewChild(MatPaginator, { static: false }) paginator?: MatPaginator;

  constructor(private indicadorservice: IndicadoresService,
  ) {
  }
  ngOnInit() {
    this.listar()
  }



  listar(): void {
    this.indicadorservice.getIndicadors().subscribe(
      (data: Indicador[]) => {
        this.indicadors = data;
      },
      (error: any) => {
        console.error('Error al listar los indicadors:', error);
      }
    );
  }
  aplicarFiltro() {
    if (this.filterPost) {
      const lowerCaseFilter = this.filterPost.toLowerCase();
      this.dataSource.data = this.dataSource.data.filter((item: any) => {
        return JSON.stringify(item).toLowerCase().includes(lowerCaseFilter);
      });
    } else {
      this.dataSource.data = this.indicadors;;
    }
  }
}
