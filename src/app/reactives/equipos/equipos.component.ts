import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  
  Lista: any = [];

  constructor( private conexion: ConexionService) { 
    this.ObtenerLista();
  }

  ngOnInit(): void {
  }

  ObtenerLista() {
    this.conexion.Get('futbolistas', 'GetEquipos').subscribe((dato: any) => {
      console.log(dato);
      this.Lista = dato.reverse();
    });
  }

  Eliminar(id : any) {
    this.conexion.Post('futbolistas', 'DeleteE', { id: id }).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.ObtenerLista();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se elimino el registro correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  }

  logout(){
    localStorage.clear();
  }

}
