import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarCategoriasModule } from './administrar-categorias/administrar-categorias.module';
import { AdministrarProductosModule } from './administrar-productos/administrar-productos.module';
import { PrincipalComponent } from './principal/principal.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CredencialComponent } from './credencial/credencial.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    PrincipalComponent,
    CredencialComponent
  ],
  imports: [
    CommonModule,
    AdministrarCategoriasModule,
    AdministrarProductosModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class PagesModule { }
