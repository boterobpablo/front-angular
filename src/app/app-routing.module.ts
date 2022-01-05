import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes/pacientes.component';
import { FormComponent } from './pacientes/form.component';
import { DetalleConsultasComponent } from './consultas/detalle-consultas.component';
import { ConsultasComponent } from './consultas/consultas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pacientes',
    pathMatch: 'full'
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
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
