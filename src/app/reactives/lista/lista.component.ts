import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  Lista: any = [] ;
  constructor(private conexion: ConexionService) {
    this.ObtenerLista();
  }

  ObtenerLista() {
    this.conexion.Get('menu', 'GetAll').subscribe((dato: any) => {
      console.log(dato);
      this.Lista = dato;
    });
  }

  Eliminar(id : any) {
    this.conexion.Post('menu', 'Delete', { id: id }).subscribe((dato: any) => {
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

  ngOnInit(): void {
  }

}
