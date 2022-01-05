import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consultas/consulta.service';
import { Medico } from './medico';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: Medico[];

  constructor(private consultaService: ConsultaService) { }

  ngOnInit(): void {

    this.consultaService.getMedicos().subscribe(
      medicos => this.medicos = medicos);
    
  }

}
