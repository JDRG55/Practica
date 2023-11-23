import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestarI} from '../models/prestar';


@Injectable({
  providedIn: 'root'
})
export class PrestarService {
  url = 'http://localhost:4000';
  base_path2 = `${this.url}/prestar/`

  constructor(private http: HttpClient) { }
  getAllPrestar(): Observable<{prestares:PrestarI[]}>{
    return this.http.get<{prestares:PrestarI[]}>(this.base_path2)
    
  }
  // getOneCliente(id: number):Observable<{cliente:ClienteI[]}>{
  //   return this.http.get<{cliente:ClienteI[]}>(`${this.base_path2}${id}`)
  // }
  createPrestar(data: any):Observable<PrestarI>{
    return this.http.post<PrestarI>(this.base_path2, data)
  }
  // updateCliente(id: number, data: ClienteI): Observable<ClienteI> {
  //   return this.http.put<ClienteI>(`${this.base_path2}${id}`, data);
  // }
  // deleteCliente(id: number): Observable<ClienteI> {
  //   return this.http.delete<ClienteI>(`${this.base_path2}${id}`);

  // }
}
