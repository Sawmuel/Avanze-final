import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminPanelComponent } from '../shared/admin-panel/admin-panel.component';
import { ListarCategoriasComponent } from './administrar-categorias/listar-categorias/listar-categorias.component';
import { ListarProductosComponent } from './administrar-productos/listar-productos/listar-productos.component';
import { LoginComponent } from '../auth/login/login.component';
import { AdminPanelGuard } from '../guards/admin-panel.guard';
import { LoginGuard } from '../guards/login.guard';

import { PrincipallogedComponent } from '../shared/principalloged/principalloged.component';
import { OrgregistradaslogedComponent } from '../shared/orgregistradasloged/orgregistradasloged.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { ExpedientesComponent } from './expedientes/expedientes.component';
import { EspedientesgpvComponent } from './espedientesgpv/espedientesgpv.component';
import { RequisitosgpvComponent } from './requisitosgpv/requisitosgpv.component';
import { OrganizacionesComponent } from './organizaciones/organizaciones.component';

const routes: Routes = [
    { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
    {
        path: 'admin-panel',
        canActivate: [AdminPanelGuard],
        component: AdminPanelComponent,
        
        children: [
            { path: 'administrar-categorias', component: ListarCategoriasComponent,  },
            { path: 'administrar-productos', component: ListarProductosComponent, },
            { path: 'cuentas', component: CuentasComponent },
            { path: 'solicitudes', component: SolicitudesComponent },
            { path: 'expedientes', component: ExpedientesComponent },
            { path: 'expedientesgpv', component: EspedientesgpvComponent},
            { path: 'requisitosgpv', component: RequisitosgpvComponent},
            { path: 'organizaciones', component: OrganizacionesComponent},            
        ],
    },
    /*{path: 'navbar-dos', canActivate: [navbardosGuard], component: NavbarlogedComponent}*/
    {path: 'principalloged', component: PrincipallogedComponent},
  {path: 'registroorgloged',  component: OrgregistradaslogedComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
