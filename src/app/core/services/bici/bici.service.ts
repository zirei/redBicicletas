import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bici } from '../../models/bici.model'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiciService {

  constructor(private http: HttpClient) { }

  create(bici: Bici) {
    return this.http.post<any>(`${environment.biciApi}/bicicleta`, bici);
  }

  read() {
    return this.http.get<any>(`${environment.biciApi}/bicicleta`);
  }

  readById(biciID: String) {
    return this.http.get<any>(`${environment.biciApi}/bicicleta/${biciID}`);
  }

  update(bici: Bici) {
    return this.http.put<any>(`${environment.biciApi}/bicicleta/${bici._id}`, bici)
  }

  delete(id: String) {
    return this.http.delete<any>(`${environment.biciApi}/bicicleta/${id}`);
  }
}
