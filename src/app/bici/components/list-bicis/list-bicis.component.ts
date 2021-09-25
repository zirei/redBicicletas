import { Component, OnInit } from '@angular/core';
import { Bici } from 'src/app/core/models/bici.model';
import { BiciService } from 'src/app/core/services/bici/bici.service';

@Component({
  selector: 'app-list-bicis',
  templateUrl: './list-bicis.component.html',
  styleUrls: ['./list-bicis.component.css']
})
export class ListBicisComponent implements OnInit {

  listBicis: any[];
  
  constructor(private biciService: BiciService) {
    this.listBicis = []
  }

  ngOnInit(): void {
    this.getBicis()
  }

  getBicis() {
    this.biciService.read().subscribe((data) => {
      this.listBicis = data.body
      console.log(this.listBicis)
    })
  }

  deleteBici(biciID: any) {
    this.biciService.delete(biciID).subscribe((response) => {
      this.ngOnInit()
      alert('Bicicleta eliminada correctamente')
    })
  }

}
