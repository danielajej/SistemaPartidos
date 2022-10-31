import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { UpdateComponent } from './update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './agregar/agregar.component';
import { LogeadoComponent } from './logeado/logeado.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { TorneosComponent } from './torneos/torneos.component';
import { EquiposComponent } from './equipos/equipos.component';
import { ArbitrosComponent } from './arbitros/arbitros.component';
import { FechasComponent } from './fechas/fechas.component';
import { AgregarEComponent } from './agregar-e/agregar-e.component';
import { UpdateEComponent } from './update-e/update-e.component';
import { AgregarJComponent } from './agregar-j/agregar-j.component';
import { AgregarAComponent } from './agregar-a/agregar-a.component';
import { AgregarTComponent } from './agregar-t/agregar-t.component';
import { UpdateaComponent } from './updatea/updatea.component';
import { UpdatejComponent } from './updatej/updatej.component';
import { UpdatetComponent } from './updatet/updatet.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'logeado', component: LogeadoComponent, canActivate: [AuthGuard] },
      { path: 'jugadores', component: JugadoresComponent, canActivate: [AuthGuard] },
      { path: 'torneos', component: TorneosComponent, canActivate: [AuthGuard] },
      { path: 'equipos', component: EquiposComponent, canActivate: [AuthGuard] },
      { path: 'arbitros', component: ArbitrosComponent, canActivate: [AuthGuard] },
      { path: 'fechas', component: FechasComponent, canActivate: [AuthGuard] },
      //{ path: 'lista', component: ListaComponent },
      //{ path: 'agregar', component: AgregarComponent,canActivate: [AuthGuard] },
      { path: 'agregarE', component: AgregarEComponent,canActivate: [AuthGuard] },
      { path: 'agregarJ', component: AgregarJComponent,canActivate: [AuthGuard] },
      { path: 'agregarT', component: AgregarTComponent,canActivate: [AuthGuard] },
      { path: 'agregarA', component: AgregarAComponent,canActivate: [AuthGuard] },
      { path: 'updateE/:id', component: UpdateEComponent, canActivate:[AuthGuard] },
      { path: 'updatea/:id', component: UpdateaComponent, canActivate:[AuthGuard] },
      { path: 'updatej/:id', component: UpdatejComponent, canActivate:[AuthGuard] },
      { path: 'updatet/:id', component: UpdatetComponent, canActivate:[AuthGuard] },
      { path: 'update/:id', component: UpdateComponent,canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'logeado' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactivesRoutingModule { }
