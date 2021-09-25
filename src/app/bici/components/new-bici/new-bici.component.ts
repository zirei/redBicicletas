import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bici } from 'src/app/core/models/bici.model';
import { BiciService } from 'src/app/core/services/bici/bici.service';

@Component({
  selector: 'app-new-bici',
  templateUrl: './new-bici.component.html',
  styleUrls: ['./new-bici.component.css']
})
export class NewBiciComponent implements OnInit {

  bici: Bici;
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
    private biciService: BiciService
  ) {
    this.bici = {
      biciID: '',
      color: '',
      modelo: '',
      lat: 0,
      long: 0,
    }
  }

  ngOnInit(): void {
  }
  createBici() {
    this.biciService.create(this.bici).subscribe((response) => {
      alert(`La bicicleta: ${response.body.biciID} con el id: ${response.body._id} fue creada con éxito`)
    })
  }

}
