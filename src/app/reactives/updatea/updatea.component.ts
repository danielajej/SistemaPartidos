import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConexionService } from 'src/app/services/conexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatea',
  templateUrl: './updatea.component.html',
  styleUrls: ['./updatea.component.css']
})
export class UpdateaComponent implements OnInit {

  Formulario: FormGroup = this.fb.group({
    id: [],
    nombre: [, [Validators.required, Validators.minLength(3)]],
    apellidos: [, [Validators.required, Validators.minLength(3)]],
    contacto: [, [Validators.required, Validators.minLength(10)]],
    email: [, [Validators.required, Validators.minLength(3)]],
    fechaN: [, [Validators.required]],
    colocacion: [, [Validators.required, Validators.minLength(3)]]
  });
  

  constructor(private fb: FormBuilder,
    private conexion: ConexionService,
    private router: Router,
    private activedRouter: ActivatedRoute) {
      const id = this.activedRouter.snapshot.params['id'];
      this.ObtenerRegistro(id);
     }

  ngOnInit(): void {
  }
  ObtenerRegistro(id: any) {
    this.conexion.Post('futbolistas', 'GetIdA', { 'id': id }).subscribe((dato: any) => {
      this.Formulario.patchValue({
        id: dato.id,
        nombre: dato.nombre,
        apellidos: dato.apellidos,
        contacto: dato.contacto,
        email: dato.email,
        fechaN: dato.fechaN,
        colocacion: dato.colocacion
      });
    });
  }

    campoEsValido(campo: string) {
    return this.Formulario.controls[campo].errors && this.Formulario.controls[campo].touched;
    }

    guardar() {
    this.conexion.Post('futbolistas', 'UpdateA', this.Formulario.value).subscribe((dato: any) => {
      console.log(dato);
      if (dato['estatus']) {
        this.router.navigate(['reactive/arbitros']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se acualizo el equipo correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }
    });
    };

    eliminar(id:any) {  
    Swal.fire({
      title: '¿Quieres eliminar este equipo?',
      text: "Una vez eliminado no hay vuelta atras",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {this.conexion.Post('futbolistas', 'DeleteA', { id: id }).subscribe((dato: any) => {
        console.log(dato);
        if (dato['estatus']) {
          this.router.navigate(['reactive/arbitros']);
        Swal.fire(
          '!Eliminado¡',
          'El equipo ha sido Eliminado',
          'success'
        )
        };
        });
      };
    });
  }
  logout(){
    localStorage.clear();
  }

}
