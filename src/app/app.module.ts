import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriteriosService } from './services/criterios.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth/auth.interceptor';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { FenixComponent } from './pages/fenix/fenix.component';
import { SharedModule } from './shared/shared.module';
import { EvidenciaTareasAsginadasComponent } from './pages/responsable/evidencia-tareas-asginadas/evidencia-tareas-asginadas.component';
import { MatListModule } from '@angular/material/list';
import { AprobarRechazarDetalleAdminComponent } from './pages/admin/aprobar-rechazar-detalle-admin/aprobar-rechazar-detalle-admin.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatrizEvaluacionComponent } from './pages/superadmin/modelo/matriz-evaluacion/matriz-evaluacion.component';
import { CalificacionComponent } from './pages/superadmin/modelo/matriz-evaluacion/calificacion/calificacion.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgChartsModule } from 'ng2-charts';
import { GraficosComponent } from './pages/autoridad/graficos/graficos.component';
import { DashboardComponent2 } from './pages/superadmin/dashboard/dashboard.component';
import { MatrizEvidenciasComponent } from './pages/superadmin/modelo/matriz-evaluacion/matriz-evidencias/matriz-evidencias.component';
import { PonderacionComponent } from './pages/superadmin/ponderacion/ponderacion/ponderacion.component';
import { PonderacionIndicadorComponent } from './pages/superadmin/ponderacion/ponderacion-indicador/ponderacion-indicador.component';
import { PonderacionCriterioComponent } from './pages/superadmin/ponderacion/ponderacion-criterio/ponderacion-criterio.component';
import { PonderacionModeloComponent } from './pages/superadmin/ponderacion/ponderacion-modelo/ponderacion-modelo.component';
import { PonderacionfinalComponent } from './pages/superadmin/ponderacion/ponderacionfinal/ponderacionfinal.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ActividadCriterioModelo } from './pages/responsable/actividad-criterio-modelo/actividad-criterio-modelo.component';
import { ActividadCriterioDetalle } from './pages/responsable/actividad-criterio-detalle/actividad-criterio-detalle.component';
import { ActividadCriterioSubcriterio } from './pages/responsable/atividad-criterio-subcriterio/atividad-criterio-subcriterio.component';
import { ActiviadDetalleIndicadorComponent } from './pages/responsable/actividad-detalle-indicador/actividad-detalle-indicador.component';
import { AsignarCriterioComponent } from './pages/superadmin/modelo/detalle-modelo/asignar-criterio/asignar-criterio.component';
import { DialogoCriterioComponent } from './pages/superadmin/modelo/dialogo-criterio/dialogo-criterio.component';
import { DialogoModeloComponent } from './pages/superadmin/modelo/dialogo-modelo/dialogo-modelo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule, MomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { ActividadesResponsableComponent } from './pages/responsable/actividades-responsable/actividades-responsable.component';
import { IndicadoresEvidenciaComponent } from './pages/superadmin/flujo-criterio/indicadores-evidencia/indicadores-evidencia.component';
import { DetalleIndicadorComponent } from './pages/superadmin/modelo/detalle-indicador/detalle-indicador.component';
import { DetalleSubcriterioComponent } from './pages/superadmin/modelo/detalle-subcriterio/detalle-subcriterio.component';
import { CustomDatePipe } from './pages/superadmin/modelo/inicio-modelo/inicio-modelo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    SiderbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    FenixComponent,
    ActividadesResponsableComponent,
    IndicadoresEvidenciaComponent,
    GraficosComponent,
    DetalleSubcriterioComponent,
    DetalleIndicadorComponent,
    ActividadesResponsableComponent,
    IndicadoresEvidenciaComponent,
    MatrizEvaluacionComponent,
    CalificacionComponent,
    EvidenciaTareasAsginadasComponent,
    AprobarRechazarDetalleAdminComponent,
    MatrizEvidenciasComponent,
    PonderacionComponent,
    PonderacionIndicadorComponent,
    PonderacionCriterioComponent,
    PonderacionModeloComponent,
    PonderacionfinalComponent,
    ActividadCriterioModelo,
    ActividadCriterioDetalle,
    ActividadCriterioSubcriterio,
    ActiviadDetalleIndicadorComponent,
    AsignarCriterioComponent,
    CustomDatePipe

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    CommonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTreeModule,
    MatStepperModule,
    MatMomentDateModule,
    MomentDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatListModule ,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatListModule,
    NgChartsModule,
    NgxChartsModule,
    FullCalendarModule
  ],

  providers: [authInterceptorProviders, CriteriosService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) { }
}
