import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorI } from '../models/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  url = 'http://localhost:4000';
  base_path2 = `${this.url}/autor/`

  constructor(private http: HttpClient) { }
  getAllAutor(): Observable<{autores:AutorI[]}>{   
    return this.http.get<{autores:AutorI[]}>(this.base_path2)
  }
  // getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
  //   return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  // }
  createAutor(data: any):Observable<AutorI>{
    return this.http.post<AutorI>(this.base_path2, data)
  }
  // updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
  //   return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  // }
  // deleteCliente(id: number): Observable<ClienteI> {
  //   return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  // }
}
