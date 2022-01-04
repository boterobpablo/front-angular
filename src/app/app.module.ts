import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HeaderComponent } from './header/header.component';
import { DetallePacienteComponent } from './pacientes/detalle-paciente/detalle-paciente.component';
import { FormComponent } from './pacientes/form.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { DetalleConsultasComponent } from './consultas/detalle-consultas.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    HeaderComponent,
    DetallePacienteComponent,
    FormComponent,
    ConsultasComponent,
    DetalleConsultasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
