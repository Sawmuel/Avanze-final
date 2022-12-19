import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarCategoriasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdministrarCategoriasModule { }
