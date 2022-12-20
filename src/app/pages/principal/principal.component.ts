import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../interfaces/Usuario.interface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario: IUsuario;
  
  constructor() { 
    let usuario_session = localStorage.getItem('usuarioLogged');
    this.usuario = JSON.parse(usuario_session!)
  }

  ngOnInit(): void {
  }

}
