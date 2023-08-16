import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogoCriterioComponent } from '../dialogo-criterio/dialogo-criterio.component';
import { ModeloService } from 'src/app/services/modelo.service';
import Swal from 'sweetalert2';
import { Modelo } from 'src/app/models/Modelo';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { AsignacionIndicadorService } from 'src/app/services/asignacion-indicador.service';
import { Indicador } from 'src/app/models/Indicador';
import { LoginService } from 'src/app/services/login.service';
import { AsignacionIndicador } from 'src/app/models/AsignacionIndicador';
import { DialogoSubcriterioComponent } from '../dialogo-subcriterio/dialogo-subcriterio.component';
import { Asignacion_Criterios } from 'src/app/models/Asignacion-Criterios';
import { AsignacionCriterioService } from 'src/app/services/asignacion-criterio.service';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { CriteriosService } from 'src/app/services/criterios.service';
import { SubcriteriosService } from 'src/app/services/subcriterios.service';

let VALOR: any[] = [];


@Component({
  selector: 'app-dialogo-modelo-mod',
  templateUrl: './dialogo-modelo-mod.component.html',
  styleUrls: ['./dialogo-modelo-mod.component.css']
})
export class DialogoModeloModComponent implements OnInit {

  isLoggedIn = false;
  user: any;

  dataSource1: any[] = []; // Ajusta el tipo de dato según tu estructura
  selectedSubcriterios: any[] = []; // Almacena los subcriterios seleccionados
  formulario: FormGroup;

  modelo: Modelo = new Modelo();
  indicador: Indicador = new Indicador();
  asignacionIndicador: AsignacionIndicador = new AsignacionIndicador();
  listaIndicadores: Indicador[] = [];


  constructor(public login: LoginService, private asignacionIndicadorService: AsignacionIndicadorService, private dialogRef: MatDialogRef<DialogoModeloModComponent>, private _formBuilder: FormBuilder, private dialog: MatDialog, private router: Router, private modelo_service: ModeloService, private sharedDataService: SharedDataService,
    private asignacionAdminService: AsignacionCriterioService,private criterioService:CriteriosService,
    private subcriterioService:SubcriteriosService, private formBuilder: FormBuilder,
    private indicadorService: IndicadoresService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.formulario = this.formBuilder.group({
      subcriterios_undefined_0: new FormControl(''),
      subcriterios_undefined_1: new FormControl(''),
      subcriterios_undefined_2: new FormControl(''),
      subcriterios_undefined_3: new FormControl(''),
      subcriterios_undefined_4: new FormControl(''),
      subcriterios_undefined_5: new FormControl(''),
      subcriterios_undefined_6: new FormControl('')});
  }

  ngOnInit(): void {
    this.criterioService.getDatos().subscribe(criterios => {
      console.log("Criterios Unidos "+JSON.stringify(criterios));
    });
    this.modelo = this.data.item;
    console.log(this.modelo)
    // this.sharedDataService.datos$.subscribe(data => {
    //   this.dataSource = VALOR;
    //   this.dataSource = data;
    // });
    this.listarCriterios();
    this.listarIndicadores();
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();

      }
    );
  }


  listarCriterios() {
    this.criterioService.listarCriterio().subscribe(criterios => {
      this.dataSource1 = criterios;
      criterios.forEach(criterio => {
        this.listarSubcriteriosPorCriterio(criterio.id_criterio);
      });
    });
  }

  listarSubcriteriosPorCriterio(criterioId: any) {
    this.subcriterioService.listarSubcriterioPorCriterio(criterioId).subscribe(subcriterios => {
      const subcriteriosArray = this.formulario.get(`subcriterios_${criterioId}`) as FormArray;
  
      if (!subcriteriosArray) {
        this.formulario.addControl(`subcriterios_${criterioId}`, this.formBuilder.array([]));
      }
  
      const existingSubcriteriosArray = this.formulario.get(`subcriterios_${criterioId}`) as FormArray;
      console.log("subcriteriosArray:", subcriteriosArray);
      subcriterios.forEach(subcriterio => {
        existingSubcriteriosArray.push(this.formBuilder.control(false));
      });
  
      const criterio = this.dataSource1.find((c: { id_criterio: any; }) => c.id_criterio === criterioId);
      if (criterio) {
        criterio.subcriterios = subcriterios; // Asegúrate de que 'subcriterios' coincide con el nombre que usas en la plantilla
        console.log("criterio con subcriterios:", criterio);
      }
    });
  }
   

  onChangeSubcriterio(criterioId: any, subcriterioIndex: number, subcriterioId: any) {
    console.log("Subcriterio ID:", subcriterioId); 
    const subcriteriosArray = this.formulario.get(`subcriterios_${criterioId}`) as FormArray;
    if (subcriteriosArray) {
      const isChecked = subcriteriosArray.controls[subcriterioIndex].value;
      
      if (isChecked) {
        this.selectedSubcriterios.push(subcriterioId);
      } else {
        const indexToRemove = this.selectedSubcriterios.findIndex(selectedId => selectedId === subcriterioId);
        if (indexToRemove !== -1) {
          this.selectedSubcriterios.splice(indexToRemove, 1);
        }
      }
    }
  }
  
  

  listarIndicadores(): void {
    console.log(this.modelo.id_modelo)
    this.indicadorService.getIndicadorPorModelo(this.modelo.id_modelo).subscribe(
      (data: Indicador[]) => {
        console.log(data)
        this.dataSource = data;
      },
      (error: any) => {
        console.error('Error al listar los criterios:', error);
      }
    );
  }

  //metodo para crear un modelo
  public modificarModelo(): void {
    if (this.modelo.fecha_inicio == null || this.modelo.fecha_fin == null || this.modelo.fecha_final_act == null || this.modelo.nombre == null) {
      Swal.fire('Error', `Debe llenar todos los campos`, 'error');
      return;
    }

    //control de fechas de las 3
    if (this.modelo.fecha_inicio >= this.modelo.fecha_fin || this.modelo.fecha_inicio >= this.modelo.fecha_final_act || this.modelo.fecha_fin <= this.modelo.fecha_final_act) {
      Swal.fire('Error', `Las fechas no son correctas porfavor revisar`, 'error');
      return;
    }


    Swal.fire({
      title: 'Estas seguro de modificar el registro?',
      showDenyButton: true,
      confirmButtonText: 'Cancelar',
      denyButtonText: `Modificar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (!result.isConfirmed) {
        this.modelo_service.modificar(this.modelo).subscribe(
          response => {
            this.dialogRef.close();
            Swal.fire('Procesado!', '', 'success')
          }
        )

      }
    })
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  displayedColumns: string[] = ['nombre'];
  dataSource: any;

  abrirDialogo(): void {

    const dialogRef = this.dialog.open(DialogoCriterioComponent, {
      width: '50%'
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.dataSource = VALOR;
      // console.log('El diálogo se cerró');
    });

  }

  addSubcriterio(): void {
    const dialogRef = this.dialog.open(DialogoSubcriterioComponent, {
      width: '50%',
      data: { /* datos que se pasan al diálogo */ }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }


  reiniciarAdmin() {
    this.asignacionAdminService.listarAsignarResponsable().subscribe(data => {
      data.forEach((element: any) => {
        this.asignacionAdminService.deleteAsignacion_Admin(element.id_asignacion).subscribe(data => {
          console.log(data);
        });
      });
    })
  }

  reiniciarIndicador() {
    this.indicadorService.getIndicadores().subscribe(data => {
      data.forEach((element: any) => {
        element.valor_obtenido = 0;
        element.porc_obtenido = 0;
        element.porc_utilida_obtenida = 0;
        this.indicadorService.ponderarIndicador(element.id_indicador, element).subscribe(data => {
          console.log(data);
        });
      });
    })
  }

}
