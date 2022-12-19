import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service';
import Swal from 'sweetalert2';
import { Categoria } from '../../../models/Categoria.model';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.css']
})
export class ListarCategoriasComponent implements OnInit {

  data_categorias: any;

  data_authority: number = 1;

  categoria: Categoria = new Categoria();

  update_categoria: Categoria = new Categoria();

  ocultar_registrar: boolean = true;

  constructor(private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(){
    this.categoriaService.getCategorias().subscribe({
      next: (resp: any) => {
        this.data_categorias = resp;
        this.data_authority = 2;
      },
      error: (err) => {
        console.log(err);
        this.data_authority = 0;
      }
    })
  }

  registrarCategoria(){
    
    if(!this.categoria.nombre_categoria.trim()){
      Swal.fire(
        'Campos Incompletos!',
        'Registre un nombre a la categoria',
        'info'
      )
      return;
    }

    this.categoriaService.createCategoria(this.categoria).subscribe({
      next: () => {
        Swal.fire(
          'Categoria registrada!',
          'Felicidades',
          'success'
        )
        this.getCategorias();
        this.categoria.nombre_categoria = '';
      },
      error: () => {
        Swal.fire(
          'No se pudo registrar la categoria!',
          'Verifique codigo',
          'error'
        )
      }
    })
    
  }

  mostrarUpdateCategoria(categoria: Categoria){
    this.ocultar_registrar = false;
    this.update_categoria = categoria;
  }

  updateCategoria(){
    
    this.categoriaService.updateCategoria(this.update_categoria).subscribe({
      next: () => {
        Swal.fire(
          'Categoria actualizada!',
          'Felicidades',
          'success'
        )
        this.getCategorias();
        this.ocultar_registrar = true;
      },
      error: () => {
        Swal.fire(
          'Error al actualizar!',
          'Error',
          'error'
        )
      }
    })
    
  }

  deleteCategoria(id_categoria: number){
    
    Swal.fire({
      title: 'Estas seguro de eliminar?',
      text: "No se revertiran los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.categoriaService.deleteCategoria(id_categoria).subscribe({
          next: () => {
            Swal.fire(
              'Eliminado!',
              'Categoria eliminada.',
              'success'
            )
            this.getCategorias();
          },
          error: () => {
            Swal.fire(
              'ERROR!',
              'No se pudo eliminar la categoria.',
              'error'
            )
          }
        })

        
      }
    })
    
  }

}
