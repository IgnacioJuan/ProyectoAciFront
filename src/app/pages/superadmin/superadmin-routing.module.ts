import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperGuard } from 'src/app/services/Guards/super.guard';
import { DashboardComponent2 } from './pages/dashboard/dashboard.component';
import { CrearUsuariosComponent } from './pages/crear-usuarios/crear-usuarios.component';
import { ObcervacionesComponent } from './pages/observaciones/obcervaciones.component';
import { RoleguardGuard } from 'src/app/services/Guards/roleguard.guard';
import { SubcriteriosComponent } from './pages/subcriterios/subcriterios.component';
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { EvidenciasComponent } from './pages/evidencias/evidencias.component';
import { FormulasComponent } from './pages/formulas/formulas.component';
import { CuantitativaComponent } from './pages/cuantitativa/cuantitativa.component';
import { CuanlitativaComponent } from './pages/cuanlitativa/cuanlitativa.component';
import { EvidenciaAtrasadaComponent } from './pages/evidencia-atrasada/evidencia-atrasada.component';
import { CriterioReporteComponent } from './pages/criterio-reporte/criterio-reporte.component';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent2,
  pathMatch: 'full',
  canActivate: [SuperGuard]
}
  ,
{
  path: 'usuarios',
  component: CrearUsuariosComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},

{

  path: 'observaciones',
  component: ObcervacionesComponent,
  pathMatch: 'full',
  canActivate: [RoleguardGuard],
  data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] }

}
  ,

{
  path: 'subcriterioSuper',
  component: SubcriteriosComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},
{
  path: 'indicadoreSuper',
  component: IndicadorComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},
{
  path: 'evidenciaSuper',
  component: EvidenciasComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},
{
  path: 'formula',
  component: FormulasComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},
{
  path: 'cuantitativa',
  component: CuantitativaComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},
{
  path: 'cualitativa',
  component: CuanlitativaComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},
{

  path: 'actividad-rechazada',
  component: EvidenciaAtrasadaComponent,
  pathMatch: 'full',
  //canActivate: [SuperGuard]
  canActivate: [RoleguardGuard],
  data: { allowedRoles: ['SUPERADMIN', 'ADMIN'] }

}
  ,
{
  path: 'formula',
  component: FormulasComponent,
  pathMatch: 'full',
  canActivate: [SuperGuard]
},
//Compartidas
{
  path: 'criterio_reporte',
  component: CriterioReporteComponent,
  pathMatch: 'full',
  canActivate: [RoleguardGuard],
  data: { allowedRoles: ['SUPERADMIN', 'ADMIN', 'AUTORIDAD'] }
},

{
  path: '',
  loadChildren: () => import("./modelo/modelo.module").then(m => m.ModeloModule)
},
{
  path: 'ponderacion',
  loadChildren: () => import("./ponderacion/ponderacion.module").then(m => m.PonderacionModule)
},
{
  path: 'flujo-criterio',
  loadChildren: () => import("./flujo-criterio/flujo-criterio.module").then(m => m.FlujoCriterioModule)
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule {

}
