import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Evidencia } from 'src/app/models/Evidencia';
import { ActivatedRoute, Router } from '@angular/router';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { Indicador } from 'src/app/models/Indicador';
import { Subcriterio } from 'src/app/models/Subcriterio';
import { Criterio } from 'src/app/models/Criterio';
@Component({
  selector: 'app-indicadores-evidencia',
  templateUrl: './indicadores-evidencia.component.html',
  styleUrls: ['./indicadores-evidencia.component.css']
})
export class IndicadoresEvidenciaComponent{
  searchText = '';
  estado = 'pendiente';


  subcriterio: Subcriterio = new Subcriterio();
  criterio: Criterio = new Criterio();
  indicador: Indicador = new Indicador();

  @ViewChild('datosModalRef') datosModalRef: any;
  miModal!: ElementRef;
  public evid = new Evidencia();
  evidencias: any[] = [];
  frmEvidencia: FormGroup;
  guardadoExitoso: boolean = false;


  constructor(private evidenciaservice: EvidenciaService,
    private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.frmEvidencia = fb.group({
      descripcion: ['', [Validators.required]],
    })
  }
  ngOnInit() {
    this.subcriterio = history.state.subcriterio;
    this.criterio= history.state.criterio;
    this.indicador = history.state.data;
    this.listar()
  }
  
  

  guardar() {
    this.evid = this.frmEvidencia.value;
    this.evid.indicador = this.indicador;
    this.evid.estado=this.estado
    this.evidenciaservice.crear(this.evid)
      .subscribe(
        (response: any) => {
          console.log('Subcriterio creado con éxito:', response);
          this.guardadoExitoso = true;
          this.listar();
        },
        (error: any) => {
          console.error('Error al crear el evidencia:', error);
        }
      );

  }
  eliminar(evidencia: any) {
    this.evidenciaservice.eliminarEvidencia( evidencia).subscribe(
      (response: any) => {
        this.listar()
      }
    );
  }

  listar(): void {
    this.evidenciaservice.getEvidencias().subscribe(
      (data: Evidencia[]) => {
        this.evidencias = data.filter(evidencia => evidencia.indicador?.id_indicador === this.indicador.id_indicador);
      },
      (error: any) => {
        console.error('Error al listar los evidencias:', error);
      }
    );
  }

  editDatos(evidencia: Evidencia) {
    this.evid = evidencia;
    this.frmEvidencia = new FormGroup({
      descripcion: new FormControl(evidencia.descripcion)
    });
  }

  limpiarFormulario() {
    this.frmEvidencia.reset();
    this.evid = new Evidencia;
  }

  actualizar() {
    this.evid.descripcion = this.frmEvidencia.value.descripcion;

    this.evidenciaservice.actualizar(this.evid.id_evidencia, this.evid)
      .subscribe((response: any) => {
        this.evid = new Evidencia();
        this.listar();
      });
  }
  verIndicadores() {
    this.router.navigate(['/sup/flujo-criterio/subcriterios-indicador'], { state: { data: this.subcriterio } });
  }
  verSubcriterios() {
    this.router.navigate(['/sup/flujo-criterio/criterios-subcriterio'], { state: { data: this.criterio } });
  }
  verCriterios() {
    this.router.navigate(['/sup/flujo-criterio/criterioSuper']);
  }
}
