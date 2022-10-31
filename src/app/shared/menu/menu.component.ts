import { Component, OnInit } from '@angular/core';
interface MenuItem {
  texto: string;
  ruta: string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  reactiveMenu: MenuItem[] = [
    //{ texto: 'Agregar', ruta: './reactives/agregar' },
    { texto: 'Lista', ruta: './reactives/lista' },
    //{ texto: 'Iniciar Sesión', ruta: './reactives/login'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
  }

}
