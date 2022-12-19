import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PrincipalComponent } from './shared/principal/principal.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroUserComponent } from './shared/registro-user/registro-user.component';
import { OrgregistradasComponent } from './shared/orgregistradas/orgregistradas.component';
import { HistorialComponent } from './shared/historial/historial.component';
import { NuevasoliComponent } from './shared/nuevasoli/nuevasoli.component';
import { RegistrarSoliComponent } from './shared/registrar-soli/registrar-soli.component';


const routes: Routes = [
  {path: '', component: PrincipalComponent},
  /*{ path: '', redirectTo: 'login', pathMatch: 'full' },*/
  {path: 'login', component: LoginComponent},
  {path: 'registrouser', component: RegistroUserComponent},
  {path: 'registroorg', component: OrgregistradasComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'nuevasoli', component: NuevasoliComponent},
  {path: 'registrarsoli', component: RegistrarSoliComponent},
  { path: '**',  component: PageNotFoundComponent}
  

  /** LOGED*/

  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
