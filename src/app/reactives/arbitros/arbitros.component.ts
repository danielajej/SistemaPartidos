import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-arbitros',
  templateUrl: './arbitros.component.html',
  styleUrls: ['./arbitros.component.css']
})
export class ArbitrosComponent implements OnInit {

   
  Lista: any = [];
  constructor( private conexion: ConexionService) { 
    this.ObtenerLista();
  }

  ngOnInit(): void {
  }

  ObtenerLista() {
    this.conexion.Get('futbolistas', 'GetArbitros').subscribe((dato: any) => {
      console.log(dato);
      this.Lista = dato;
    });
  }

  Eliminar(id : any) {
    this.conexion.Post('futbolistas', 'DeleteA', { id: id }).subscribe((dato: any) => {
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
