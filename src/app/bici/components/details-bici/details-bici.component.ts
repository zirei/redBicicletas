import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Bici } from 'src/app/core/models/bici.model';
import { BiciService } from 'src/app/core/services/bici/bici.service';

@Component({
  selector: 'app-details-bici',
  templateUrl: './details-bici.component.html',
  styleUrls: ['./details-bici.component.css']
})
export class DetailsBiciComponent implements OnInit {

  bici: Bici;
  biciID: String;

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
      console.log("here", params)
      this.getBici();

    });
  }
  getBici() {
    this.biciService.readById(this.biciID).subscribe((bici) => {
      this.bici = bici.body[0];
      console.log("here2", bici)
    })
  }
}
