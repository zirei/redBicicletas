import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../../core/services/marker/marker.service';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  @Input() myLocation: any[] = [];
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [6.232503732999733, -75.60400297398104],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    console.log("i{m here addmarkers")
    this.addMarkers()
  }

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit(): void {
    this.initMap();
  }
  
  addMarker(lat: any, long: any) {
    this.markerService.makeMarkers(this.map, lat, long);
  }

  addMarkers() {
    console.log("addmarkers 13123", this.myLocation)
    this.myLocation.map((point) => {
      this.addMarker(point.lat, point.long)
    })
  }
}