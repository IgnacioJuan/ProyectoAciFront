import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Modelo } from 'src/app/models/Modelo';
import { AsignacionIndicadorService } from 'src/app/services/asignacion-indicador.service';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { ModeloService } from 'src/app/services/modelo.service';
import { Chart, ChartOptions } from 'chart.js';
import { Indicador } from 'src/app/models/Indicador';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Ponderacion } from 'src/app/models/Ponderacion';
import Swal from 'sweetalert2';
import { PonderacionService } from 'src/app/services/ponderacion.service';
import { HttpClient } from '@angular/common/http';
import { isEmpty } from 'rxjs';



@Component({
  selector: 'app-ponderacion-modelo',
  templateUrl: './ponderacion-modelo.component.html',
  styleUrls: ['./ponderacion-modelo.component.css']
})
export class PonderacionModeloComponent implements OnInit {

  @ViewChild("chart")
  chart: any;
  model: Modelo = new Modelo();
  dataSource: any;
  asignacion: any;
  indicadorClase: Indicador = new Indicador();
  indicadores: any[] = [];
  datos:any[] = [];
  title = 'ng-chart';
  porcentaje!: number;
  indicador: any;
  ponderacionClase: Ponderacion = new Ponderacion();
  ponderacion: any;
  guardarponde: any;
  ponderacionv: any;
  //Variable para ponderacion
  fecha!: Date;
  peso: number = 0;
  porc_obtenido: number = 0;
  porc_utilida_obtenida: number = 0;
  valor_obtenido: number = 0;
  indicador1!: Indicador;
  modelo1!: Modelo;
  fechaActual!: Date;
  fechaSeleccionada: any;
  conf: number = 0;
  contador: number = 1;
  idmax: number = 0;

  @ViewChild('miTabla', { static: true }) miTabla!: ElementRef;

  constructor(
    private indicadorservice: IndicadoresService,
    private router: Router, private fb: FormBuilder,
    public modeloService: ModeloService,
    public asignacionIndicadorService: AsignacionIndicadorService,
    private servicePonderacion: PonderacionService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute


  ) {
  }



  ocultarBoton: boolean = false;
  ngOnInit(): void {
    this.fechaActual = new Date();
    this.conf = 0;
    this.activatedRoute.queryParams.subscribe(params => {
      this.fechaSeleccionada = params['fecha']; // Obtener la fecha actual
      this.conf = params['conf'];
      if (this.conf == 1) {
        this.ocultarBoton = true;
      } else {
        this.ocultarBoton = false;
      }
      
 
    });
    let id_modelo = localStorage.getItem("id");
    console.log("id para max "+id_modelo)
    this.servicePonderacion.idmax(Number(id_modelo)).subscribe(
      (response: any) => {
        if (response.length > 0) {
          const contadorMaximo = response[0].contador;
          if (contadorMaximo !== null) {
            this.idmax = contadorMaximo + 1;
            console.log("Contador máximo:", contadorMaximo, "Final:", this.idmax);
          } else {
            
            this.idmax = 1;
            console.log("Contador es nulo:"+this.idmax );
          }
        } else {
          this.idmax = 1;
          console.log("Contador es cadena:"+this.idmax );
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
 
    this.recibeIndicador();
    this.listPonderacion();

    this.indicadorservice.getIndicadores().subscribe(data => {
      this.indicadores = data;
    });
  }



  recibeIndicador() {
    let idModelo = localStorage.getItem("id");
    let cont = localStorage.getItem("contador");

    this.modeloService.getModeloById(Number(idModelo)).subscribe(dataModelo => {
      this.model = dataModelo;
      // Capturar el ID del indicador del modelo

      this.asignacionIndicadorService.getAsignacionIndicadorByIdModelo(Number(idModelo)).subscribe(info => {

        this.indicadorservice.getIndicadors().subscribe(result => {
          this.dataSource = [];
          this.asignacion = info;

          if (this.conf == 1) {
            this.dataSource = result.filter((indicador: any) => {
              return info.some((asignacion: any) => {
                return indicador.id_indicador === asignacion.indicador.id_indicador;
                
              });
              
            });
            this.servicePonderacion.listarPonderacionPorFecha(this.fechaSeleccionada,Number(cont)).subscribe(data => {
              this.dataSource.forEach((indicador: any) => {
                data.forEach((ponderacion: any) => {
                  if (indicador.id_indicador == ponderacion.indicador.id_indicador) {
                    indicador.nombre=ponderacion.indicador.nombre;
                    indicador.peso = ponderacion.peso;
                    indicador.porc_obtenido = ponderacion.porc_obtenido;
                    indicador.porc_utilida_obtenida = ponderacion.porc_utilida_obtenida;
                    indicador.valor_obtenido = ponderacion.valor_obtenido;
                    
                    
                  }
                
                });
                
              });
             
              this.coloresTabla();
             
            });
            console.log(this.dataSource);
            this.createChart();
           
            this.GraficaPastel();
            this.calculatePromedioPorCriterio();

            this.calcularTSumaPesos();
            this.calcularUtilidad();
            this.coloresTabla();
          } else {
            this.dataSource = result.filter((indicador: any) => {
              return info.some((asignacion: any) => {
                return indicador.id_indicador === asignacion.indicador.id_indicador;
              });
            });
            this.createChart();
            this.GraficaPastel();
            this.calculatePromedioPorCriterio();
            this.calcularTSumaPesos();
            this.calcularUtilidad();
            this.coloresTabla();
          }
        });
      });
    });
  }


  //metodo para guardar en ponderacion

  guardarDatosEnAPI(event: Event): void {
    console.log("Estas en guardar");
    event.preventDefault();
    const dataParaGuardar: Ponderacion[] = [];
    let idModelo = localStorage.getItem("id");
  this.dataSource.forEach((column: any) => {
    const indicadorEncontrado = this.indicadores.find((indicador: any) => indicador.nombre === column.nombre);
    if (indicadorEncontrado) {
      console.log("Indicador encontrado:", indicadorEncontrado);
    } else {
      console.log("Indicador no encontrado para:", column.nombre);
    }
    const fila: Ponderacion = {
   
      indicador:  { id_indicador: Number(indicadorEncontrado.id_indicador),nombre:'', descripcion:'', peso:0, tipo:'',
      estandar:0, valor_obtenido:0, porc_obtenido:0, porc_utilida_obtenida:0,subcriterio:null, visible:true },
      peso: column.peso || 0,
      porc_obtenido: column.porc_obtenido || 0,
      porc_utilida_obtenida: column.porc_utilida_obtenida || 0,
      valor_obtenido: column.valor_obtenido || 0,
      id_ponderacion: 0,
      fecha: new Date(),
      visible: true,
      modelo: { id_modelo: Number(idModelo), nombre:'', fecha_inicio:this.fecha, fecha_fin:this.fecha, fecha_final_act:this.fecha,
    visible:true,usuario:null},
    contador:this.idmax,
    };

    dataParaGuardar.push(fila);
    this.datos=dataParaGuardar;
  });
  console.log("Datos a guardar"+dataParaGuardar);
  this.servicePonderacion.guardarPonderacionLista(dataParaGuardar).subscribe(
    (response: any) => {
      // Maneja la respuesta de la API si es necesario
      console.log(response);
      Swal.fire({
        title: 'Ponderacion guardada éxitosamente',
        icon: 'success',
        // ...
      });

      this.router.navigate(['/sup/modelo/detallemodelo']);
      // Recarga la página después de guardar los datos en la API
    },
    (error: any) => {
      // Maneja el error si ocurre alguno
      console.error(error);
      Swal.fire({
        title: 'Error al guardar ponderación',
        text: 'Ha ocurrido un error al intentar guardar la ponderación.',
        icon: 'error',
      
      });
    }
  );
  }
  

  //enviamos modelo
  enviarModelo(modelo: Modelo): void {
    localStorage.setItem("id", modelo.id_modelo.toString());
    this.model = modelo;
   // this.router.navigate(['/sup/modelo/detallemodelo']);
  }

  //Calculamos el promedio de cada criterio
  calculatePromedioPorCriterio() {
    const promediosPorCriterio: { [criterio: string]: number } = {};
    const conteoIndicadoresPorCriterio: { [criterio: string]: number } = {};

    this.dataSource.forEach((indicador: any) => {
      const criterioNombre = indicador.subcriterio.criterio?.nombre;
      if (criterioNombre) {
        if (promediosPorCriterio[criterioNombre]) {
          promediosPorCriterio[criterioNombre] += indicador.porc_obtenido;
          conteoIndicadoresPorCriterio[criterioNombre] += 1;
        } else {
          promediosPorCriterio[criterioNombre] = indicador.porc_obtenido;
          conteoIndicadoresPorCriterio[criterioNombre] = 1;
        }
      }
    });

    Object.keys(promediosPorCriterio).forEach((criterio: string) => {
      const indicadoresCount = conteoIndicadoresPorCriterio[criterio];
      const promedioCriterio = promediosPorCriterio[criterio] / indicadoresCount;
      promediosPorCriterio[criterio] = promedioCriterio;
    });
    console.log(promediosPorCriterio);

    console.log(conteoIndicadoresPorCriterio);
  }





  ///Grafica del pastel
  GraficaPastel() {
    this.chart = new Chart("pastel", {
      type: 'pie',
      data: {
        labels: ['Menor o igual al 25%', 'Mayor al 25% y menor o igual al 50%', 'Mayor al 50% y menor al 75%', 'Mayor al 75%'],
        datasets: [
          {
            label: "Porcentaje de logro",
            data: [
              this.dataSource.filter((indicador: any) => indicador.porc_obtenido <= 25).length,
              this.dataSource.filter((indicador: any) => indicador.porc_obtenido > 25 && indicador.porc_obtenido <= 50).length,
              this.dataSource.filter((indicador: any) => indicador.porc_obtenido > 50 && indicador.porc_obtenido < 75).length,
              this.dataSource.filter((indicador: any) => indicador.porc_obtenido >= 75).length
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

  //Grafica de barras

  createChart() {

    const promediosPorCriterio: { [criterio: string]: number } = {};
    const conteoIndicadoresPorCriterio: { [criterio: string]: number } = {};

    this.dataSource.forEach((indicador: any) => {
      const criterioNombre = indicador.subcriterio.criterio?.nombre;
      if (criterioNombre) {
        if (promediosPorCriterio[criterioNombre]) {
          promediosPorCriterio[criterioNombre] += indicador.porc_obtenido;
          conteoIndicadoresPorCriterio[criterioNombre] += 1;
        } else {
          promediosPorCriterio[criterioNombre] = indicador.porc_obtenido;
          conteoIndicadoresPorCriterio[criterioNombre] = 1;
        }
      }
    });

    Object.keys(promediosPorCriterio).forEach((criterio: string) => {
      const indicadoresCount = conteoIndicadoresPorCriterio[criterio];
      const promedioCriterio = promediosPorCriterio[criterio] / indicadoresCount;
      promediosPorCriterio[criterio] = promedioCriterio;
    });
    console.log(promediosPorCriterio);

    console.log(conteoIndicadoresPorCriterio);
    const labels = this.dataSource.map((indicador: any) => indicador.subcriterio.criterio?.nombre);

    const filteredLabels = labels.filter((label: any, index: any) => labels.indexOf(label) === index).slice(0, 15);
    console.log(filteredLabels + 'filtro criterios');
    const salesData = ['467', '576', '572', '79', '92', '574', '573', '576'];
    const profitData = ['542', '542', '536', '327', '17', '0.00', '538', '541'];

    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: filteredLabels,
        datasets: [
          {
            label: "Promedio mayor a 75",
            data: filteredLabels.map((label: string) => {
              const promedio = promediosPorCriterio[label];
              return promedio > 75 ? promedio : null;
            }),
            backgroundColor: 'green'
          },
          {
            label: "Promedio mayoa 50 y menor igual a 75",
            data: filteredLabels.map((label: string) => {
              const promedio = promediosPorCriterio[label];
              return promedio <= 75 && promedio > 50 ? promedio : null;
            }),
            backgroundColor: 'Yellow'
          },
          {
            label: "Promedio mayor a 25 menor a 50 ",
            data: filteredLabels.map((label: string) => {
              const promedio = promediosPorCriterio[label];
              return promedio > 25 && promedio <= 50 ? promedio : null;
            }),
            backgroundColor: 'orange'
          },
          {
            label: "Promedio menor a 25%",
            data: filteredLabels.map((label: string) => {
              const promedio = promediosPorCriterio[label];
              return promedio < 25 ? promedio : null;
            }),
            backgroundColor: 'red'
          }

        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            formatter: function (value: any, context: any) {
              const promedio = context.dataset.data[context.dataIndex];
              return promedio !== null ? promedio + '%' : '';
            }
          }
        }
      }

    });

  }


  //colores de la celda de la tabla
  coloresTabla() {
    this.dataSource.forEach((indicador: any) => {

      if (indicador.porc_obtenido > 75 && indicador.porc_obtenido <= 100) {
        indicador.color = 'verde'; // Indicador con porcentaje mayor a 50% será de color verde
      }
      else if (indicador.porc_obtenido > 50 && indicador.porc_obtenido <= 75) {
        indicador.color = 'amarillo'; // Indicador con porcentaje mayor a 50% será de color verde
      }
      else if (indicador.porc_obtenido > 25 && indicador.porc_obtenido <= 50) {
        indicador.color = 'naranja'; // Indicador con porcentaje mayor a 50% será de color verde
      } else if (indicador.porc_obtenido <= 25) {
        indicador.color = 'rojo'; // Indicador con porcentaje menor a 30% será de color rojo
      } else {
        indicador.color = ''; // No se asigna ningún color a los indicadores que no cumplen las condiciones anteriores
      }
    });
  }

  //regreso al modelo
  verCriterios() {
    this.router.navigate(['/sup/modelo/detallemodelo']);
  }

  //lista de ponderacion 

  listPonderacion() {
    this.servicePonderacion.listarPonderacion().subscribe(data => {
      this.dataSource = data;

    });
    
  }


  //crear ponderacion
  crearPonderacion(ponderacionClase: Ponderacion) {
    this.servicePonderacion.guardarPonderacion(ponderacionClase)
      .subscribe(
        (data: any) => {
          console.log('Ponderacion creada con éxito:', data);
          Swal.fire(
            'Ponderacion Registrada!',
            'success'
          );
          this.listarPonderacion();
        },
        (error: any) => {
          console.error('Error al crear el subcriterio:', error);
        }
      );
    //this.router.navigate(['/sup/ponderacion']);
  }

  listarPonderacion() {
    this.servicePonderacion.listarPonderacion().subscribe(data => {
      this.dataSource = data;
    });
  }

  //Para las tablas html no tocar ********************************************************************************
  // ...

  getRowCountCriterio(criterio: string, index: number): number {
    let count = 1;
    for (let i = index + 1; i < this.dataSource.length; i++) {
      if (this.dataSource[i].subcriterio.criterio.nombre === criterio) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }

  getRowCountSubcriterio(subcriterio: string, index: number): number {
    let count = 1;
    for (let i = index + 1; i < this.dataSource.length; i++) {
      if (this.dataSource[i].subcriterio.nombre === subcriterio) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }


  //Suma de todos los pesos

  sumaTotalPesos: number = 0;

  calcularTSumaPesos(): void {
    this.sumaTotalPesos = this.dataSource.reduce((suma: any, indicador: any) => suma + indicador.peso, 0);
    console.log(this.sumaTotalPesos + ' : el total es')
  }

  //Calcular las uttilidades
  sumaUtilidad: number = 0;

  calcularUtilidad(): void {
    this.sumaUtilidad = this.dataSource.reduce((suma: any, indicador: any) => suma + indicador.porc_utilida_obtenida, 0);
    console.log(this.sumaUtilidad + ' : el total es')
  }

  getRowSpanCriterio(nombreCriterio: string): number {
    let count = 1;
    for (const column of this.dataSource) {
      if (column.subcriterio.criterio.nombre === nombreCriterio) {
        count++;
      }
    }
    return count;
  }

  getRowSpanSubcriterio(nombreSubcriterio: string): number {
    let count = 1;
    for (const column of this.dataSource) {
      if (column.subcriterio.nombre === nombreSubcriterio) {
        count++;
      }
    }
    return count;
  }

  shouldAddBorderTop(index: number): boolean {
    if (index === 0) {
      return false;
    }

    const currentSubcriterio = this.dataSource[index].subcriterio;
    const previousSubcriterio = this.dataSource[index - 1].subcriterio;

    return currentSubcriterio.nombre !== previousSubcriterio.nombre ||
      currentSubcriterio.criterio.nombre !== previousSubcriterio.criterio.nombre;
  }


  shouldShowCriterioName(index: number): boolean {
    if (index === 0) {
      return true;
    }

    const currentCriterioNombre = this.dataSource[index].subcriterio.criterio.nombre;
    const previousCriterioNombre = this.dataSource[index - 1].subcriterio.criterio.nombre;

    return currentCriterioNombre !== previousCriterioNombre;
  }

  getRowCountCriterioName(index: number): number {
    let count = 1;

    for (let i = index + 1; i < this.dataSource.length; i++) {
      if (this.dataSource[i].subcriterio.criterio.nombre === this.dataSource[index].subcriterio.criterio.nombre) {
        count++;
      } else {
        break;
      }
    }

    return count;
  }

  getRowCountSubcriterioName(index: number): number {
    let count = 1;

    for (let i = index + 1; i < this.dataSource.length; i++) {
      if (this.dataSource[i].subcriterio.nombre === this.dataSource[index].subcriterio.nombre) {
        count++;
      } else {
        break;
      }
    }

    return count;
  }



  irinicio() {

    // código del método del botón
    this.router.navigate(['/sup/modelo/modelo']);

  }

}