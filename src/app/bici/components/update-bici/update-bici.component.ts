import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bici } from 'src/app/core/models/bici.model';
import { BiciService } from 'src/app/core/services/bici/bici.service';

@Component({
  selector: 'app-update-bici',
  templateUrl: './update-bici.component.html',
  styleUrls: ['./update-bici.component.css']
})
export class UpdateBiciComponent implements OnInit {
  bici: Bici;
  biciID: String;
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
    this.biciID = ''
  }

  ngOnInit(): void {
    this.getBiciID()
  }
  getBiciID() {
    this.route.params.subscribe((params: Params) => {
      this.biciID = params.id;
      console.log("update", params)
      this.getBici();

    });
  }
  getBici() {
    this.biciService.readById(this.biciID).subscribe((bici) => {
      this.bici = bici.body[0];
      console.log("update2", bici)
    })
  }
  updateBici() {
    this.biciService.update(this.bici).subscribe(() => {
      alert(`Bicicleta ${this.bici.biciID} actualizada con éxito`)
    })
  }
}
