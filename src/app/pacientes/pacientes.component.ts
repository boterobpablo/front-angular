import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetalleService } from './detalle-paciente/detalle.service';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';
import swal from 'sweetalert2'

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [];
  pacienteSeleccionado: Paciente;

  constructor( private pacienteService: PacienteService,
              private activatedRoute: ActivatedRoute,
              private detalleService: DetalleService) { }

  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      pacientes => this.pacientes = pacientes
    );
  }

  // metodo eliminar
  delete(paciente: Paciente): void {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-primary me-2'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: '¿Está seguro?',
      text: `¿Seguro que desea eliminar al paciente ${paciente.nombre} ${paciente.apellido}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.pacienteService.deletePaciente(paciente.id)
          .subscribe(response => {
            this.pacientes = this.pacientes.filter(pac => pac !== paciente);
            swalWithBootstrapButtons.fire(
              'Paciente Eliminado!',
              `Paciente ${paciente.nombre} eliminado con éxito.`,
              'success'
            )
          })
      }
    })
  }

  // metodo para abrir el modal
  abrirModal(paciente: Paciente) {
    this.pacienteSeleccionado = paciente;
    this.detalleService.abrirModal();
  }

}
