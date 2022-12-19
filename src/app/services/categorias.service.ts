import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../models/Categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  getCategorias(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.get("http://localhost:8090/api/categoria/get-all", { headers: headers });
  }

  createCategoria(categoria: Categoria){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.post(`http://localhost:8090/api/categoria/create-categoria`, categoria, { headers: headers })
  }

  updateCategoria(categoria: Categoria){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.put(`http://localhost:8090/api/categoria/update-categoria/${ categoria.id_categoria }`, categoria, { headers: headers })
  }

  deleteCategoria(id_categoria: number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
    return this.http.delete(`http://localhost:8090/api/categoria/delete-categoria/${ id_categoria }`, { headers: headers })
  }

}
