import { Component, OnInit } from '@angular/core';
import { Bici } from 'src/app/core/models/bici.model';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { BiciService } from 'src/app/core/services/bici/bici.service';

@Component({
  selector: 'app-list-bicis',
  templateUrl: './list-bicis.component.html',
  styleUrls: ['./list-bicis.component.css']
})
export class ListBicisComponent implements OnInit {

  listBicis: any[];
  user: any;
  currentData: any;
  isLogin: boolean = false;
  responseSelected: boolean = true;
  responseUnSelected: boolean = true;
  currentUserID: any = {
    userId: ""
  };

  constructor(
    private biciService: BiciService,
    private authService: AuthenticationService,
  ) {
    this.listBicis = []
    this.getUserStatus();
  }

  ngOnInit(): void {
    this.getBicis()
  }
  getUserStatus() {
    this.authService.getUserStatus().subscribe((user) => {
      if (user) {
        this.user = Object(user.multiFactor).user;
        console.log("list ->", user);
        this.currentUserID.userId = user.email
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  }

  getBicis() {
    this.biciService.read().subscribe((data) => {
      this.listBicis = data.body
      console.log(this.listBicis)
    })
  }

  seleccionarBici(biciID: any) {
    this.listBicis.map((bici) => {
      if (bici._id === biciID) {
        console.log("DONE")
        let biciData = bici;
        this.currentData = Object.assign(biciData, this.currentUserID);
        this.biciService.update(this.currentData).subscribe(() => {
          alert(`Bicicleta ${this.currentData.biciID} reservada con éxito al user: ${this.currentData.userId}`)
        })
        this.responseSelected = false;
      }
    })
    if (this.responseSelected) {
      alert(`Bicicleta ${biciID} no se pudo reservar ya que pertenecer a un usuario diferente actualmente`)
    }
  }
  unSeleccionarBici(biciID: any) {
    this.listBicis.map((bici) => {
      if (bici._id === biciID && bici.userId === this.currentUserID.userId) {
        console.log("remove")
        let biciData = bici;
        biciData.userId = ""
        console.log("remove ->", biciData)
        this.biciService.update(biciData).subscribe(() => {
          alert(`Bicicleta ${bici.biciID} ha sido entregada con exito gracias: ${this.currentUserID.userId}`)
        })
        this.responseUnSelected = false;
      }
    })
    if (this.responseUnSelected) {
      alert(`Bicicleta ${biciID} no se pudo entregar ya que pertenecer a un usuario diferente actualmente`)
    }
  }

  deleteBici(biciID: any) {
    this.biciService.delete(biciID).subscribe((response) => {
      this.ngOnInit()
      alert('Bicicleta eliminada correctamente')
    })
  }

}
