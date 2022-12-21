import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarCategoriasModule } from './administrar-categorias/administrar-categorias.module';
import { AdministrarProductosModule } from './administrar-productos/administrar-productos.module';
import { PrincipalComponent } from './principal/principal.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    AdministrarCategoriasModule,
    AdministrarProductosModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class PagesModule { }
