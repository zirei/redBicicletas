import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalizacionService {

  constructor(private http: HttpClient) { }
  
  read() {
    return this.http.get<any>(`${environment.biciApi}/bicicleta`);
  }
}