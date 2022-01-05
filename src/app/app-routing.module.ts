import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes/pacientes.component';
import { FormComponent } from './pacientes/form.component';
import { DetalleConsultasComponent } from './consultas/detalle-consultas.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { HomeComponent } from './home/home.component';
import { MedicosComponent } from './medicos/medicos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'pacientes',
    component: PacientesComponent
  },
  {
    path: 'pacientes/form',
    component: FormComponent
  },
  {
    path: 'pacientes/form/:id',
    component: FormComponent
  },
  {
    path: 'consultas/:id',
    component: DetalleConsultasComponent
  },
  {
    path: 'consultas/form/:pacienteId',
    component: ConsultasComponent
  },
  {
    path: 'especialistas',
    component: MedicosComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
