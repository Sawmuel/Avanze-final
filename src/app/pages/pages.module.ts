import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministrarCategoriasModule } from './administrar-categorias/administrar-categorias.module';
import { AdministrarProductosModule } from './administrar-productos/administrar-productos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdministrarCategoriasModule,
    AdministrarProductosModule
  ]
})
export class PagesModule { }
