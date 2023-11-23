import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:4000';
  base_path2 = `${this.url}/usuario/`

  constructor(private http: HttpClient) { }
  getAllUsuario(): Observable<{usuarios:UsuarioI[]}>{
    return this.http.get<{usuarios:UsuarioI[]}>(this.base_path2)
    
  }
  // getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
  //   return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  // }
  createUsuario(data: any):Observable<UsuarioI>{
    return this.http.post<UsuarioI>(this.base_path2, data)
  }
  // updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
  //   return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  // }
  // deleteCliente(id: number): Observable<ClienteI> {
  //   return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  // }
}