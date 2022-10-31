import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { RegistrosJugadores } from '../interfaces/equipos';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-j',
  templateUrl: './agregar-j.component.html',
  styleUrls: ['./agregar-j.component.css']
})
export class AgregarJComponent implements OnInit {

  nuevo: RegistrosJugadores = {
    nombre: '',
    apellidos: '',
    fecha: ''
  };
  Formulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    apellidos: [, [Validators.required, Validators.minLength(3)]],
    fecha: [, [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private conexion: ConexionService,
    private router: Router,
    private activedRouter: ActivatedRoute
  ) { 
    const id = this.activedRouter.snapshot.params['id'];
    this.ObtenerRegistro(id);
  }

  ngOnInit(): void {
  }
  campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
  }



  /* guardar() {
    this.conexion.Post('personajes', 'Insert', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.Formulario.reset();
        this.ObtenerRegistro(dato['id']);
      }
    });
  } */

  guardar2() {
    this.conexion.Post('futbolistas', 'InsertJ', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.router.navigate(['./reactive/jugadores']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se agrego el personaje correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
  };
  ObtenerRegistro(id: number) {
    this.conexion.Post('futbolistas', 'GetIdJ', { 'id': id }).subscribe((dato: any) => {
      console.log(dato);
    });
  }

  logout(){
    localStorage.clear();
  }


}
