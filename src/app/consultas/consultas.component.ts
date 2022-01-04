import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../pacientes/paciente.service';
import { ConsultaService } from './consulta.service';
import { Consulta } from './models/consulta';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  titulo: string = 'Nueva Consulta';
  consulta: Consulta = new Consulta();

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

  }

}
