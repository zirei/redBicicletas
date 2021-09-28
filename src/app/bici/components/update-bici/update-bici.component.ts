import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bici } from 'src/app/core/models/bici.model';
import { Geo } from 'src/app/core/models/geo.model';
import { BiciService } from 'src/app/core/services/bici/bici.service';
import { GeoService } from 'src/app/core/services/geo/geo.service';

@Component({
  selector: 'app-update-bici',
  templateUrl: './update-bici.component.html',
  styleUrls: ['./update-bici.component.css']
})
export class UpdateBiciComponent implements OnInit {
  bici: Bici;
  biciID: String;
  geo: Geo;

  colors: any[] = [
    {
      text: 'Blanco'
    },
    {
      text: 'Negro'
    },
    {
      text: 'Rojo'
    },
    {
      text: 'Verde'
    },
  ]
  models: any[] = [
    {
      text: 'Ruta'
    },
    {
      text: 'Cross'
    },
    {
      text: 'Mountain'
    },
    {
      text: 'Turismo'
    },
  ]
  constructor(
    private route: ActivatedRoute,
    private biciService: BiciService,
    private geoService: GeoService
  ) {
    this.bici = {
      biciID: '',
      color: '',
      modelo: '',
      lat: 0,
      long: 0,
    },
    this.geo = {
      biciID: '',
      lat: 0,
      long: 0,
    },
    this.biciID = ''
  }

  ngOnInit(): void {
    this.getBiciID()
  }
  getBiciID() {
    this.route.params.subscribe((params: Params) => {
      this.biciID = params.id;
      this.getBici();

    });
  }
  getBici() {
    this.biciService.readById(this.biciID).subscribe((bici) => {
      this.bici = bici.body[0];

    })
  }
  updateBici() {
    this.biciService.update(this.bici).subscribe(() => {
      alert(`Bicicleta ${this.bici.biciID} actualizada con éxito`)
    })
    this.geoService.update(this.bici).subscribe(() => {})
  }
}
