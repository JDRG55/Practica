import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EscribirI } from '../models/escribir';

@Injectable({
  providedIn: 'root'
})
export class EscribirService {
  url = 'http://localhost:4000';
  base_path2 = `${this.url}/escribir`

  constructor(private http: HttpClient) { }
  getAllEscribir(): Observable<{Escribirs:EscribirI[]}>{
    return this.http.get<{Escribirs:EscribirI[]}>(this.base_path2)
    
  }
  // getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
  //   return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  // }
  createEscribir(data: any):Observable<EscribirI>{
    return this.http.post<EscribirI>(this.base_path2, data)
  }
  // updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
  //   return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  // }
  // deleteCliente(id: number): Observable<ClienteI> {
  //   return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  // }
}
