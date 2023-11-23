import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EjemplaresI } from '../models/ejemplares';

@Injectable({
  providedIn: 'root'
})
export class EjemplaresService {
  url = 'http://localhost:4000';
  base_path2 = `${this.url}/ejemplares/`

  constructor(private http: HttpClient) { }
  getAllEjemplares(): Observable<{ejemplares:EjemplaresI[]}>{
    return this.http.get<{ejemplares:EjemplaresI[]}>(this.base_path2)
    
  }
  // getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
  //   return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  // }
  createEjemplares(data: any):Observable<EjemplaresI>{
    return this.http.post<EjemplaresI>(this.base_path2, data)
  }
  // updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
  //   return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  // }
  // deleteCliente(id: number): Observable<ClienteI> {
  //   return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  // }
}
