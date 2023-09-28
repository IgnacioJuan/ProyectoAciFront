
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [

  
  
  { path: 'app2', redirectTo: 'use/login', pathMatch: 'full' },

  //PATHS DE ADMINISTRADOR
  {
    path: 'app2/adm',
    loadChildren: () => import("./pages/admin/admin.module").then(m => m.AdminModule)
  },
  

  //PATHS DE SUPERADMIN

  {
    path: 'app2/sup',
    loadChildren: () => import("./pages/superadmin/superadmin.module").then(m => m.SuperadminModule)
  },
  

  
  
  //PATHS DE RESPONSABLE
  {
    path: 'app2/res',
    loadChildren: () => import("./pages/responsable/responsable.module").then(m => m.ResponsableModule)
  },
  



  //PATHS DE AUTORIDAD
  {
    path: 'app2/aut',
    loadChildren: () => import("./pages/autoridad/autoridad.module").then(m => m.AutoridadModule)
  },
  
  //Otros Paths
  {
    path: 'app2/use',
    loadChildren: () => import("./pages/user/user.module").then(m => m.UserModule)
  },
  {
    path: 'app2/pagenotfoud',
    component: PageNotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
