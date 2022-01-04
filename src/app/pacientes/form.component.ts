import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from './paciente.service';
import swal from 'sweetalert2';

import { Paciente } from './paciente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  paciente: Paciente = new Paciente();
  titulo: string = "Nuevo Paciente";
  errores: string[];

  constructor(private pacienteService: PacienteService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe( params => {
      let id = +params.get('id');
      if(id){
        this.pacienteService.getPaciente(id).subscribe((paciente) => this.paciente = paciente);
      }
    });
  }

  // metodo para cargar el paciente
  cargarPaciente(): void {
    this.activatedRoute.params.subscribe( params => {
      let id = params['id'];
      if(id){
        this.pacienteService.getPaciente(id)
          .subscribe( (paciente) => this.paciente = paciente );
      }
    })
  }

  // metodo para crear paciente
  createPaciente(): void {
    this.pacienteService.createPaciente(this.paciente)
      .subscribe( paciente => { 
        this.router.navigate(['/pacientes']);
        swal.fire('Nuevo Paciente', `El paciente ${paciente.nombre} ha sido creado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo del error desde el backend: ' + err.status);
        console.error('err.error.errors');
      }
    )
  }

  // metodo para actualizar
  updatePaciente(): void {
    this.pacienteService.updatePaciente(this.paciente)
      .subscribe( paciente => { 
        this.router.navigate(['/pacientes']);
        swal.fire('Paciente Actualizado', `El paciente ${paciente.nombre} ha sido actualizado con éxito!`, 'success');
      },
      err => {
        this.errores = err.error.errors as string[];
        console.error('Codigo del error desde el backend: ' + err.status);
        console.error('err.error.errors');
      }
    )
  }



}
