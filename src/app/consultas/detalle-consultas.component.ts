import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from './consulta.service';
import { Consulta } from './models/consulta';

@Component({
  selector: 'app-detalle-consultas',
  templateUrl: './detalle-consultas.component.html',
  styleUrls: ['./detalle-consultas.component.css']
})
export class DetalleConsultasComponent implements OnInit {

  consulta: Consulta;
  titulo: string = 'Consulta';

  constructor(private consultaService: ConsultaService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // para obtener el id de los parametros que recibimos por la url
    this.activatedRoute.paramMap.subscribe(params => {
      let id = +params.get('id');
      this.consultaService.getConsulta(id).subscribe(consulta => this.consulta = consulta);
    });
  }

}
