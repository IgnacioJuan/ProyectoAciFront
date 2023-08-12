import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriteriosService } from './services/criterios.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { authInterceptorProviders } from './services/auth/auth.interceptor';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { MatSelectModule } from '@angular/material/select';

import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';


/* importaciones ce diego */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { ActividadAutoridadComponent } from './pages/autoridad/actividad_autoridad/actividad-autoridad.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FenixComponent } from './pages/fenix/fenix.component';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { NgChartsModule } from 'ng2-charts';
import { GraficosComponent } from './pages/autoridad/graficos/graficos.component';

import { SharedModule } from './shared/shared.module';


import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SiderbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    ActividadAutoridadComponent,
    FenixComponent,
    GraficosComponent,
  
   
    
    
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
    NgxPaginationModule,
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
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatListModule,
    NgChartsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    
  
    
    SharedModule
  ],

  providers: [authInterceptorProviders, CriteriosService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) { }
}
