import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../pacientes/paciente.service';
import { ConsultaService } from './consulta.service';
import { Consulta } from './models/consulta';
import swal from 'sweetalert2';
import { Medico } from '../medicos/medico';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  titulo: string = 'Nueva Consulta';
  consulta: Consulta = new Consulta();
  medicos: Medico[];

  constructor(private pacienteService: PacienteService,
              private consultaService: ConsultaService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    // asignamos el cliente al objeto consulta
    this.activatedRoute.paramMap.subscribe(params => {
      let pacienteId = +params.get('pacienteId');
      this.pacienteService.getPaciente(pacienteId).subscribe(paciente => this.consulta.paciente = paciente);
    });

    this.consultaService.getMedicos().subscribe(medicos => this.medicos = medicos);
  
  }

  createConsulta(): void {
    this.consultaService.createConsulta(this.consulta)
      .subscribe(consulta => {
        swal.fire(this.titulo, `Consulta ${consulta.motivoConsulta} creada con éxito`, 'success');
        this.router.navigate(['/pacientes'])
    });
  }

  // metodo para comparar los medicos
  compararMedicos(o1: Medico, o2: Medico): boolean {

    if(o1 === undefined && o2 === undefined){
      return true;
    }

    return o1 === null || o2 === null || o1 === undefined || o2 === undefined ? false : o1.id === o2.id;
  }

}
