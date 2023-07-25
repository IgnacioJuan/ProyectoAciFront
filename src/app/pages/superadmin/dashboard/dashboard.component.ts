import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { forkJoin } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { AutoIndicador } from 'src/app/models/AutoridadIndicador';
import { Criterio } from 'src/app/models/Criterio';
import { Persona2 } from 'src/app/services/Persona2';
import { ActividadService } from 'src/app/services/actividad.service';
import { Actividades } from 'src/app/services/actividades';
import { CriteriosService } from 'src/app/services/criterios.service';
import { EvidenciaService } from 'src/app/services/evidencia.service';
import { CalendarOptions } from '@fullcalendar/core';;
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
// Color aleatorio
function cambiarColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = "#" + ((hash & 0x00FFFFFF) | 0x99000000).toString(16).slice(1);
  return color;
}
//Color calendario
function colorCalendario(): string {
  const letras = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent2 implements OnInit {

//prueba
colorScheme: any;
  datos: any[]=[];
  width = 600;
  height = 400;
  showXAxis = true;
  showYAxis = true;
  gradient = false;

//
listaIconos = ['fa-cog fa-spin fa-3x fa-fw',
'fas fa-chart-line fa-2x',
'fas fa-globe fa-spin fa-1x',
'fas fa-globe fa-pulse',
'fa fa-handshake fa-pulse',
'fas fa-chart-bar',
'fas fa-chart-area'];
  suma: { [nombre: string]: number } = {};

  Utilidad!: number;
  items: any[] = [];
// Obtener una referencia al componente DashboardComponent2 usando ViewChild
  @ViewChild(DashboardComponent2)
  dashboardComponent!: DashboardComponent2;
  //
  labesCriterios: any[] = [];
  datosPOrceCriter: number[] = [];
  criteri: any;
  valores: number[] = [10,0];
  listaCriterios: any[] = [];
  modeloMaximo:any;
  listaIndicadores: AutoIndicador[] = [];
  persona:Persona2 = new Persona2();
  //calendario
  eventos: any[] = [];
  
//

// Configuración del calendario
calendarOptions: CalendarOptions = {
  initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.eventos,
    locale: esLocale
};

  // Función para asignar el color a cada card
  getColor(item: any): string {
    return cambiarColor(item.nombre);
  }
  //
  asignarIconos() {
    this.listaCriterios.forEach(item => {
      item.iconoFijo = this.listaIconos[Math.floor(Math.random() * this.listaIconos.length)];
    });
  }
  getIcono(item: any): string {
    return item.iconoFijo;
  }
  //FIN DE VISTA


  public actividad = new Actividades();
  Actividades: Actividad[] = [];
  Evidencias: any[] = [];

  title = 'ng2-charts-demo';
  //VISTA PARA PIE
//PIE
public pieChartOptions: ChartOptions<'pie'> = {
  responsive: true,
};
public pieChartLabels = [''];
public pieChartDatasets = [{
  data: [0]
}];
public pieChartLegend = true;
public pieChartPlugins = [];


//PIE 2
valor1: number = 50;
valor2: number = 50;
porcenta: number = 0;
public pieChartOptions2: ChartOptions<'pie'> = {
  responsive: true,
};
public pieChartLabels2 = ['Porcentaje ' + this.valor1 + '%', 'Porcentaje ' + this.valor2 + '%'];
public pieChartDatasets2 = [{
  data: [this.valor1, this.valor2]
}];
public pieChartLegend2 = true;
public pieChartPlugins2 = [];
//

  //FIN DE VISTA

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: this.valores, label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  constructor(private services: ActividadService,
    private eviden: EvidenciaService,
    private httpCriterios: CriteriosService) {
      this.colorScheme = {
        domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
      };
     }

     onSelect(event: any) {
      console.log(event);
    }
  ngOnInit(): void {
    this.getButtonCriterio();
    this.listarActividad();
    this.modeloMax();
    //calendario
    this.services.get().subscribe((data: Actividades[]) => {

      // Envio los datos
      this.eventos = data.map(evento => ({
        title: evento.nombre.replace(/\d+/g, ''),
        start: new Date(evento.fecha_inicio),
        end: new Date(evento.fecha_fin),
        color: colorCalendario()
      }));
      this.calendarOptions.events = this.eventos;
      console.table("Eventos tabla"+this.eventos);
    });
    //prueba
    this.httpCriterios.getCriterios().subscribe(data => {
      this.listaCriterios = data;
      this.cargarDatosAutomaticamente();
    });
    //
    const primerItem = this.items[0];
    this.dashboardComponent.editar(primerItem);    
  }

  //
  cargarDatosAutomaticamente() {
    this.listaCriterios.forEach(item => {
      this.editar(item.id_criterio);
    });
  }
  //
  ngAfterViewInit() {
    this.cargarDatosAutomaticamente();
  }
//
  modeloMax(){
    this.httpCriterios.getModeMaximo().subscribe(data =>{
      this.modeloMaximo = data;
    })
  }

  listarActividad() {
    this.services.get().subscribe(data => {
      this.Actividades = data;
    })
  }

  listarEvidencias() {
    this.eviden.getEvidencias().subscribe(data=>{
      this.Evidencias=data;
    })
  }


  //LISTA PARA CRITERIOS
  getButtonCriterio() {
    this.httpCriterios.getObtenerCriterio().subscribe(
      data => {
        this.listaCriterios = data;
        console.log(this.listaCriterios)
        // this.labesCriterios = data.map((dato) => dato.nombre);

        // for (let index = 0; index < this.listaCriterios.length; index++) {
        //   const element = this.listaCriterios[index];
        //   console.log(element.id_criterio, "el id")
        //   this.httpCriterios.getObtenerIndicadores(element.id_criterio).subscribe(data => {

        //     this.valor1 = data.reduce((suma, dato) => suma + dato.peso, 0);
        //     this.valor2 = data.reduce((suma, dato) => suma + dato.valor_obtenido, 0);
        //     this.porcenta = Number(((this.valor2 * 100) / this.valor1).toFixed(2));

        //     console.log(this.porcenta, "el porce")
        //     console.log(this.valor1, "el v1")
        //     console.log(this.valor2, "el v2")
        //     this.datosPOrceCriter.push(this.porcenta);
        //     console.log(this.datosPOrceCriter)
        //     console.log(data);
        //   })
        // }

        console.log(this.labesCriterios)
      }
    )
  }
//suma porcentajes
// sumaUti(ItemCrite: Indicador): number {
//   this.criteri = ItemCrite;
//   console.log(this.criteri.id_criterio)
//   this.httpCriterios.getObtenerIndicadores(this.criteri).subscribe(
//     data => {
//       this.listaIndicadores = data;
//       this.pieChartLabels = data.map((dato) => dato.nombre);
//       this.valores = (data.map((dato) => dato.porc_utilida_obtenida));
//       console.log('valores '+this.valores);
//      this.Utilidad = this.valores.reduce((a, b) => a + b, 0);
//       this.pieChartDatasets = [{
//         data: this.valores
//       }];

//     }
//   )
//   return this.Utilidad;
// }

  //LISTAR Y MOSTRAR LOS GRAFICOS
  editar(ItemCrite: any): void {
    this.httpCriterios.getObtenerIndicadores(ItemCrite).subscribe(
      data => {
        this.listaIndicadores = data;
        this.pieChartLabels = data.map((dato) => dato.nombre);
        this.valores = (data.map((dato) => dato.porc_utilida_obtenida));
        console.log('valores ' + this.valores);
       
        this.pieChartDatasets = [{
          data: this.valores
        }];
        // Calculamos la suma y la guardamos en el objeto 'suma'
        this.suma[this.listaCriterios.find(item => item.id_criterio === ItemCrite).nombre] = this.valores.reduce((a, b) => a + b, 0);
        this.datos = this.listaCriterios.map(item => ({
          name: item.nombre, // Nombre del evento
          value: this.suma[item.nombre] || 0 // Porcentaje obtenido (suma, si no existe, se muestra 0)
        }));
      }
    )
  }

  //valor porcentaje
  getPorcentaje(value: number): string {
    const porcentaje = Math.min(Math.max(value || 0, 0), 1);
    return (porcentaje * 100).toFixed(2) + '%';
  }
  //color de barra
  getColorp(value: number): string {
    if (value >= 0.75) {
      //verde
      return '#4caf50';
    } else if (value >= 0.4) {
      //amarillo
      return '#ffc107';
    } else {
      //rojo
      return '#f44336';
    }
  }
  
  //LISTAR Y MOSTRAR LOS GRAFICOS
  editar2(ItemCrite: Criterio): void {
    this.criteri = ItemCrite;
    console.log(this.criteri.id_criterio)
    this.httpCriterios.getObtenerIndicadores(ItemCrite.id_criterio).subscribe(
      data => {
        this.listaIndicadores = data;
        // this.pieChartLabels = data.map((dato) => dato.nombre);
        // this.valores = (data.map((dato) => dato.porc_utilida_obtenida));
        // this.pieChartDatasets = [{
        //   data: this.valores
        // }];

        //para el porcentaje de criterios
        this.valor1 = data.reduce((suma, dato) => suma + dato.peso, 0);
        this.valor2 = data.reduce((suma, dato) => suma + dato.valor_obtenido, 0);

        this.pieChartDatasets = [{
          data: [this.valor2, this.valor1]
        }];

        this.porcenta = Number(((this.valor2 * 100) / this.valor1).toFixed(2));
        this.pieChartLabels = ['Porcentaje ' + this.porcenta + '%'];
        // console.log(this.listaIndicadores);
        // console.log(this.valores);
        // console.log(this.valor1);
      }
    )


  }

  valorObtenido: number[] = [];
  valorObtenter: number[] = [];

  //para la barras
  getButtonCriterio2() {
    this.httpCriterios.getObtenerCriterio().subscribe(
      data => {
        this.listaCriterios = data;
        this.labesCriterios = data.map((dato) => dato.nombre);
        const requests = this.listaCriterios.map((element) => {
          return this.httpCriterios.getObtenerIndicadores(element.id_criterio);
        });

        forkJoin(requests).subscribe((response: any[]) => {
          for (let i = 0; i < response.length; i++) {
            const data = response[i];

            console.log(i)
            //this.valor1 = data.reduce((suma, dato) => suma + dato.peso, 0);
            this.valorObtenter = data.reduce((suma: any, dato: { porc_utilida_obtenida: any; }) => suma.concat(dato.porc_utilida_obtenida), []);
            this.valorObtenido = data.reduce((suma: any, dato: { valor_obtenido: any; }) => suma.concat(dato.valor_obtenido), []);

            this.barChartData = {
              labels: this.labesCriterios,
              datasets: [
                { data: this.valorObtenter, label: 'Valor Obtenido' },
                { data: this.valorObtenido, label: 'Valor Obtener' }
              ]
            };

            console.log(this.barChartData,"aqui");

            break;
            
          }
        });
      }
    );
  }

  //para traer los datos del responsable
getPersonaActividad(objeto:Actividad){
  console.log(objeto.usuario.id)
  this.httpCriterios.getObtenerPersonaId(objeto.usuario.id).subscribe(
    data => {
      
      this.persona=data;
      console.log(this.persona);
    }
  )
}


}
