import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { forkJoin } from 'rxjs';
import { Actividad } from 'src/app/models/Actividad';
import { AutoIndicador } from 'src/app/models/AutoridadIndicador';
import { Criterio } from 'src/app/models/Criterio';
import { Persona2 } from 'src/app/models/Persona2';
import { ActividadService } from 'src/app/services/actividad.service';
import { Actividades } from 'src/app/models/actividades';
import { CriteriosService } from 'src/app/services/criterios.service';
import { EvidenciaService } from 'src/app/services/evidencia.service';
//Funciones
import { CalendarOptions } from '@fullcalendar/core';;
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { Notificacion } from 'src/app/models/Notificacion';
import { LoginService } from 'src/app/services/login.service';
import { NotificacionService } from 'src/app/services/notificacion.service';
import { PersonaService } from 'src/app/services/persona.service';
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
  // Convertimos el color a un valor hexadecimal numérico
  const colorNumerico = parseInt(color.substring(1), 16);
  const maxColorNumerico = 13421772; 
  if (colorNumerico > maxColorNumerico) {
    color = colorCalendario(); 
  }

  return color;
}


@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})
export class DashboardComponent2 implements OnInit {
  displayedColumns: string[] = ['nombre', 'fechai', 'fechafin'];
  dataSource : Actividades[] = [];
  isLoggedIn = false;
  user: any = null;
  rol: any = null;
  noti = new Notificacion();
  notificaciones: Notificacion[] = [];
  numNotificacionesSinLeer: number = 0;
  selectedColor: string="";
  itemsPerPageLabel = 'Actividades por página';
  nextPageLabel = 'Siguiente';
  lastPageLabel = 'Última';
  titulo= 'Avance de los Criterios';
  @Input() color: ThemePalette= "primary";
//tabla actividades rechazadas
displayedColumns1: string[] = ['nombre', 'fechai', 'fechafin']; // Columnas de la tabla
dataSource1: Actividades[] = [];
//fin actividades rechazadas
 /* @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }*/
//
  labesCriterios: any[] = [];
  datosPOrceCriter: number[] = [];
  criteri: any;
  valores: number[] = [10,0];
  listaCriterios: any[] = [];
  modeloMaximo:any;
  listaIndicadores: AutoIndicador[] = [];
  persona:Persona2 = new Persona2();
  suma: { [nombre: string]: number } = {};
  //prueba
colorScheme: any;
datos: any[]=[];
width = 600;
height = 400;
showXAxis = true;
showYAxis = true;
gradient = false;
//prueba
view: [number, number] = [700, 400]; // Tamaño del gráfico (ancho x alto)
//
listaIconos = ['fa-cog fa-spin fa-3x fa-fw',
'fas fa-chart-line fa-2x',
'fas fa-globe fa-spin fa-1x',
'fas fa-globe fa-pulse',
'fa fa-handshake fa-pulse',
'fas fa-chart-bar',
'fas fa-chart-area'];

Utilidad!: number;
items: any[] = [];
eventos: any[] = [];
crite: any[] = [];
  //FIN DE VISTA


  public actividad = new Actividades();
  Actividades: Actividad[] = [];
  listact: Actividades[] = [];
  numac: Actividades[] = [];
  Evidencias: any[] = [];
  totalAct: number = 0;
  actApro: number = 0;
  porc:number=0;
  datosUsuarios: any[] = [];
    @ViewChild('chart') chart: any;

  title = 'ng2-charts-demo';
  //VISTA PARA PIE
  //PIE
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = [''];
  public pieChartDatasets = [{
    data: this.valores
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

  //barras
  public barChartLegend = true;
  public barChartPlugins = [];

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
  handleDateClick: any;



//
constructor(private services: ActividadService,private paginatorIntl: MatPaginatorIntl,
  private eviden: EvidenciaService,private router: Router, private servper:PersonaService,
  public login: LoginService, private notificationService: NotificacionService,
  private httpCriterios: CriteriosService) {
    this.colorScheme = {
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    };
    this.services.getActividadrechazada().subscribe((data: Actividades[]) => {
      this.dataSource1 = data;
    });

    this.services.getActividadaprobada().subscribe((data: Actividades[]) => {
      this.dataSource = data;
    });
    this.rol = this.login.getUserRole();
    this.paginatorIntl.nextPageLabel = this.nextPageLabel;
    this.paginatorIntl.lastPageLabel = this.lastPageLabel;
    this.paginatorIntl.itemsPerPageLabel = this.itemsPerPageLabel;
   }


   onSelect(event: any) {
    console.log(event);
  }


  ngOnInit(): void {
    this.getButtonCriterio();
    this.getButtonCriterio2();
    this.listarActividad();
    this.modeloMax();
    this.services.get().subscribe((data: Actividades[]) => {
      // Envio los datos
      this.eventos = data.map(evento => ({
        title: evento.nombre,
        start: new Date(evento.fecha_inicio),
        end: new Date(evento.fecha_fin),
        color: colorCalendario()
      }));
      this.calendarOptions.events = this.eventos;
      console.table("Eventos tabla"+this.eventos);
    });
  this.httpCriterios.getCriterios().subscribe(data => {
      this.listaCriterios = data;
      this.cargarDatosAutomaticamente();
    });
    //Notificaciones
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubjec.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    );
    
    this.listarnot(this.user.id);
    //cambiar color
    const storedColor = localStorage.getItem('selectedColor');
    if (storedColor) {
      this.selectedColor = storedColor;
      this.aplicarColorFondo(storedColor);
    }
  }
 //listar act
obtenerActividades() {
  this.services.getAc().subscribe(
    (actividades: Actividades[]) => {
      this.listact = actividades;

      // Recorrer las actividades y obtener el ID de usuario de cada una
      for (const actividad of actividades) {
        const usuarioId = actividad?.usuario?.id;
        if (usuarioId) {
          this.numActividades(usuarioId);
        } else {
          console.error('No se encontró el ID de usuario en una actividad.');
        }
      }
    },
    (error) => {
      console.error('Error al obtener las actividades:', error);
    }
  );
}


numActividades(id:any) {
  this.services.getActUsu(id).subscribe(
    (actividades: Actividades[]) => {
      const totalAct = actividades.length;
      const actApro = actividades.filter((actividad) => actividad.estado === 'Aprobado').length;

      // Calcular el porcentaje de actividades aprobadas
      const porc = (actApro / totalAct) * 100;

      // Obtener el nombre del usuario
      const nombreUsuario = actividades[0]?.usuario?.persona.primer_apellido+" "+actividades[0]?.usuario?.persona.primer_nombre; // Ajusta esta propiedad según la estructura de tu objeto de usuario

      // Agregar la información a la matriz de datos de usuarios
      this.datosUsuarios.push({ id: id, nombre: nombreUsuario, porcentaje: porc });

      // Actualizar la gráfica con los nuevos datos
      this.actualizarGrafica();
    },
    (error) => {
      console.error('Error al obtener las actividades del usuario:', error);
    }
  );
}

actualizarGrafica() {
  if (this.datosUsuarios.length > 0) {
    const resultados = this.datosUsuarios.map((usuario) => {
      return { name: usuario.nombre, value: usuario.porcentaje };
    });
    this.chart.data = resultados;
    this.chart.update();
  }
}
 //
  cambiar() {
    localStorage.setItem('selectedColor', this.selectedColor);
    this.aplicarColorFondo(this.selectedColor);
    /**/
   
  }

  aplicarColorFondo(color: string) {
    // Aplicar el color seleccionado al fondo
    const body = document.getElementById("body");
    const enc = document.getElementById("enc");
    const let1 = document.getElementById("letra");
    const let2 = document.getElementById("letra2");
    const cal = document.getElementById("cal");
    const fig = document.getElementById("fig");
    const fig2 = document.getElementById("tooltip");
    const menu = document.getElementById("menu");
    const notif = document.getElementById("notif");
    const txt = document.getElementById("txt");

    if (body) {
      body.style.backgroundColor = color;
    }
    //color
    if(color==="white"){
    if (enc) {
      enc.style.backgroundColor = "#eeeee4";
    }
    if (let1) {
      let1.style.color = "black";
    }
    if (let2) {
      let2.style.color = "black";
    }
    if (notif) {
      notif.style.backgroundColor = "white";
      notif.style.color = "black";
    }
    if(txt){
      txt.style.backgroundColor = "white";
      txt.style.color = "black";
    }
    if(menu){
      menu.style.backgroundColor = "#b0bec5";
    }
  } else if (color === "#151a30") {
    if (enc) {
      enc.style.backgroundColor = "#222b45";
    }
    if (let1) {
      let1.style.color = "white";
    }
    if (let2) {
      let2.style.color = "white";
    }
    if (notif) {
      notif.style.backgroundColor = "#151a30";
      notif.style.color = "white";
    }
    if(txt){
      txt.style.backgroundColor = "#0d47a1";
      txt.style.color = "white";
    }
    if(menu){
      menu.style.backgroundColor = "#BEC8DC80";
    }
    if(fig){
      fig.style.backgroundColor = "#BEC8DC80";
    }
    if(cal){
      cal.style.color = "white";
    }
  }
  }

  listarnot(id: any) {
    if (this.rol == "ADMIN" || this.rol == "SUPERADMIN") {
      // Cargar notificaciones del rol ADMIN
      this.notificationService.allnotificacion(this.rol).subscribe(
        (data: Notificacion[]) => {
          this.notificaciones = data;
          this.numNotificacionesSinLeer = this.notificaciones.filter(n => !n.visto).length;
          // Cargar notificaciones propias por id
          this.notificationService.getNotificaciones(id).subscribe(
            (dataPropias: Notificacion[]) => {
              this.notificaciones = this.notificaciones.concat(dataPropias);
              this.numNotificacionesSinLeer += dataPropias.filter(n => !n.visto).length;
            },
            (errorPropias: any) => {
              console.error('No se pudieron listar las notificaciones propias');
            }
          );
        },
        (error: any) => {
          console.error('No se pudieron listar las notificaciones');
        }
      );
    } else {
      this.notificationService.getNotificaciones(id).subscribe(
        (data: Notificacion[]) => {
          this.notificaciones = data;
          this.numNotificacionesSinLeer = this.notificaciones.filter(n => !n.visto).length;
        },
        (error: any) => {
          console.error('No se pudieron listar las notificaciones');
        }
      );
    }
  }
  //Mi codigo calendario
 
 irmodelo() {
    this.router.navigate(['/sup/modelo/modelo']);
  }

  detalle() {
    this.router.navigate(['/sup/modelo/detallemodelo']);
  }

calendarOptions: CalendarOptions = {

    plugins: [dayGridPlugin, timeGridPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: this.eventos,
    eventContent: this.personalizarEvent.bind(this),
    locale: esLocale
};

personalizarEvent(info:  any) {
  const fechafin = new Date(info.event.end).toLocaleDateString('es', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const fechai = new Date(info.event.start).toLocaleDateString('es', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return { html: `<b>${info.event.title}</b><br>Inicio: ${fechai} - Fin: ${fechafin}` };
}

getColor(item: any): string {
    return cambiarColor(item.nombre);
  }
  //
  modeloMax(){
    this.httpCriterios.getModeMaximo().subscribe(data =>{
      this.modeloMaximo = data;
    })
  }

  listarActividad() {
    this.httpCriterios.getActividadAtrasada().subscribe(data => {
      this.Actividades = data;
    })
  }

  listarEvidencias() {
    this.eviden.getEvidencias().subscribe(data => {
      this.Evidencias = data;
    })
  }


  
  //LISTA PARA CRITERIOS
  getButtonCriterio() {
    this.httpCriterios.getObtenerCriterio().subscribe(
      data => {
        this.listaCriterios = data;
        console.log(this.listaCriterios)

        console.log(this.labesCriterios)
      }
    )
  }


  //LISTAR Y MOSTRAR LOS GRAFICOS
  cargarDatosAutomaticamente() {
    this.listaCriterios.forEach(item => {
      this.editar(item.id_criterio);
      console.log("Estoy en el init " + item.id_criterio);
    });
  }

  editar(idCriterio: any): void {
    this.httpCriterios.getObtenerIndicadores(idCriterio).subscribe(
      data => {
        this.listaIndicadores = data;
        this.pieChartLabels = data.map((dato) => dato.nombre);
        this.valores = (data.map((dato) => dato.porc_utilida_obtenida));
        this.pieChartDatasets = [{
          data: this.valores
        }];
        // Calculamos la suma y la guardamos en el objeto 'suma'
        this.suma[this.listaCriterios.find(item => item.id_criterio === idCriterio).nombre] = this.valores.reduce((a, b) => a + b, 0);
        this.datos = this.listaCriterios.map(item => ({
          name: item.nombre,
          value: (this.suma[item.nombre] || 0) // Porcentaje obtenido
        }));

        this.crite = this.listaCriterios.map(item => ({
          name: item.nombre,
          value: this.suma[item.nombre] || 0 // Porcentaje obtenido
        })).sort((a, b) => b.value - a.value);
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
       

        //para el porcentaje de criterios
        this.valor1 = data.reduce((suma, dato) => suma + dato.peso, 0);
        this.valor2 = data.reduce((suma, dato) => suma + dato.valor_obtenido, 0);

        this.pieChartDatasets2 = [{
          data: [this.valor2, this.valor1-this.valor2]
        }];

        this.porcenta = Number(((this.valor2 * 100) / this.valor1).toFixed(2));
        this.pieChartLabels2 = ['Porcentaje ' + this.porcenta + '%'];
        
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


        //this.labesCriterios = data.map((dato) => dato.nombre);

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
