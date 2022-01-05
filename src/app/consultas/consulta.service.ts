import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Consulta } from './models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  private urlEndPoint: string = 'http://localhost:8080/api/consultas';

  constructor(private http: HttpClient,
              private router: Router) { }

  // OBTENER CONSULTA
  getConsulta(id: number): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.urlEndPoint}/${id}`);
  }

  // CREAR CONSULTA
  createConsulta(consulta: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.urlEndPoint, consulta);
  }

  // ELIMINAR CONSULTA
  deleteConsulta(id: number): Observable<void> {
    return this.http.get<void>(`${this.urlEndPoint}/${id}`);
  }

}
