import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LibroI } from '../models/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url = 'http://localhost:4000';
  base_path2 = `${this.url}/libro/`

  constructor(private http: HttpClient) { }
  getAllLibros(): Observable<{libros:LibroI[]}>{
    return this.http.get<{libros:LibroI[]}>(this.base_path2)
    
  }
  // getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
  //   return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  // }
  createLibro(data: any):Observable<LibroI>{
    return this.http.post<LibroI>(this.base_path2, data)
  }
  // updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
  //   return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  // }
  // deleteCliente(id: number): Observable<ClienteI> {
  //   return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  // }

}
