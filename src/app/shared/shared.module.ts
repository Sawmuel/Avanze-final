import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavbarprinComponent } from './navbarprin/navbarprin.component';
import { NavbarlogedComponent } from './navbarloged/navbarloged.component';
import { RegistroUserComponent } from './registro-user/registro-user.component';
import { NuevasoliComponent } from './nuevasoli/nuevasoli.component';
import { HistorialComponent } from './historial/historial.component';
import { OrgregistradasComponent } from './orgregistradas/orgregistradas.component';
import { PrincipallogedComponent } from './principalloged/principalloged.component';
import { OrgregistradaslogedComponent } from './orgregistradasloged/orgregistradasloged.component';
import { RegistrarSoliComponent } from './registrar-soli/registrar-soli.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AdminPanelComponent,
    PageNotFoundComponent,
    PrincipalComponent,
    NavbarprinComponent,
    NavbarlogedComponent,
    RegistroUserComponent,
    NuevasoliComponent,
    HistorialComponent,
    OrgregistradasComponent,
    PrincipallogedComponent,
    OrgregistradaslogedComponent,
    RegistrarSoliComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatDatepickerModule,
  ],
  exports: [
    AdminPanelComponent,
    PageNotFoundComponent
  ]
})
export class SharedModule { }
