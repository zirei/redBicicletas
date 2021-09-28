import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient) {
  }

  makeMarkers(map: any, lat: any, lon: any): void {
    const marker = L.marker([lat, lon]);
    marker.addTo(map);
  }
}