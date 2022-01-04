import { Component, Input, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/consultas/consulta.service';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';
import { DetalleService } from './detalle.service';
import swal from 'sweetalert2';
import { Consulta } from 'src/app/consultas/models/consulta';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.css']
})
export class DetallePacienteComponent implements OnInit {

  @Input() paciente: Paciente;

  titulo: string = "Detalle del paciente";

  constructor(public pacienteService: PacienteService,
              public detalleService: DetalleService,
              public consultaService: ConsultaService) { }

  ngOnInit(): void {
  }

  cerrarModal() {
    this.detalleService.cerrarModal();
  }

  deleteConsulta(consulta: Consulta): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-primary me-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar la consulta ${consulta.motivoConsulta}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.consultaService.deleteConsulta(consulta.id)
          .subscribe(response => {
            this.paciente.consultas = this.paciente.consultas.filter(c => c !== consulta);
            swalWithBootstrapButtons.fire(
              'Consulta Eliminada!',
              `Consulta ${consulta.motivoConsulta} eliminada con éxito.`,
              'success'
            )
          })
      }
    })
  }

}
