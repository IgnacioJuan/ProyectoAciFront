"use strict";(self.webpackChunksistema_security=self.webpackChunksistema_security||[]).push([[906],{906:(Bo,S,s)=>{s.r(S),s.d(S,{PonderacionModule:()=>Eo});var g=s(6895),f=s(1635);class x{constructor(){this.peso=0,this.porc_obtenido=0,this.porc_utilida_obtenida=0,this.valor_obtenido=0,this.visible=!0,this.indicador=null,this.modelo=null,this.contador=0}}var w=s(5226),T=s.n(w),Z=s(6884),o=s(4650),y=s(950),P=s(4006),I=s(1679),v=s(9921);function k(t,r){if(1&t&&(o.TgZ(0,"tr")(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.qZA(),o.TgZ(9,"td"),o._uU(10),o.qZA(),o.TgZ(11,"td"),o._uU(12),o.qZA()()),2&t){const e=r.$implicit;o.xp6(2),o.Oqu(e.id_ponderacion),o.xp6(2),o.Oqu(e.fecha),o.xp6(2),o.Oqu(e.peso),o.xp6(2),o.Oqu(e.porc_obtenido),o.xp6(2),o.Oqu(e.porc_utilidad_obtenida),o.xp6(2),o.Oqu(e.valor_obtenido)}}let Y=(()=>{class t{constructor(e,i,a,n,l){this.servicePonderacion=e,this.fb=i,this.router=a,this.sharedDataService=n,this.modeloService=l,this.ponderacionClase=new x,this.model=new Z.Z,this.myForm=i.group({})}ngOnInit(){this.listarPonderacion(),this.listarSub(),this.listar()}crearPonderacion(){this.servicePonderacion.guardarPonderacion(this.ponderacionClase).subscribe(e=>{console.log("Ponderacion creada con \xe9xito:",e),T().fire("Ponderacion Registrada!","success"),this.listarPonderacion()},e=>{console.error("Error al crear:",e)})}listarPonderacion(){this.servicePonderacion.listarPonderacion().subscribe(e=>{this.dataSource=e}),console.log(this.dataSource+"lista")}listar(){this.modeloService.listarModelo().subscribe(e=>{this.dataSource=e}),console.log(this.dataSource+"lista")}modificarPonderacion(){this.servicePonderacion.actualizar(this.ponderacionClase.id_ponderacion,this.ponderacionClase).subscribe(e=>{console.log("Ponderacion creada con \xe9xito:",e),this.listarPonderacion()})}listarSub(){this.servicePonderacion.listarPonderacion().subscribe(e=>{this.dataSource=e},e=>{console.error("Error al listar los indicadores:",e)})}recibeModelo(){let e=localStorage.getItem("id");this.modeloService.getModeloById(Number(e)).subscribe(i=>{this.model=i})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(y.W),o.Y36(P.qu),o.Y36(f.F0),o.Y36(I.g),o.Y36(v.y))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-ponderacion"]],decls:23,vars:1,consts:[[2,"text-align","center"],["border","1px",1,"table"],[1,"table-dark"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(o.TgZ(0,"h1",0),o._uU(1,"LISTA DE CORTES"),o.qZA(),o.TgZ(2,"table",1)(3,"thead",2)(4,"tr")(5,"th"),o._uU(6,"Id "),o.qZA(),o.TgZ(7,"th"),o._uU(8,"Fecha de corte "),o.qZA(),o.TgZ(9,"th"),o._uU(10,"Peso "),o.qZA(),o.TgZ(11,"th"),o._uU(12,"% Nivel Obtenido"),o.qZA(),o.TgZ(13,"th"),o._uU(14,"% Utilidad Obtenido"),o.qZA(),o.TgZ(15,"th"),o._uU(16,"Valor obtenido "),o.qZA(),o.TgZ(17,"th"),o._uU(18,"Modelo"),o.qZA(),o.TgZ(19,"th"),o._uU(20,"Indicador"),o.qZA()()(),o.TgZ(21,"tbody"),o.YNc(22,k,13,6,"tr",3),o.qZA()()),2&e&&(o.xp6(22),o.Q6J("ngForOf",i.dataSource))},dependencies:[g.sg],styles:["form[_ngcontent-%COMP%]{margin:auto;display:flex;flex-direction:column;justify-content:center;width:400px}"]}),t})();function j(t,r){if(1&t&&(o.TgZ(0,"tr",0)(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.ALo(5,"date"),o.qZA(),o.TgZ(6,"td"),o._uU(7),o.qZA(),o.TgZ(8,"td",9),o._uU(9),o.qZA(),o.TgZ(10,"td"),o._uU(11),o.qZA(),o.TgZ(12,"td"),o._uU(13),o.qZA(),o.TgZ(14,"td"),o._uU(15),o.qZA(),o.TgZ(16,"td"),o._uU(17),o.qZA()()),2&t){const e=r.$implicit;o.xp6(2),o.Oqu(e.id_ponderacion),o.xp6(2),o.Oqu(o.xi3(5,16,e.fecha,"dd/MM/yyyy")),o.xp6(3),o.Oqu(e.peso),o.xp6(1),o.ekj("color-verde","verde"===e.color)("color-rojo","rojo"===e.color)("color-naranja","naranja"===e.color)("color-amarillo","amarillo"===e.color),o.xp6(1),o.hij("",e.porc_obtenido,"%"),o.xp6(2),o.Oqu(e.porc_utilida_obtenida),o.xp6(2),o.Oqu(e.valor_obtenido),o.xp6(2),o.Oqu(e.indicador.id_indicador),o.xp6(2),o.Oqu(e.modelo.id_modelo)}}let D=(()=>{class t{constructor(e,i){this.servicePonderacion=e,this.modeloService=i,this.modelo=new Z.Z,this.ponde=new x}ngOnInit(){this.listarPonderacion(),console.log(this.listarPonderacion()+"ponde")}listarPonderacion(){this.servicePonderacion.listarPonderacion().subscribe(e=>{this.ponderacion=e,this.coloresTabla()},e=>{console.error("Error al listar ponderacion:",e)})}coloresTabla(){this.ponderacion.forEach(e=>{e.color=e.porc_obtenido>75&&e.porc_obtenido<=100?"verde":e.porc_obtenido>50&&e.porc_obtenido<=75?"amarillo":e.porc_obtenido>25&&e.porc_obtenido<=50?"naranja":e.porc_obtenido<=25?"rojo":""})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(y.W),o.Y36(v.y))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-ponderacionfinal"]],decls:39,vars:1,consts:[[2,"text-align","center"],[1,"cuadro-verde"],[1,"cuadro-amarillo"],[1,"cuadro-naranja"],[1,"cuadro-rojo"],[1,"tabla-contenedor"],["border","1px",1,"table"],[1,"table-dark"],["style","text-align: center;",4,"ngFor","ngForOf"],[2,"font-weight","bold"]],template:function(e,i){1&e&&(o.TgZ(0,"h1",0),o._uU(1,"LISTA DE CORTES"),o.qZA(),o._UZ(2,"br")(3,"br"),o.TgZ(4,"div"),o._uU(5," Mayores a 75%"),o._UZ(6,"div",1)(7,"br"),o._uU(8," Mayores a 50% y menor o igual a 75% "),o._UZ(9,"div",2)(10,"br"),o._uU(11," Mayores a 25% y menor o igual a 50% "),o._UZ(12,"div",3)(13,"br"),o._uU(14," Menores o igual a 25% "),o._UZ(15,"div",4),o.qZA(),o._UZ(16,"br"),o.TgZ(17,"div",5)(18,"table",6)(19,"thead",7)(20,"tr")(21,"th"),o._uU(22,"Id "),o.qZA(),o.TgZ(23,"th"),o._uU(24,"Fecha de corte "),o.qZA(),o.TgZ(25,"th"),o._uU(26,"Peso "),o.qZA(),o.TgZ(27,"th"),o._uU(28,"% Nivel Obtenido"),o.qZA(),o.TgZ(29,"th"),o._uU(30,"% Utilidad Obtenida"),o.qZA(),o.TgZ(31,"th"),o._uU(32,"Valor obtenido "),o.qZA(),o.TgZ(33,"th"),o._uU(34,"Indicador"),o.qZA(),o.TgZ(35,"th"),o._uU(36,"Modelo"),o.qZA()()(),o.TgZ(37,"tbody"),o.YNc(38,j,18,19,"tr",8),o.qZA()()()),2&e&&(o.xp6(38),o.Q6J("ngForOf",i.ponderacion))},dependencies:[g.sg,g.uU],styles:[".tabla-contenedor[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto}.tabla-contenedor[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#f8f8f8;z-index:1}.color-verde[_ngcontent-%COMP%]{background-color:#4ef14e}.color-rojo[_ngcontent-%COMP%]{background-color:#e25a5a}.color-naranja[_ngcontent-%COMP%]{background-color:#f8c059}.color-amarillo[_ngcontent-%COMP%]{background-color:#ffff56}.cuadro-verde[_ngcontent-%COMP%]{width:20px;height:20px;background-color:green;display:inline-block;margin-left:10px}.cuadro-amarillo[_ngcontent-%COMP%]{width:20px;height:20px;background-color:#ff0;display:inline-block;margin-left:10px}.cuadro-naranja[_ngcontent-%COMP%]{width:20px;height:20px;background-color:orange;display:inline-block;margin-left:10px}.cuadro-rojo[_ngcontent-%COMP%]{width:20px;height:20px;background-color:red;display:inline-block;margin-left:10px}"]}),t})();var O=s(8896),A=s(6858),C=s(8739),U=s(2986),M=s(6493);function R(t,r){if(1&t&&(o.TgZ(0,"div")(1,"b"),o._uU(2),o.qZA(),o._UZ(3,"br"),o.TgZ(4,"b"),o._uU(5),o.qZA(),o._UZ(6,"br"),o.TgZ(7,"b"),o._uU(8),o.qZA(),o._UZ(9,"br"),o.TgZ(10,"b"),o._uU(11),o.qZA()()),2&t){const e=o.oxw();o.xp6(2),o.hij(" ID: ",e.model.id_modelo,""),o.xp6(3),o.hij(" NOMBRE : ",e.model.nombre,""),o.xp6(3),o.hij(" FECHA INICIO: ",e.model.fecha_inicio,""),o.xp6(3),o.hij(" FECHA FIN: ",e.model.fecha_fin,"")}}function E(t,r){if(1&t&&(o.TgZ(0,"tr")(1,"th",3),o._uU(2),o.qZA()()),2&t){const e=o.oxw();o.xp6(2),o.Oqu(e.indicadorClase.nombre)}}function Q(t,r){if(1&t&&(o.TgZ(0,"tr")(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.qZA()()),2&t){const e=o.oxw();o.xp6(2),o.hij("",e.indicadorClase.peso," i"),o.xp6(2),o.Oqu(e.indicadorClase.porc_obtenido),o.xp6(2),o.Oqu(e.indicadorClase.porc_utilida_obtenida),o.xp6(2),o.Oqu(e.indicadorClase.valor_obtenido)}}let B=(()=>{class t{constructor(e,i,a,n,l,c,u,h){this.servicePonderacion=e,this.fb=i,this.paginatorIntl=a,this.router=n,this.sharedDataService=l,this.modeloService=c,this.asignacionIndicadorService=u,this.indicadorservice=h,this.dataSource=[],this.ponderacionClase=new x,this.model=new Z.Z,this.indicadorClase=new O.s,this.itemsPerPageLabel="Items por p\xe1gina",this.nextPageLabel="Siguiente",this.lastPageLabel="\xdaltima",this.firstPageLabel="Primera",this.previousPageLabel="Anterior",this.rango=(b,m,p)=>{if(0==p||0==m)return`0 de ${p}`;const _=b*m;return`${_+1} - ${_<(p=Math.max(p,0))?Math.min(_+m,p):_+m} de ${p}`},this.myForm=i.group({}),this.paginatorIntl.nextPageLabel=this.nextPageLabel,this.paginatorIntl.lastPageLabel=this.lastPageLabel,this.paginatorIntl.firstPageLabel=this.firstPageLabel,this.paginatorIntl.previousPageLabel=this.previousPageLabel,this.paginatorIntl.itemsPerPageLabel=this.itemsPerPageLabel,this.paginatorIntl.getRangeLabel=this.rango}ngOnInit(){this.listarPonderacion(),this.recibeModelo(),this.recibeIndicador()}listarPonderacion(){this.servicePonderacion.listarPonderacion().subscribe(e=>{this.dataSource=e})}recibeModelo(){let e=localStorage.getItem("id");this.modeloService.getModeloById(Number(e)).subscribe(i=>{this.model=i})}recibeIndicador(){let e=localStorage.getItem("id");this.modeloService.getModeloById(Number(e)).subscribe(i=>{this.model=i,this.indicadorservice.getIndicadorById(Number(e)).subscribe(a=>{this.indicadorClase=a,console.log("Criterio  id :",this.indicadorClase),this.asignacionIndicadorService.getAsignacionIndicadorByIdModelo(Number(e)).subscribe(n=>{this.indicadorservice.getIndicadors().subscribe(l=>{this.dataSource=[],this.asignacion=n,this.dataSource=l.filter(c=>n.some(u=>{const h=c.porc_obtenido;return c.color=h<=25?"rojo":h>25&&h<=50?"naranja":h>50&&h<=75?"amarillo":"verde",c.id_indicador===u.indicador.id_indicador&&c.subcriterio?.id_subcriterio===this.sharedDataService.obtenerIdSubCriterio()})),this.GraficaPastel()})})})})}GraficaPastel(){this.chart=new A.kL("pastel",{type:"pie",data:{labels:["Menor o igual al 25%","Mayor al 25% y menor o igual al 50%","Mayor al 50% y menor al 75%","Mayor al 75%"],datasets:[{label:"Porcentaje de logro",data:[this.dataSource.filter(e=>e.porc_obtenido<=25).length,this.dataSource.filter(e=>e.porc_obtenido>25&&e.porc_obtenido<=50).length,this.dataSource.filter(e=>e.porc_obtenido>50&&e.porc_obtenido<75).length,this.dataSource.filter(e=>e.porc_obtenido>=75).length],backgroundColor:["red","orange","yellow","green"]}]},options:{aspectRatio:2.5}})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(y.W),o.Y36(P.qu),o.Y36(C.ye),o.Y36(f.F0),o.Y36(I.g),o.Y36(v.y),o.Y36(U.v),o.Y36(M.Q))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-ponderacion-indicador"]],decls:15,vars:3,consts:[[4,"ngIf"],["border","1px",1,"table"],[1,"table-dark"],["colspan","5",2,"text-align","center"]],template:function(e,i){1&e&&(o.YNc(0,R,12,4,"div",0),o.TgZ(1,"table",1)(2,"thead",2),o.YNc(3,E,3,1,"tr",0),o.TgZ(4,"tr")(5,"th"),o._uU(6,"Peso "),o.qZA(),o.TgZ(7,"th"),o._uU(8,"%Porc Obtenido"),o.qZA(),o.TgZ(9,"th"),o._uU(10,"% Utilidad Obtenido"),o.qZA(),o.TgZ(11,"th"),o._uU(12,"Valor obtenido "),o.qZA()()(),o.TgZ(13,"tbody"),o.YNc(14,Q,9,4,"tr",0),o.qZA()()),2&e&&(o.Q6J("ngIf",i.model),o.xp6(3),o.Q6J("ngIf",i.indicadorClase),o.xp6(11),o.Q6J("ngIf",i.indicadorClase))},dependencies:[g.O5],styles:["form[_ngcontent-%COMP%]{margin:auto;display:flex;flex-direction:column;justify-content:center;width:400px}.color-rojo[_ngcontent-%COMP%]{background-color:red}.color-verde[_ngcontent-%COMP%]{background-color:green}.color-amarillo[_ngcontent-%COMP%]{background-color:#fffb00}.color-naranja[_ngcontent-%COMP%]{background-color:#f38910}"]}),t})();var q=s(9808),d=s(3626),F=s(5567);function $(t,r){1&t&&(o.TgZ(0,"th",24),o._uU(1,"ID"),o.qZA())}function J(t,r){if(1&t&&(o.TgZ(0,"td",25),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.hij(" ",e.id_indicador," ")}}function G(t,r){1&t&&(o.TgZ(0,"th",24),o._uU(1,"NOMBRE"),o.qZA())}function H(t,r){if(1&t&&(o.TgZ(0,"td",25),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.hij(" ",e.nombre," ")}}function W(t,r){1&t&&(o.TgZ(0,"th",24),o._uU(1,"PESO"),o.qZA())}function V(t,r){if(1&t&&(o.TgZ(0,"td",25),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.hij(" ",e.peso," ")}}function X(t,r){1&t&&(o.TgZ(0,"th",24),o._uU(1,"% OBTENIDO"),o.qZA())}function z(t,r){if(1&t&&(o.TgZ(0,"td",25),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.ekj("color-verde","verde"===e.color)("color-rojo","rojo"===e.color)("color-naranja","naranja"===e.color)("color-amarillo","amarillo"===e.color),o.xp6(1),o.hij(" ",e.porc_obtenido," ")}}function K(t,r){1&t&&(o.TgZ(0,"th",24),o._uU(1,"% UTILIDAD"),o.qZA())}function oo(t,r){if(1&t&&(o.TgZ(0,"td",25),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.hij(" ",e.porc_utilida_obtenida," ")}}function eo(t,r){1&t&&(o.TgZ(0,"th",24),o._uU(1,"VALOR OBTENIDO"),o.qZA())}function to(t,r){if(1&t&&(o.TgZ(0,"td",25),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.hij(" ",e.valor_obtenido," ")}}function io(t,r){1&t&&(o.TgZ(0,"th",24),o._uU(1,"Archivo"),o.qZA())}function ro(t,r){if(1&t&&(o.TgZ(0,"p")(1,"a",29),o._uU(2),o.qZA()()),2&t){const e=r.$implicit;o.xp6(1),o.s9C("href",e.enlace,o.LSH),o.xp6(1),o.hij(" ",e.nombre," ")}}function ao(t,r){1&t&&(o.TgZ(0,"span"),o._uU(1,"Sin enlace"),o.qZA())}function no(t,r){if(1&t&&(o.TgZ(0,"div"),o.YNc(1,ro,3,2,"p",28),o.YNc(2,ao,2,0,"span",27),o.qZA()),2&t){const e=o.oxw(2);o.xp6(1),o.Q6J("ngForOf",e.archivos),o.xp6(1),o.Q6J("ngIf",0==e.archivos.length)}}function co(t,r){if(1&t){const e=o.EpF();o.TgZ(0,"td",25)(1,"a",26),o.NdJ("click",function(){const n=o.CHM(e).$implicit,l=o.oxw();return o.KtG(l.recoverPdf(n.id_indicador))}),o._uU(2,"Descargar PDF"),o.qZA(),o.YNc(3,no,3,2,"div",27),o.qZA()}if(2&t){const e=r.$implicit,i=o.oxw();o.xp6(3),o.Q6J("ngIf",e.id_indicador===i.idndicadorseleccionado)}}function lo(t,r){1&t&&o._UZ(0,"tr",30)}function so(t,r){1&t&&o._UZ(0,"tr",31)}const uo=function(){return[5,10,20]};let mo=(()=>{class t{constructor(e,i,a,n,l,c,u){this.indicadorservice=e,this.router=i,this.fb=a,this.modeloService=n,this.paginatorIntl=l,this.asignacionIndicadorService=c,this.activatedRoute=u,this.itemsPerPageLabel="Criterios por p\xe1gina",this.nextPageLabel="Siguiente",this.lastPageLabel="\xdaltima",this.firstPageLabel="Primera",this.previousPageLabel="Anterior",this.rango=(h,b,m)=>{if(0==m||0==b)return`0 de ${m}`;const p=h*b;return`${p+1} - ${p<(m=Math.max(m,0))?Math.min(p+b,m):p+b} de ${m}`},this.nombre="",this.model=new Z.Z,this.archivos=[],this.critrioClase=new q.v,this.criterio=new q.v,this.modelo=new Z.Z,this.idndicadorseleccionado=0,this.dataSource=new d.by,this.columnasUsuario=["id_indicador","nombre","peso","porc_valor","porc_utilidad","valor","archivo"],this.paginatorIntl.nextPageLabel=this.nextPageLabel,this.paginatorIntl.lastPageLabel=this.lastPageLabel,this.paginatorIntl.firstPageLabel=this.firstPageLabel,this.paginatorIntl.previousPageLabel=this.previousPageLabel,this.paginatorIntl.itemsPerPageLabel=this.itemsPerPageLabel,this.paginatorIntl.getRangeLabel=this.rango,this.dataSource=new d.by}ngAfterViewInit(){this.dataSource.paginator=this.paginator||null}ngOnInit(){this.llenar_datasource()}llenar_datasource(){let e=history.state.criterio.idcriterio;this.nombre=history.state.criterio.nombrecriterio,this.modelo=history.state.modelo,this.indicadorservice.listarIndicadorPorCriterioModelo(e,this.modelo.id_modelo).subscribe(n=>{const l=n.map(c=>({...c,enlace:`${F.Z}/archivo/${c.id_indicador}.pdf`}));this.dataSource=new d.by(l),console.log(this.dataSource.data+"criteriooooooo"),this.coloresTabla(),this.GraficaPastel()})}coloresTabla(){this.dataSource.data.forEach(e=>{e.color=e.porc_obtenido>75&&e.porc_obtenido<=100?"verde":e.porc_obtenido>50&&e.porc_obtenido<=75?"amarillo":e.porc_obtenido>25&&e.porc_obtenido<=50?"naranja":e.porc_obtenido<=25?"rojo":""})}GraficaPastel(){this.chart=new A.kL("pastel",{type:"pie",data:{labels:["Menor o igual al 25%","Mayor al 25% y menor o igual al 50%","Mayor al 50% y menor al 75%","Mayor al 75%"],datasets:[{label:"Porcentaje de logro",data:[this.dataSource.data.filter(e=>e.porc_obtenido<=25).length,this.dataSource.data.filter(e=>e.porc_obtenido>25&&e.porc_obtenido<=50).length,this.dataSource.data.filter(e=>e.porc_obtenido>50&&e.porc_obtenido<75).length,this.dataSource.data.filter(e=>e.porc_obtenido>=75).length],backgroundColor:["red","orange","yellow","green"]}]},options:{aspectRatio:2.5}})}regresar(){this.router.navigate(["/sup/modelo/detallemodelo"],{state:{modelo:this.modelo}})}irinicio(){this.router.navigate(["/sup/modelo/modelo"])}recoverPdf(e){this.indicadorservice.recoverPdfLink(e).subscribe(i=>{this.idndicadorseleccionado=e,this.indicadorservice.getarchivorecoverPdf(e).subscribe(a=>{this.archivos=a,console.log(this.archivos)})})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(M.Q),o.Y36(f.F0),o.Y36(P.qu),o.Y36(v.y),o.Y36(C.ye),o.Y36(U.v),o.Y36(f.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-ponderacion-criterio"]],viewQuery:function(e,i){if(1&e&&o.Gf(C.NW,5),2&e){let a;o.iGM(a=o.CRH())&&(i.paginator=a.first)}},decls:49,vars:7,consts:[[1,"container","bg-light","border","border-start-0","rounded-4"],[1,"blockquote","text-dark",2,"margin-top","5%"],[2,"text-transform","uppercase"],[2,"cursor","pointer",3,"click"],[1,"display-1"],[1,"table-responsive",2,"margin-bottom","5%"],[1,"tabla-contenedor"],["mat-table","",3,"dataSource"],["matColumnDef","id_indicador"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","peso"],["matColumnDef","porc_valor"],["mat-cell","",3,"color-verde","color-rojo","color-naranja","color-amarillo",4,"matCellDef"],["matColumnDef","porc_utilidad"],["matColumnDef","valor"],["matColumnDef","archivo"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements","itemsPerPageLabel","Items por p\xe1gina:","nextPageLabel","Siguiente","previousPageLabel","Anterior",3,"pageSizeOptions"],[1,"mat-elevation-z8","table-responsive",2,"margin-bottom","5%"],[2,"text-align","center"],["id","pastel"],["mat-header-cell",""],["mat-cell",""],[3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"],["target","_blank",3,"href"],["mat-header-row",""],["mat-row",""]],template:function(e,i){1&e&&(o.TgZ(0,"body")(1,"div",0)(2,"blockquote",1)(3,"h1",2)(4,"strong")(5,"a",3),o.NdJ("click",function(){return i.irinicio()}),o._uU(6,"Modelos "),o.qZA(),o._uU(7," > "),o.TgZ(8,"a",3),o.NdJ("click",function(){return i.regresar()}),o._uU(9),o.qZA(),o._uU(10," > "),o.TgZ(11,"a"),o._uU(12),o.qZA()()()(),o.TgZ(13,"h1",4),o._uU(14,"PONDERACI\xd3N DEL CRITERIO"),o.qZA(),o._UZ(15,"br"),o.TgZ(16,"div",5)(17,"div",6)(18,"table",7),o.ynx(19,8),o.YNc(20,$,2,0,"th",9),o.YNc(21,J,2,1,"td",10),o.BQk(),o.ynx(22,11),o.YNc(23,G,2,0,"th",9),o.YNc(24,H,2,1,"td",10),o.BQk(),o.ynx(25,12),o.YNc(26,W,2,0,"th",9),o.YNc(27,V,2,1,"td",10),o.BQk(),o.ynx(28,13),o.YNc(29,X,2,0,"th",9),o.YNc(30,z,2,9,"td",14),o.BQk(),o.ynx(31,15),o.YNc(32,K,2,0,"th",9),o.YNc(33,oo,2,1,"td",10),o.BQk(),o.ynx(34,16),o.YNc(35,eo,2,0,"th",9),o.YNc(36,to,2,1,"td",10),o.BQk(),o.ynx(37,17),o.YNc(38,io,2,0,"th",9),o.YNc(39,co,4,1,"td",10),o.BQk(),o.YNc(40,lo,1,0,"tr",18),o.YNc(41,so,1,0,"tr",19),o.qZA(),o._UZ(42,"mat-paginator",20),o.qZA()(),o._UZ(43,"br"),o.TgZ(44,"div",21)(45,"h1",22),o._uU(46,"Grafica de pastel por Criterios"),o.qZA(),o.TgZ(47,"div"),o._UZ(48,"canvas",23),o.qZA()()()()),2&e&&(o.xp6(9),o.hij("",i.modelo.nombre," "),o.xp6(3),o.hij("",i.nombre," "),o.xp6(6),o.Q6J("dataSource",i.dataSource),o.xp6(22),o.Q6J("matHeaderRowDef",i.columnasUsuario),o.xp6(1),o.Q6J("matRowDefColumns",i.columnasUsuario),o.xp6(1),o.Q6J("pageSizeOptions",o.DdM(6,uo)))},dependencies:[g.sg,g.O5,C.NW,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk],styles:["#chart[_ngcontent-%COMP%]{max-width:380px;margin:35px auto;padding:0}.color-verde[_ngcontent-%COMP%]{background-color:green}.color-rojo[_ngcontent-%COMP%]{background-color:red}.color-naranja[_ngcontent-%COMP%]{background-color:orange}.color-amarillo[_ngcontent-%COMP%]{background-color:#ff0}.tabla-contenedor[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto}.tabla-contenedor[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#f8f8f8;z-index:1}body[_ngcontent-%COMP%]{font:1em/1.618 Inter,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:30px;color:#224}"]}),t})();var N=s(5402);const po=["chart"],ho=["miTabla"];function bo(t,r){1&t&&(o.TgZ(0,"th",32),o._uU(1,"CRITERIO"),o.qZA())}function go(t,r){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const e=o.oxw().$implicit;o.xp6(1),o.hij(" ",null==e.subcriterio||null==e.subcriterio.criterio?null:e.subcriterio.criterio.nombre," ")}}function _o(t,r){}const L=function(t,r){return{"same-name":t,"different-name":r}};function fo(t,r){if(1&t&&(o.TgZ(0,"td",33),o.YNc(1,go,2,1,"ng-container",34),o.YNc(2,_o,0,0,"ng-template",null,35,o.W1O),o.qZA()),2&t){const e=r.$implicit,i=r.index,a=o.MAs(3),n=o.oxw();o.Q6J("ngClass",o.WLB(3,L,0!==i&&(null==e.subcriterio||null==e.subcriterio.criterio?null:e.subcriterio.criterio.nombre)===(null==n.dataSource.data[i-1].subcriterio||null==n.dataSource.data[i-1].subcriterio.criterio?null:n.dataSource.data[i-1].subcriterio.criterio.nombre),0===i||(null==e.subcriterio||null==e.subcriterio.criterio?null:e.subcriterio.criterio.nombre)!==(null==n.dataSource.data[i-1].subcriterio||null==n.dataSource.data[i-1].subcriterio.criterio?null:n.dataSource.data[i-1].subcriterio.criterio.nombre))),o.xp6(1),o.Q6J("ngIf",0===i||(null==e.subcriterio||null==e.subcriterio.criterio?null:e.subcriterio.criterio.nombre)!==(null==n.dataSource.data[i-1].subcriterio||null==n.dataSource.data[i-1].subcriterio.criterio?null:n.dataSource.data[i-1].subcriterio.criterio.nombre))("ngIfElse",a)}}function Po(t,r){1&t&&(o.TgZ(0,"th",32),o._uU(1,"SUBCRITERIO"),o.qZA())}function Co(t,r){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const e=o.oxw().$implicit;o.xp6(1),o.hij(" ",null==e.subcriterio?null:e.subcriterio.nombre," ")}}function Zo(t,r){}function vo(t,r){if(1&t&&(o.TgZ(0,"td",33),o.YNc(1,Co,2,1,"ng-container",34),o.YNc(2,Zo,0,0,"ng-template",null,35,o.W1O),o.qZA()),2&t){const e=r.$implicit,i=r.index,a=o.MAs(3),n=o.oxw();o.Q6J("ngClass",o.WLB(3,L,0!==i&&(null==e.subcriterio?null:e.subcriterio.nombre)==(null==n.dataSource.data[i-1].subcriterio?null:n.dataSource.data[i-1].subcriterio.nombre),0===i||(null==e.subcriterio?null:e.subcriterio.nombre)!==(null==n.dataSource.data[i-1].subcriterio?null:n.dataSource.data[i-1].subcriterio.nombre))),o.xp6(1),o.Q6J("ngIf",0===i||(null==e.subcriterio?null:e.subcriterio.nombre)!==(null==n.dataSource.data[i-1].subcriterio?null:n.dataSource.data[i-1].subcriterio.nombre))("ngIfElse",a)}}function xo(t,r){1&t&&(o.TgZ(0,"th",32),o._uU(1,"INDICADOR"),o.qZA())}function To(t,r){if(1&t&&(o.TgZ(0,"td",36),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.Oqu(e.nombre)}}function yo(t,r){1&t&&(o.TgZ(0,"th",37),o._uU(1,"PESO"),o.qZA())}function Ao(t,r){if(1&t&&(o.TgZ(0,"td",38),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.Oqu(e.peso)}}function Uo(t,r){1&t&&(o.TgZ(0,"th",37),o._uU(1,"%VALOR"),o.qZA())}function Mo(t,r){if(1&t&&(o.TgZ(0,"td",38),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.ekj("color-verde","verde"===e.color)("color-rojo","rojo"===e.color)("color-naranja","naranja"===e.color)("color-amarillo","amarillo"===e.color),o.xp6(1),o.hij(" ",e.porc_obtenido," ")}}function So(t,r){1&t&&(o.TgZ(0,"th",37),o._uU(1,"%UTILIDAD"),o.qZA())}function Io(t,r){if(1&t&&(o.TgZ(0,"td",38),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.hij(" ",e.porc_utilida_obtenida," ")}}function Oo(t,r){1&t&&(o.TgZ(0,"th",37),o._uU(1,"VALOR"),o.qZA())}function qo(t,r){if(1&t&&(o.TgZ(0,"td",38),o._uU(1),o.qZA()),2&t){const e=r.$implicit;o.xp6(1),o.hij(" ",e.valor_obtenido," ")}}function No(t,r){1&t&&o._UZ(0,"tr",39)}function Lo(t,r){1&t&&o._UZ(0,"tr",40)}function wo(t,r){1&t&&(o.TgZ(0,"button",41),o._uU(1," Guardar "),o.qZA())}const ko=function(){return[5,10,20]},jo=[{path:"ponderacion",component:Y,pathMatch:"full"},{path:"ponderacion-final",component:D,pathMatch:"full"},{path:"ponderacion-indicador",component:B,pathMatch:"full",canActivate:[N.$]},{path:"ponderacion-criterio",component:mo,pathMatch:"full",canActivate:[N.$]},{path:"ponderacion-modelo",component:(()=>{class t{constructor(e,i,a,n,l,c,u){this.indicadorservice=e,this.router=i,this.fb=a,this.modeloService=n,this.paginatorIntl=l,this.asignacionIndicadorService=c,this.servicePonderacion=u,this.model=new Z.Z,this.indicadorClase=new O.s,this.indicadores=[],this.datos=[],this.title="ng-chart",this.ponderacionClase=new x,this.peso=0,this.porc_obtenido=0,this.porc_utilida_obtenida=0,this.valor_obtenido=0,this.contador=1,this.idmax=0,this.dataSource=new d.by,this.filterPost="",this.columnasUsuario=["criterio_nombre","subcriterio_nombre","indicador_nombre","peso","porc_valor","porc_utilidad","valor_obt"],this.itemsPerPageLabel="Items por p\xe1gina",this.nextPageLabel="Siguiente",this.lastPageLabel="\xdaltima",this.firstPageLabel="Primera",this.previousPageLabel="Anterior",this.rango=(h,b,m)=>{if(0==m||0==b)return`0 de ${m}`;const p=h*b;return`${p+1} - ${p<(m=Math.max(m,0))?Math.min(p+b,m):p+b} de ${m}`},this.ocultarBoton=!1,this.sumaTotalPesos=0,this.sumaUtilidad=0,this.paginatorIntl.nextPageLabel=this.nextPageLabel,this.paginatorIntl.lastPageLabel=this.lastPageLabel,this.paginatorIntl.firstPageLabel=this.firstPageLabel,this.paginatorIntl.previousPageLabel=this.previousPageLabel,this.paginatorIntl.itemsPerPageLabel=this.itemsPerPageLabel,this.paginatorIntl.getRangeLabel=this.rango}ngAfterViewInit(){this.dataSource.paginator=this.paginator||null}ngOnInit(){this.fechaActual=history.state.fecha,this.conf=history.state.conf,this.model=history.state.modelo,this.ocultarBoton=1==this.conf,this.servicePonderacion.idmax(Number(this.model.id_modelo)).subscribe(e=>{if(e.length>0){const i=e[0].contador;this.idmax=null!==i?i+1:1}else this.idmax=1},e=>{console.error(e)}),this.recibeIndicador(),this.indicadorservice.getIndicadores().subscribe(e=>{this.indicadores=e})}recibeIndicador(){this.asignacionIndicadorService.getAsignacionIndicadorByIdModelo(Number(this.model.id_modelo)).subscribe(e=>{let i=history.state.contador,a=history.state.fecha;this.indicadorservice.getIndicadors().subscribe(n=>{this.dataSource.data=[],this.asignacion=e,1==this.conf?(this.dataSource.data=n.filter(l=>e.some(c=>l.id_indicador===c.indicador.id_indicador)),this.servicePonderacion.listarPonderacionPorFecha(a,Number(i)).subscribe(l=>{this.dataSource.data.forEach(c=>{l.forEach(u=>{c.id_indicador==u.indicador.id_indicador&&(c.nombre=u.indicador.nombre,c.peso=u.peso,c.porc_obtenido=u.porc_obtenido,c.porc_utilida_obtenida=u.porc_utilida_obtenida,c.valor_obtenido=u.valor_obtenido)})}),this.coloresTabla()}),console.log("Data source: 1"+JSON.stringify(this.dataSource.data)),this.createChart(),this.GraficaPastel(),this.calculatePromedioPorCriterio(),this.calcularTSumaPesos(),this.calcularUtilidad(),this.coloresTabla()):(this.dataSource.data=n.filter(l=>e.some(c=>l.id_indicador===c.indicador.id_indicador)),this.createChart(),this.GraficaPastel(),this.calculatePromedioPorCriterio(),this.calcularTSumaPesos(),this.calcularUtilidad(),this.coloresTabla())})})}guardarDatosEnAPI(e){e.preventDefault();const i=[];let a=localStorage.getItem("id");this.dataSource.data.forEach(n=>{const l=this.indicadores.find(u=>u.nombre===n.nombre),c={indicador:{id_indicador:Number(l.id_indicador),nombre:"",descripcion:"",peso:0,tipo:"",estandar:0,valor_obtenido:0,porc_obtenido:0,porc_utilida_obtenida:0,subcriterio:null,visible:!0},peso:n.peso||0,porc_obtenido:n.porc_obtenido||0,porc_utilida_obtenida:n.porc_utilida_obtenida||0,valor_obtenido:n.valor_obtenido||0,id_ponderacion:0,fecha:new Date,visible:!0,modelo:{id_modelo:Number(a),nombre:"",fecha_inicio:this.fecha,fecha_fin:this.fecha,fecha_final_act:this.fecha,visible:!0,usuario:null},contador:this.idmax};i.push(c),this.datos=i}),console.log("Datos a guardar"+i),this.servicePonderacion.guardarPonderacionLista(i).subscribe(n=>{T().fire({title:"Ponderacion guardada \xe9xitosamente",icon:"success"}),this.router.navigate(["/sup/modelo/detallemodelo"],{state:{modelo:this.model}})},n=>{console.error(n),T().fire({title:"Error al guardar ponderaci\xf3n",text:"Ha ocurrido un error al intentar guardar la ponderaci\xf3n.",icon:"error"})})}enviarModelo(e){localStorage.setItem("id",e.id_modelo.toString()),this.model=e}calculatePromedioPorCriterio(){const e={},i={};this.dataSource.data.forEach(a=>{const n=a.subcriterio.criterio?.nombre;n&&(e[n]?(e[n]+=a.porc_obtenido,i[n]+=1):(e[n]=a.porc_obtenido,i[n]=1))}),Object.keys(e).forEach(a=>{e[a]=e[a]/i[a]}),console.log(e),console.log(i)}GraficaPastel(){this.chart=new A.kL("pastel",{type:"pie",data:{labels:["Menor o igual al 25%","Mayor al 25% y menor o igual al 50%","Mayor al 50% y menor al 75%","Mayor al 75%"],datasets:[{label:"Porcentaje de logro",data:[this.dataSource.data.filter(e=>e.porc_obtenido<=25).length,this.dataSource.data.filter(e=>e.porc_obtenido>25&&e.porc_obtenido<=50).length,this.dataSource.data.filter(e=>e.porc_obtenido>50&&e.porc_obtenido<75).length,this.dataSource.data.filter(e=>e.porc_obtenido>=75).length],backgroundColor:["red","orange","yellow","green"]}]},options:{aspectRatio:2.5}})}createChart(){const e={},i={};this.dataSource.data.forEach(l=>{const c=l.subcriterio.criterio?.nombre;c&&(e[c]?(e[c]+=l.porc_obtenido,i[c]+=1):(e[c]=l.porc_obtenido,i[c]=1))}),Object.keys(e).forEach(l=>{e[l]=e[l]/i[l]});const a=this.dataSource.data.map(l=>l.subcriterio.criterio?.nombre),n=a.filter((l,c)=>a.indexOf(l)===c).slice(0,15);this.chart=new A.kL("MyChart",{type:"bar",data:{labels:n,datasets:[{label:"Promedio mayor a 75",data:n.map(l=>{const c=e[l];return c>75?c:null}),backgroundColor:"green"},{label:"Promedio mayoa 50 y menor igual a 75",data:n.map(l=>{const c=e[l];return c<=75&&c>50?c:null}),backgroundColor:"Yellow"},{label:"Promedio mayor a 25 menor a 50 ",data:n.map(l=>{const c=e[l];return c>25&&c<=50?c:null}),backgroundColor:"orange"},{label:"Promedio menor a 25%",data:n.map(l=>{const c=e[l];return c<25?c:null}),backgroundColor:"red"}]},options:{aspectRatio:2.5,plugins:{datalabels:{anchor:"end",align:"end",color:"black",formatter:function(l,c){const u=c.dataset.data[c.dataIndex];return null!==u?u+"%":""}}}}})}coloresTabla(){this.dataSource.data.forEach(e=>{e.color=e.porc_obtenido>75&&e.porc_obtenido<=100?"verde":e.porc_obtenido>50&&e.porc_obtenido<=75?"amarillo":e.porc_obtenido>25&&e.porc_obtenido<=50?"naranja":e.porc_obtenido<=25?"rojo":""})}verCriterios(){this.router.navigate(["/sup/modelo/detallemodelo"],{state:{modelo:this.model}})}listPonderacion(){this.servicePonderacion.listarPonderacion().subscribe(e=>{this.dataSource.data=e})}crearPonderacion(e){this.servicePonderacion.guardarPonderacion(e).subscribe(i=>{console.log("Ponderacion creada con \xe9xito:",i),T().fire("Ponderacion Registrada!","success"),this.listarPonderacion()},i=>{console.error("Error al crear la ponderaci\xf3n:",i)})}listarPonderacion(){this.servicePonderacion.listarPonderacion().subscribe(e=>{this.dataSource.data=e})}getRowCountCriterio(e,i){let a=1;for(let n=i+1;n<this.dataSource.data.length&&this.dataSource.data[n].subcriterio.criterio.nombre===e;n++)a++;return a}getRowCountSubcriterio(e,i){let a=1;for(let n=i+1;n<this.dataSource.data.length&&this.dataSource.data[n].subcriterio.nombre===e;n++)a++;return a}calcularTSumaPesos(){this.sumaTotalPesos=this.dataSource.data.reduce((e,i)=>e+i.peso,0),console.log(this.sumaTotalPesos+" : el total es")}calcularUtilidad(){this.sumaUtilidad=this.dataSource.data.reduce((e,i)=>e+i.porc_utilida_obtenida,0),console.log(this.sumaUtilidad+" : el total es")}getRowSpanCriterio(e){let i=1;for(const a of this.dataSource.data)a.subcriterio.criterio.nombre===e&&i++;return i}getRowSpanSubcriterio(e){let i=1;for(const a of this.dataSource.data)a.subcriterio.nombre===e&&i++;return i}shouldAddBorderTop(e){if(0===e)return!1;const i=this.dataSource.data[e].subcriterio,a=this.dataSource.data[e-1].subcriterio;return i.nombre!==a.nombre||i.criterio.nombre!==a.criterio.nombre}shouldShowCriterioName(e){return 0===e||this.dataSource.data[e].subcriterio.criterio.nombre!==this.dataSource.data[e-1].subcriterio.criterio.nombre}getRowCountCriterioName(e){let i=1;for(let a=e+1;a<this.dataSource.data.length&&this.dataSource.data[a].subcriterio.criterio.nombre===this.dataSource.data[e].subcriterio.criterio.nombre;a++)i++;return i}getRowCountSubcriterioName(e){let i=1;for(let a=e+1;a<this.dataSource.data.length&&this.dataSource.data[a].subcriterio.nombre===this.dataSource.data[e].subcriterio.nombre;a++)i++;return i}irinicio(){this.router.navigate(["/sup/modelo/modelo"])}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(M.Q),o.Y36(f.F0),o.Y36(P.qu),o.Y36(v.y),o.Y36(C.ye),o.Y36(U.v),o.Y36(y.W))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-ponderacion-modelo"]],viewQuery:function(e,i){if(1&e&&(o.Gf(po,5),o.Gf(ho,7),o.Gf(C.NW,5)),2&e){let a;o.iGM(a=o.CRH())&&(i.chart=a.first),o.iGM(a=o.CRH())&&(i.miTabla=a.first),o.iGM(a=o.CRH())&&(i.paginator=a.first)}},decls:95,vars:19,consts:[[1,"container","bg-light","border","border-start-0","rounded-4"],[1,"blockquote","text-dark",2,"margin-top","5%"],[2,"text-transform","uppercase"],[2,"cursor","pointer",3,"click"],[2,"text-align","right"],[1,"container"],["action","",3,"submit"],["border","1px",1,"table"],["mat-table","",3,"dataSource"],["matColumnDef","criterio_nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",3,"ngClass",4,"matCellDef"],["matColumnDef","subcriterio_nombre"],["matColumnDef","indicador_nombre"],["mat-cell","",4,"matCellDef"],["matColumnDef","peso"],["style","text-align: right;","mat-header-cell","",4,"matHeaderCellDef"],["style","text-align: right;","mat-cell","",4,"matCellDef"],["matColumnDef","porc_valor"],["mat-cell","","style","text-align: right;",3,"color-verde","color-rojo","color-naranja","color-amarillo",4,"matCellDef"],["matColumnDef","porc_utilidad"],["matColumnDef","valor_obt"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","","aria-label","Select page of periodic elements","itemsPerPageLabel","Items por p\xe1gina:","nextPageLabel","Siguiente","previousPageLabel","Anterior",3,"pageSizeOptions"],["type","submit","class","btn btn-primary",4,"ngIf"],[2,"display","flex","justify-content","space-between"],[2,"text-align","center"],[2,"width","500px","height","500px"],["id","pastel"],[1,"chart-container",2,"width","500px","height","500px"],["id","MyChart"],["mat-header-cell",""],["mat-cell","",3,"ngClass"],[4,"ngIf","ngIfElse"],["sameName",""],["mat-cell",""],["mat-header-cell","",2,"text-align","right"],["mat-cell","",2,"text-align","right"],["mat-header-row",""],["mat-row",""],["type","submit",1,"btn","btn-primary"]],template:function(e,i){1&e&&(o.TgZ(0,"body")(1,"div",0)(2,"blockquote",1)(3,"h1",2)(4,"strong")(5,"a",3),o.NdJ("click",function(){return i.irinicio()}),o._uU(6,"Modelos "),o.qZA(),o._uU(7," > "),o.TgZ(8,"a",3),o.NdJ("click",function(){return i.verCriterios()}),o._uU(9),o.qZA(),o._uU(10," > "),o.TgZ(11,"a"),o._uU(12,"PONDERACI\xd3N DE MODELO "),o.qZA()()()(),o.TgZ(13,"table")(14,"tr")(15,"td")(16,"b"),o._uU(17,"ID:"),o.qZA()(),o.TgZ(18,"td"),o._uU(19),o.qZA()(),o.TgZ(20,"tr")(21,"td")(22,"b"),o._uU(23,"NOMBRE:"),o.qZA()(),o.TgZ(24,"td"),o._uU(25),o.qZA()(),o.TgZ(26,"tr")(27,"td")(28,"b"),o._uU(29,"FECHA INICIO:"),o.qZA()(),o.TgZ(30,"td"),o._uU(31),o.ALo(32,"date"),o.qZA()(),o.TgZ(33,"tr")(34,"td")(35,"b"),o._uU(36,"FECHA FIN:"),o.qZA()(),o.TgZ(37,"td"),o._uU(38),o.ALo(39,"date"),o.qZA()(),o.TgZ(40,"tr")(41,"td")(42,"b"),o._uU(43,"PESO TOTAL:"),o.qZA()(),o.TgZ(44,"td",4),o._uU(45),o.qZA()(),o.TgZ(46,"tr")(47,"td")(48,"b"),o._uU(49,"UTILIDAD TOTAL:"),o.qZA()(),o.TgZ(50,"td",4),o._uU(51),o.qZA()()(),o._UZ(52,"br"),o.TgZ(53,"div",5)(54,"form",6),o.NdJ("submit",function(n){return i.guardarDatosEnAPI(n)}),o.TgZ(55,"div",7)(56,"table",8),o.ynx(57,9),o.YNc(58,bo,2,0,"th",10),o.YNc(59,fo,4,6,"td",11),o.BQk(),o.ynx(60,12),o.YNc(61,Po,2,0,"th",10),o.YNc(62,vo,4,6,"td",11),o.BQk(),o.ynx(63,13),o.YNc(64,xo,2,0,"th",10),o.YNc(65,To,2,1,"td",14),o.BQk(),o.ynx(66,15),o.YNc(67,yo,2,0,"th",16),o.YNc(68,Ao,2,1,"td",17),o.BQk(),o.ynx(69,18),o.YNc(70,Uo,2,0,"th",16),o.YNc(71,Mo,2,9,"td",19),o.BQk(),o.ynx(72,20),o.YNc(73,So,2,0,"th",16),o.YNc(74,Io,2,1,"td",17),o.BQk(),o.ynx(75,21),o.YNc(76,Oo,2,0,"th",16),o.YNc(77,qo,2,1,"td",17),o.BQk(),o.YNc(78,No,1,0,"tr",22),o.YNc(79,Lo,1,0,"tr",23),o.qZA(),o._UZ(80,"mat-paginator",24),o.qZA(),o.YNc(81,wo,2,0,"button",25),o.qZA(),o._UZ(82,"br")(83,"br"),o.TgZ(84,"div",26)(85,"div")(86,"h1",27),o._uU(87,"Grafica de pastel por Indicadores"),o.qZA(),o.TgZ(88,"div",28),o._UZ(89,"canvas",29),o.qZA()(),o.TgZ(90,"div")(91,"h1",27),o._uU(92,"Grafica de Barras Por Criterios"),o.qZA(),o.TgZ(93,"div",30),o._UZ(94,"canvas",31),o.qZA()()()()()()),2&e&&(o.xp6(9),o.hij("",i.model.nombre," "),o.xp6(10),o.Oqu(i.model.id_modelo),o.xp6(6),o.Oqu(i.model.nombre),o.xp6(6),o.Oqu(o.xi3(32,12,i.model.fecha_inicio,"dd/MM/yyyy")),o.xp6(7),o.Oqu(o.xi3(39,15,i.model.fecha_fin,"dd/MM/yyyy")),o.xp6(7),o.Oqu(i.sumaTotalPesos.toFixed(2)),o.xp6(6),o.Oqu(i.sumaUtilidad.toFixed(2)),o.xp6(5),o.Q6J("dataSource",i.dataSource),o.xp6(22),o.Q6J("matHeaderRowDef",i.columnasUsuario),o.xp6(1),o.Q6J("matRowDefColumns",i.columnasUsuario),o.xp6(1),o.Q6J("pageSizeOptions",o.DdM(18,ko)),o.xp6(1),o.Q6J("ngIf",!i.ocultarBoton))},dependencies:[g.mk,g.O5,P._Y,P.JL,P.F,C.NW,d.BZ,d.fO,d.as,d.w1,d.Dz,d.nj,d.ge,d.ev,d.XQ,d.Gk,g.uU],styles:[".color-rojo[_ngcontent-%COMP%]{background-color:red}.color-naranja[_ngcontent-%COMP%]{background-color:orange}.color-verde[_ngcontent-%COMP%]{background-color:green}.color-amarillo[_ngcontent-%COMP%]{background-color:#ff0}.tabla-contenedor[_ngcontent-%COMP%]{max-height:400px;overflow-y:auto}.tabla-contenedor[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{position:sticky;top:0;background-color:#f8f8f8;z-index:1}.table[_ngcontent-%COMP%]{table-layout:fixed}.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{white-space:pre-wrap;overflow:hidden;text-overflow:ellipsis;min-width:150px}body[_ngcontent-%COMP%]{font:1em/1.618 Inter,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:30px;color:#224}.same-name[_ngcontent-%COMP%]{border-bottom:none}.different-name[_ngcontent-%COMP%]{border-bottom:1px solid #ccc}"]}),t})(),pathMatch:"full"}];let Do=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[f.Bz.forChild(jo),f.Bz]}),t})();var Ro=s(1327);let Eo=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[g.ez,Do,Ro.m]}),t})()}}]);