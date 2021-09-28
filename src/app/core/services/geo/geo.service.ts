import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Geo } from '../../models/geo.model';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  constructor(private http: HttpClient) { }

  create(bici: Geo) {
    return this.http.post<any>(`${environment.geoApi}/rbgeoback`, bici);
  }

  read() {
    return this.http.get<any>(`${environment.geoApi}/rbgeoback`);
  }

  readById(biciID: String) {
    return this.http.get<any>(`${environment.geoApi}/rbgeoback/${biciID}`);
  }

  update(bici: Geo) {
    return this.http.put<any>(`${environment.geoApi}/rbgeoback/${bici._id}`, bici)
  }

  delete(id: String) {
    return this.http.delete<any>(`${environment.geoApi}/rbgeoback/${id}`);
  }
}
