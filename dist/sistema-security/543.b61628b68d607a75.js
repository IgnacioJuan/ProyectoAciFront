"use strict";(self.webpackChunksistema_security=self.webpackChunksistema_security||[]).push([[543],{6493:(W,C,_)=>{_.d(C,{Q:()=>k});var h=_(4004),M=_(262),f=_(5567),b=_(529),P=_(4650);let k=(()=>{class y{constructor(s){this.http=s,this.apiUrl="URL_DEL_BACKEND"}listarIndicador(){return this.http.get(`${f.Z}/api/indicadores/listar`).pipe((0,h.U)(s=>s))}getIndicadors(){return this.http.get(`${f.Z}/api/indicadores/listar`)}crear(s){return this.http.post(`${f.Z}/api/indicadores/crear`,s).pipe((0,M.K)(v=>{throw console.error(v),v}))}actualizar(s,v){return this.http.put(`${f.Z}/api/indicadores/actualizar/${s}`,v)}eliminar(s,v){return this.http.put(`${f.Z}/api/indicadores/eliminar/${s}`,v)}listarIndicadorPorSubcriterio(s){return this.http.get(`${f.Z}/api/indicadores/listarPorSubcriterio/${s}`).pipe((0,h.U)(v=>v))}listarIndicadorPorCriterioModelo(s,v){return this.http.get(`${f.Z}/api/indicadores/listarIndicadorPorCriterioModelo/${s}/${v}`).pipe((0,h.U)(m=>m))}obtenerEnlaceArchivoPorIndicador(s,v){return this.http.get(`${this.apiUrl}/api/obtenerEnlaceArchivoPorIndicador?id_indicador=${s}&nombre_indicador=${v}`)}indicadoresPorCriterios(s){const m={params:(new b.LE).set("idCriterios",s.join(",")),responseType:"json"};return this.http.get(`${f.Z}/api/indicadores/indicadoresPorCriterios`,m)}indicadoresPorCriteriosPruebaAlvCL(s){const m={params:(new b.LE).set("idCriterios",s.join(",")),responseType:"json"};return this.http.get(`${f.Z}/api/indicadores/indicadoresPorCriteriosPruebaCL`,m)}indicadoresPorCriteriosPruebaAlvCT(s){const m={params:(new b.LE).set("idCriterios",s.join(",")),responseType:"json"};return this.http.get(`${f.Z}/api/indicadores/indicadoresPorCriteriosPruebaCT`,m)}ponderarIndicador(s,v){return this.http.put(`${f.Z}/api/indicadores/ponderacion/${s}`,v)}getIndicadores(){return this.http.get(`${f.Z}/api/indicadores/listar`)}getSubcrindica(s,v){return this.http.get(`${f.Z}/api/indicadores/subcritindicador/${s}/${v}`)}getIndicadorById(s){return this.http.get(`${f.Z}/api/indicadores/buscar/id_indicador/${s}`)}obtenerIndicadoresPorCriterio(s){return this.http.get(`${f.Z}/api/indicadores/obtenerIndicadoresPorCriterio/${s}`).pipe((0,h.U)(v=>v))}obtenerDatosIndicadores(s){return this.http.get(`${f.Z}/api/indicadores/datosIndicadores/${s}`)}recoverPdfLink(s){return this.http.get(`${f.Z}/archivo/recoverPdf/${s}`).pipe((0,h.U)(v=>v))}getarchivorecoverPdf(s){return this.http.get(`${f.Z}/archivo/recoverPdf/${s}`)}obtenerDatosIndicadoresFull(){return this.http.get(`${f.Z}/api/indicadores/datosIndicadoresFull`)}getIndicadorPorModelo(s){return this.http.get(`${f.Z}/api/indicadores/indicadorespormodelo/${s}`)}getIndicadorColProjection(s){return this.http.get(`${f.Z}/api/indicadores/indicadorval/${s}`)}getIndicAdmin(s,v){return this.http.get(`${f.Z}/api/indicadores/indicvaladmin/${s}/${v}`)}}return y.\u0275fac=function(s){return new(s||y)(P.LFG(b.eN))},y.\u0275prov=P.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},9921:(W,C,_)=>{_.d(C,{y:()=>k});var h=_(262),M=_(4004),f=_(5567),b=_(4650),P=_(529);let k=(()=>{class y{constructor(s){this.http=s}createModelo(s){return this.http.post(`${f.Z}/api/modelo/crear`,s).pipe((0,h.K)(v=>{throw console.error(v),v}))}listarModelo(){return this.http.get(`${f.Z}/api/modelo/listar`).pipe((0,M.U)(s=>s))}getModeloById(s){return this.http.get(`${f.Z}/api/modelo/buscar/${s}`)}listarModeloExcepto(s){return this.http.get(`${f.Z}/api/modelo/listarModeloExcepto/${s}`).pipe((0,M.U)(v=>v))}eliminarlogic(s){return this.http.put(`${f.Z}/api/modelo/eliminarlogic/${s}`,s)}modificar(s){return this.http.put(`${f.Z}/api/modelo/modificar/${s.id_modelo}`,s)}getModeMaximo(){return this.http.get(`${f.Z}/api/modelo/listarMax`)}getModelosVista(){return this.http.get(`${f.Z}/api/modelo/datosModelo`)}getlistmodelindi(s){return this.http.get(`${f.Z}/api/modelo/listmodelindi/${s}`)}getlisdescrite(s,v){return this.http.get(`${f.Z}/api/modelo/listcritedes/${s}/${v}`)}getliscritemod(s,v){return this.http.get(`${f.Z}/api/modelo/listcritmod/${s}/${v}`)}getliscriteno(s,v){return this.http.get(`${f.Z}/api/modelo/listcritedesNOM/${s}/${v}`)}getcriterioadmin(s,v){return this.http.get(`${f.Z}/api/modelo/listcriterioadmin/${s}/${v}`)}getcriterioresp(s,v){return this.http.get(`${f.Z}/api/modelo/criterespon/${s}/${v}`)}}return y.\u0275fac=function(s){return new(s||y)(b.LFG(P.eN))},y.\u0275prov=b.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},1282:(W,C,_)=>{_.d(C,{Z:()=>cr});var h=_(1086),M=_(6858),f=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var r=window.screen;if(r)return(r.deviceXDPI||1)/(r.logicalXDPI||1)}return 1}(),b_textSize=function(r,i,e){var d,t=[].concat(i),a=t.length,o=r.font,n=0;for(r.font=e.string,d=0;d<a;++d)n=Math.max(r.measureText(t[d]).width,n);return r.font=o,{height:a*e.lineHeight,width:n}};function P(r,i){var e=i.x,t=i.y;if(null===e)return{x:0,y:-1};if(null===t)return{x:1,y:0};var a=r.x-e,o=r.y-t,n=Math.sqrt(a*a+o*o);return{x:n?a/n:0,y:n?o/n:-1}}var y=0,I=1,s=2,v=4,m=8;function Z(r,i,e){var t=y;return r<e.left?t|=I:r>e.right&&(t|=s),i<e.top?t|=m:i>e.bottom&&(t|=v),t}function T(r,i){var a,o,e=i.anchor,t=r;return i.clamp&&(t=function Y(r,i){for(var l,u,c,e=r.x0,t=r.y0,a=r.x1,o=r.y1,n=Z(e,t,i),d=Z(a,o,i);n|d&&!(n&d);)(l=n||d)&m?(u=e+(a-e)*(i.top-t)/(o-t),c=i.top):l&v?(u=e+(a-e)*(i.bottom-t)/(o-t),c=i.bottom):l&s?(c=t+(o-t)*(i.right-e)/(a-e),u=i.right):l&I&&(c=t+(o-t)*(i.left-e)/(a-e),u=i.left),l===n?n=Z(e=u,t=c,i):d=Z(a=u,o=c,i);return{x0:e,x1:a,y0:t,y1:o}}(t,i.area)),"start"===e?(a=t.x0,o=t.y0):"end"===e?(a=t.x1,o=t.y1):(a=(t.x0+t.x1)/2,o=(t.y0+t.y1)/2),function k(r,i,e,t,a){switch(a){case"center":e=t=0;break;case"bottom":e=0,t=1;break;case"right":e=1,t=0;break;case"left":e=-1,t=0;break;case"top":e=0,t=-1;break;case"start":e=-e,t=-t;break;case"end":break;default:a*=Math.PI/180,e=Math.cos(a),t=Math.sin(a)}return{x:r,y:i,vx:e,vy:t}}(a,o,r.vx,r.vy,i.align)}var S={arc:function(r,i){var e=(r.startAngle+r.endAngle)/2,t=Math.cos(e),a=Math.sin(e),o=r.innerRadius,n=r.outerRadius;return T({x0:r.x+t*o,y0:r.y+a*o,x1:r.x+t*n,y1:r.y+a*n,vx:t,vy:a},i)},point:function(r,i){var e=P(r,i.origin),t=e.x*r.options.radius,a=e.y*r.options.radius;return T({x0:r.x-t,y0:r.y-a,x1:r.x+t,y1:r.y+a,vx:e.x,vy:e.y},i)},bar:function(r,i){var e=P(r,i.origin),t=r.x,a=r.y,o=0,n=0;return r.horizontal?(t=Math.min(r.x,r.base),o=Math.abs(r.base-r.x)):(a=Math.min(r.y,r.base),n=Math.abs(r.base-r.y)),T({x0:t,y0:a+n,x1:t+o,y1:a,vx:e.x,vy:e.y},i)},fallback:function(r,i){var e=P(r,i.origin);return T({x0:r.x,y0:r.y,x1:r.x+(r.width||0),y1:r.y+(r.height||0),vx:e.x,vy:e.y},i)}},$=function(r){return Math.round(r*f)/f};function V(r,i){var e=i.chart.getDatasetMeta(i.datasetIndex).vScale;if(!e)return null;if(void 0!==e.xCenter&&void 0!==e.yCenter)return{x:e.xCenter,y:e.yCenter};var t=e.getBasePixel();return r.horizontal?{x:t,y:null}:{x:null,y:t}}function J(r){return r instanceof M.qi?S.arc:r instanceof M.od?S.point:r instanceof M.ZL?S.bar:S.fallback}function tr(r,i,e){var t=r.shadowBlur,a=e.stroked,o=$(e.x),n=$(e.y),d=$(e.w);a&&r.strokeText(i,o,n,d),e.filled&&(t&&a&&(r.shadowBlur=0),r.fillText(i,o,n,d),t&&a&&(r.shadowBlur=t))}var j=function(r,i,e,t){var a=this;a._config=r,a._index=t,a._model=null,a._rects=null,a._ctx=i,a._el=e};(0,h.a4)(j.prototype,{_modelize:function(r,i,e,t){var a=this,o=a._index,n=(0,h.a0)((0,h.a)([e.font,{}],t,o)),d=(0,h.a)([e.color,h.d.color],t,o);return{align:(0,h.a)([e.align,"center"],t,o),anchor:(0,h.a)([e.anchor,"center"],t,o),area:t.chart.chartArea,backgroundColor:(0,h.a)([e.backgroundColor,null],t,o),borderColor:(0,h.a)([e.borderColor,null],t,o),borderRadius:(0,h.a)([e.borderRadius,0],t,o),borderWidth:(0,h.a)([e.borderWidth,0],t,o),clamp:(0,h.a)([e.clamp,!1],t,o),clip:(0,h.a)([e.clip,!1],t,o),color:d,display:r,font:n,lines:i,offset:(0,h.a)([e.offset,4],t,o),opacity:(0,h.a)([e.opacity,1],t,o),origin:V(a._el,t),padding:(0,h.E)((0,h.a)([e.padding,4],t,o)),positioner:J(a._el),rotation:(0,h.a)([e.rotation,0],t,o)*(Math.PI/180),size:b_textSize(a._ctx,i,n),textAlign:(0,h.a)([e.textAlign,"start"],t,o),textShadowBlur:(0,h.a)([e.textShadowBlur,0],t,o),textShadowColor:(0,h.a)([e.textShadowColor,d],t,o),textStrokeColor:(0,h.a)([e.textStrokeColor,d],t,o),textStrokeWidth:(0,h.a)([e.textStrokeWidth,0],t,o)}},update:function(r){var n,d,l,i=this,e=null,t=null,a=i._index,o=i._config,u=(0,h.a)([o.display,!0],r,a);u&&(d=(0,h.v)((0,h.Q)(o.formatter,[n=r.dataset.data[a],r]),n),(l=(0,h.k)(d)?[]:function(r){var e,i=[];for(r=[].concat(r);r.length;)"string"==typeof(e=r.pop())?i.unshift.apply(i,e.split("\n")):Array.isArray(e)?r.push.apply(r,e):(0,h.k)(r)||i.unshift(""+e);return i}(d)).length&&(t=function Q(r){var i=r.borderWidth||0,e=r.padding,t=r.size.height,a=r.size.width,o=-a/2,n=-t/2;return{frame:{x:o-e.left-i,y:n-e.top-i,w:a+e.width+2*i,h:t+e.height+2*i},text:{x:o,y:n,w:a,h:t}}}(e=i._modelize(u,l,o,r)))),i._model=e,i._rects=t},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(r,i){var n,t=r.ctx,a=this._model,o=this._rects;this.visible()&&(t.save(),a.clip&&(n=a.area,t.beginPath(),t.rect(n.left,n.top,n.right-n.left,n.bottom-n.top),t.clip()),t.globalAlpha=function(r,i,e){return Math.max(r,Math.min(i,e))}(0,a.opacity,1),t.translate($(i.x),$(i.y)),t.rotate(a.rotation),function rr(r,i,e){var t=e.backgroundColor,a=e.borderColor,o=e.borderWidth;!t&&(!a||!o)||(r.beginPath(),function q(r,i,e,t,a,o){var n=Math.PI/2;if(o){var d=Math.min(o,a/2,t/2),l=i+d,u=e+d,c=i+t-d,p=e+a-d;r.moveTo(i,u),l<c&&u<p?(r.arc(l,u,d,-Math.PI,-n),r.arc(c,u,d,-n,0),r.arc(c,p,d,0,n),r.arc(l,p,d,n,Math.PI)):l<c?(r.moveTo(l,e),r.arc(c,u,d,-n,n),r.arc(l,u,d,n,Math.PI+n)):u<p?(r.arc(l,u,d,-Math.PI,0),r.arc(l,p,d,0,Math.PI)):r.arc(l,u,d,-Math.PI,Math.PI),r.closePath(),r.moveTo(i,e)}else r.rect(i,e,t,a)}(r,$(i.x)+o/2,$(i.y)+o/2,$(i.w)-o,$(i.h)-o,e.borderRadius),r.closePath(),t&&(r.fillStyle=t,r.fill()),a&&o&&(r.strokeStyle=a,r.lineWidth=o,r.lineJoin="miter",r.stroke()))}(t,o.frame,a),function ir(r,i,e,t){var g,a=t.textAlign,o=t.color,n=!!o,d=t.font,l=i.length,u=t.textStrokeColor,c=t.textStrokeWidth,p=u&&c;if(l&&(n||p))for(e=function er(r,i,e){var t=e.lineHeight,a=r.w,o=r.x;return"center"===i?o+=a/2:("end"===i||"right"===i)&&(o+=a),{h:t,w:a,x:o,y:r.y+t/2}}(e,a,d),r.font=d.string,r.textAlign=a,r.textBaseline="middle",r.shadowBlur=t.textShadowBlur,r.shadowColor=t.textShadowColor,n&&(r.fillStyle=o),p&&(r.lineJoin="round",r.lineWidth=c,r.strokeStyle=u),g=0,l=i.length;g<l;++g)tr(r,i[g],{stroked:p,filled:n,w:e.w,x:e.x,y:e.y+e.h*g})}(t,a.lines,o.text,a),t.restore())}});var ar=Number.MIN_SAFE_INTEGER||-9007199254740991,or=Number.MAX_SAFE_INTEGER||9007199254740991;function D(r,i,e){var t=Math.cos(e),a=Math.sin(e),o=i.x,n=i.y;return{x:o+t*(r.x-o)-a*(r.y-n),y:n+a*(r.x-o)+t*(r.y-n)}}function z(r,i){var o,n,u,e=or,t=ar,a=i.origin;for(o=0;o<r.length;++o)u=i.vx*((n=r[o]).x-a.x)+i.vy*(n.y-a.y),e=Math.min(e,u),t=Math.max(t,u);return{min:e,max:t}}function R(r,i){var e=i.x-r.x,t=i.y-r.y,a=Math.sqrt(e*e+t*t);return{vx:(i.x-r.x)/a,vy:(i.y-r.y)/a,origin:r,ln:a}}var K=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};function N(r,i,e){var t=i.positioner(r,i),a=t.vx,o=t.vy;if(!a&&!o)return{x:t.x,y:t.y};var n=e.w,d=e.h,l=i.rotation,u=Math.abs(n/2*Math.cos(l))+Math.abs(d/2*Math.sin(l)),c=Math.abs(n/2*Math.sin(l))+Math.abs(d/2*Math.cos(l)),p=1/Math.max(Math.abs(a),Math.abs(o));return u*=a*p,c*=o*p,{x:t.x+(u+=i.offset*a),y:t.y+(c+=i.offset*o)}}(0,h.a4)(K.prototype,{center:function(){var r=this._rect;return{x:r.x+r.w/2,y:r.y+r.h/2}},update:function(r,i,e){this._rotation=e,this._rect={x:i.x+r.x,y:i.y+r.y,w:i.w,h:i.h}},contains:function(r){var i=this,t=i._rect;return!((r=D(r,i.center(),-i._rotation)).x<t.x-1||r.y<t.y-1||r.x>t.x+t.w+2||r.y>t.y+t.h+2)},intersects:function(r){var a,o,n,i=this._points(),e=r._points(),t=[R(i[0],i[1]),R(i[0],i[3])];for(this._rotation!==r._rotation&&t.push(R(e[0],e[1]),R(e[0],e[3])),a=0;a<t.length;++a)if(o=z(i,t[a]),n=z(e,t[a]),o.max<n.min||n.max<o.min)return!1;return!0},_points:function(){var r=this,i=r._rect,e=r._rotation,t=r.center();return[D({x:i.x,y:i.y},t,e),D({x:i.x+i.w,y:i.y},t,e),D({x:i.x+i.w,y:i.y+i.h},t,e),D({x:i.x,y:i.y+i.h},t,e)]}});var A={prepare:function(r){var e,t,a,o,n,i=[];for(e=0,a=r.length;e<a;++e)for(t=0,o=r[e].length;t<o;++t)i.push(n=r[e][t]),n.$layout={_box:new K,_hidable:!1,_visible:!0,_set:e,_idx:n._index};return i.sort(function(d,l){var u=d.$layout,c=l.$layout;return u._idx===c._idx?c._set-u._set:c._idx-u._idx}),this.update(i),i},update:function(r){var e,t,a,o,n,i=!1;for(e=0,t=r.length;e<t;++e)o=(a=r[e]).model(),(n=a.$layout)._hidable=o&&"auto"===o.display,n._visible=a.visible(),i|=n._hidable;i&&function sr(r){var i,e,t,a,o,n,d;for(i=0,e=r.length;i<e;++i)(a=(t=r[i]).$layout)._visible&&(d=new Proxy(t._el,{get:(l,u)=>l.getProps([u],!0)[u]}),o=t.geometry(),n=N(d,t.model(),o),a._box.update(n,o,t.rotation()));(function nr(r,i){var e,t,a,o;for(e=r.length-1;e>=0;--e)for(a=r[e].$layout,t=e-1;t>=0&&a._visible;--t)(o=r[t].$layout)._visible&&a._box.intersects(o._box)&&i(a,o)})(r,function(l,u){var c=l._hidable,p=u._hidable;c&&p||p?u._visible=!1:c&&(l._visible=!1)})}(r)},lookup:function(r,i){var e,t;for(e=r.length-1;e>=0;--e)if((t=r[e].$layout)&&t._visible&&t._box.contains(i))return r[e];return null},draw:function(r,i){var e,t,a,o,n,d;for(e=0,t=i.length;e<t;++e)(o=(a=i[e]).$layout)._visible&&(n=a.geometry(),d=N(a._el,a.model(),n),o._box.update(d,n,a.rotation()),a.draw(r,d))}},x="$datalabels",F="$default";function L(r,i,e,t){if(i){var n,a=e.$context,o=e.$groups;i[o._set]&&(n=i[o._set][o._key])&&!0===(0,h.Q)(n,[a,t])&&(r[x]._dirty=!0,e.update(a))}}var cr={id:"datalabels",defaults:{align:"center",anchor:"center",backgroundColor:null,borderColor:null,borderRadius:0,borderWidth:0,clamp:!1,clip:!1,color:void 0,display:!0,font:{family:void 0,lineHeight:1.2,size:void 0,style:void 0,weight:null},formatter:function(r){if((0,h.k)(r))return null;var e,t,a,i=r;if((0,h.i)(r))if((0,h.k)(r.label))if((0,h.k)(r.r))for(i="",a=0,t=(e=Object.keys(r)).length;a<t;++a)i+=(0!==a?", ":"")+e[a]+": "+r[e[a]];else i=r.r;else i=r.label;return""+i},labels:void 0,listeners:{},offset:4,opacity:1,padding:{top:4,right:4,bottom:4,left:4},rotation:0,textAlign:"start",textStrokeColor:void 0,textStrokeWidth:0,textShadowBlur:0,textShadowColor:void 0},beforeInit:function(r){r[x]={_actives:[]}},beforeUpdate:function(r){var i=r[x];i._listened=!1,i._listeners={},i._datasets=[],i._labels=[]},afterDatasetUpdate:function(r,i,e){var p,g,G,H,B,X,w,E,t=i.index,a=r[x],o=a._datasets[t]=[],n=r.isDatasetVisible(t),d=r.data.datasets[t],l=function ur(r,i){var o,n,e=r.datalabels,t={},a=[];return!1===e?null:(!0===e&&(e={}),i=(0,h.a4)({},[i,e]),o=i.labels||{},n=Object.keys(o),delete i.labels,n.length?n.forEach(function(d){o[d]&&a.push((0,h.a4)({},[i,o[d],{_key:d}]))}):a.push(i),t=a.reduce(function(d,l){return(0,h.F)(l.listeners||{},function(u,c){d[c]=d[c]||{},d[c][l._key||F]=u}),delete l.listeners,d},{}),{labels:a,listeners:t})}(d,e),u=i.meta.data||[],c=r.ctx;for(c.save(),p=0,G=u.length;p<G;++p)if((w=u[p])[x]=[],n&&w&&r.getDataVisibility(p)&&!w.skip)for(g=0,H=l.labels.length;g<H;++g)X=(B=l.labels[g])._key,(E=new j(B,c,w,p)).$groups={_set:t,_key:X||F},E.$context={active:!1,chart:r,dataIndex:p,dataset:d,datasetIndex:t},E.update(E.$context),w[x].push(E),o.push(E);c.restore(),(0,h.a4)(a._listeners,l.listeners,{merger:function(O,U,pr){U[O]=U[O]||{},U[O][i.index]=pr[O],a._listened=!0}})},afterUpdate:function(r){r[x]._labels=A.prepare(r[x]._datasets)},afterDatasetsDraw:function(r){A.draw(r,r[x]._labels)},beforeEvent:function(r,i){if(r[x]._listened){var e=i.event;switch(e.type){case"mousemove":case"mouseout":!function vr(r,i){var a,o,e=r[x],t=e._listeners;if(t.enter||t.leave){if("mousemove"===i.type)o=A.lookup(e._labels,i);else if("mouseout"!==i.type)return;a=e._hovered,e._hovered=o,function hr(r,i,e,t,a){var o,n;!e&&!t||(e?t?e!==t&&(n=o=!0):n=!0:o=!0,n&&L(r,i.leave,e,a),o&&L(r,i.enter,t,a))}(r,t,a,o,i)}}(r,e);break;case"click":!function fr(r,i){var e=r[x],t=e._listeners.click,a=t&&A.lookup(e._labels,i);a&&L(r,t,a,i)}(r,e)}}},afterEvent:function(r){var o,n,d,l,u,c,p,i=r[x],a=function(r,i){var a,o,n,d,e=r.slice(),t=[];for(a=0,n=i.length;a<n;++a)-1===(o=e.indexOf(d=i[a]))?t.push([d,1]):e.splice(o,1);for(a=0,n=e.length;a<n;++a)t.push([e[a],-1]);return t}(i._actives,i._actives=r.getActiveElements());for(o=0,n=a.length;o<n;++o)if((u=a[o])[1])for(d=0,l=(p=u[0].element[x]||[]).length;d<l;++d)(c=p[d]).$context.active=1===u[1],c.update(c.$context);(i._dirty||a.length)&&(A.update(i._labels),r.render()),delete i._dirty}}}}]);