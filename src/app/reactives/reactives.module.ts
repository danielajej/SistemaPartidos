import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactivesRoutingModule } from './reactives-routing.module';
import { LogeadoComponent } from './logeado/logeado.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TorneosComponent } from './torneos/torneos.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ArbitrosComponent } from './arbitros/arbitros.component';
import { FechasComponent } from './fechas/fechas.component';
import { AgregarEComponent } from './agregar-e/agregar-e.component';
import { UpdateEComponent } from './update-e/update-e.component';
import { AgregarAComponent } from './agregar-a/agregar-a.component';
import { AgregarJComponent } from './agregar-j/agregar-j.component';
import { AgregarTComponent } from './agregar-t/agregar-t.component';
import { UpdateaComponent } from './updatea/updatea.component';
import { UpdatejComponent } from './updatej/updatej.component';
import { UpdatetComponent } from './updatet/updatet.component';


@NgModule({
  declarations: [
    ListaComponent,
    AgregarComponent,
    UpdateComponent,
    LogeadoComponent,
    JugadoresComponent,
    TorneosComponent,
    EquiposComponent,
    ArbitrosComponent,
    FechasComponent,
    AgregarEComponent,
    UpdateEComponent,
    AgregarAComponent,
    AgregarJComponent,
    AgregarTComponent,
    UpdateaComponent,
    UpdatejComponent,
    UpdatetComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactivesRoutingModule
  ]
})
export class ReactivesModule { }
