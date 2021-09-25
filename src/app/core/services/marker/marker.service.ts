import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/usa-capitals.geojson';

  constructor(private http: HttpClient) {
  }

  makeMarkers(map: any, lat: number, lon: number): void {
    const marker = L.marker([lat, lon]);
    marker.addTo(map);
  }
}