import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from '../../interfaces/Usuario.interface';

@Component({
  selector: 'app-navbarloged',
  templateUrl: './navbarloged.component.html',
  styleUrls: ['./navbarloged.component.css']
})
export class NavbarlogedComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  usuario: IUsuario;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) { 

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);    

    let usuario_session = localStorage.getItem('usuarioLogged');
    this.usuario = JSON.parse(usuario_session!)
    
  }

  ngOnInit(): void {
    

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  cerrarSesion(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuarioLogged');
    this.router.navigate([''])
  }
}
