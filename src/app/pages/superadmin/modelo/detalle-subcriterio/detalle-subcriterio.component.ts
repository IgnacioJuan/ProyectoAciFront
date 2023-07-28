import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Criterio } from 'src/app/models/Criterio';
import { Subcriterio } from 'src/app/models/Subcriterio';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { SubcriteriosService } from 'src/app/services/subcriterios.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Modelo } from 'src/app/models/Modelo';
import { AsignacionIndicadorService } from 'src/app/services/asignacion-indicador.service';
import { CriteriosService } from 'src/app/services/criterios.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-detalle-subcriterio',
  templateUrl: './detalle-subcriterio.component.html',
  styleUrls: ['./detalle-subcriterio.component.css']
})
export class DetalleSubcriterioComponent {

  dataSource: any;
  asignacion: any;
  searchText = '';
  constructor(
    private subcriterioservice: SubcriteriosService,
    private router: Router,
    private sharedDataService: SharedDataService,
    public asignacionIndicadorService: AsignacionIndicadorService,
    public criterioService: CriteriosService,
    public modeloService: ModeloService

  ) {

  }
  criterio: Criterio = new Criterio();
  model: Modelo = new Modelo();
  modelo: Modelo = new Modelo();

  subcrite = new Subcriterio();
  ngOnInit() {
    const data = history.state.data;
    console.log(data); 
    this.criterio = data;
    const savedState = sessionStorage.getItem('savedState');
    if (savedState) {
      this.dataSource = JSON.parse(savedState);

    } else {
      this.recibeSubcriterio();
    }
    this.recibeSubcriterio();

  }

  buscar = '';
  @ViewChild('datosModalRef') datosModalRef: any;
  miModal!: ElementRef;




  recibeSubcriterio() {

    let id = localStorage.getItem("id");
    this.modeloService.getModeloById(Number(id)).subscribe(data => {
      this.model = data;

      //optimizar

      this.asignacionIndicadorService.getAsignacionIndicadorByIdModelo(Number(id)).subscribe(info => {
        this.subcriterioservice.getSubcriterios().subscribe(result => {
          this.dataSource = [];
          this.asignacion = info;
          this.dataSource = result.filter((subcriterio: any) => {
            return info.some((asignacion: any) => {
              return subcriterio.id_subcriterio === asignacion.indicador.subcriterio.id_subcriterio && subcriterio.criterio?.id_criterio === this.sharedDataService.obtenerIdCriterio();

            });
          });
          console.log(this.dataSource);
          localStorage.setItem("subcriterios", JSON.stringify(this.dataSource));
        });
      });

    });
  }




  verIndicadores(element: any) {



    console.log(element);
    this.sharedDataService.mostaridSubcriterio(element.id_subcriterio);


    this.router.navigate(['/sup/modelo/detalle-indicador']);
  }




  verCriterios() {
    this.router.navigate(['/sup/modelo/detallemodelo']);
  }

  irinicio() {

    // código del método del botón
    this.router.navigate(['/sup/modelo/modelo']);

  }




}


