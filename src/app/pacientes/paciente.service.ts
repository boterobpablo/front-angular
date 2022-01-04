import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Paciente } from './paciente';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private urlEndpoint: string = 'http://localhost:8080/api/pacientes';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient,
              private router: Router) { }


  // metodo para obtener la lista de pacientes
  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.urlEndpoint);
  }

  // METODO PARA LEER EL PACIENTE POR ID CON MANEJO DE ERRORES
  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.urlEndpoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate(['/pacientes']);
        console.error(e.error.mensaje);
        swal.fire('Error al buscar el paciente', e.error.mensaje, 'error');
        return throwError(e);
      })
    );
  }

  // METODO PARA CREAR EL PACIENTE CON MANEJO DE ERRORES
  createPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post(this.urlEndpoint, paciente, {headers: this.httpHeaders}).pipe(
      map( (response: any) => response.paciente as Paciente),
      catchError( e => {

        if(e.status == 400){
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  // METODO PARA ACTUALIZAR CON MANEJO DE ERRORES
  updatePaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.put(`${this.urlEndpoint}/${paciente.id}`, paciente, {headers: this.httpHeaders}).pipe(
      map( (response: any) => response.paciente as Paciente),
      catchError( e => {

        if(e.status == 400){
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

  // METODO PARA ELIMINAR CON MANEJO DE ERRORES
  deletePaciente(id: number): Observable<Paciente> {
    return this.http.delete<Paciente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError( e => {
        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

}

