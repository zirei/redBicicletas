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
  isLogin: boolean = false;
  
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
  seleccionarBici(biciID: any){
    console.log("name ->",this.user.displayName);
  }
  unSeleccionarBici(biciID: any){
    console.log("name ->",this.user.displayName);
  }

  deleteBici(biciID: any) {
    this.biciService.delete(biciID).subscribe((response) => {
      this.ngOnInit()
      alert('Bicicleta eliminada correctamente')
    })
  }

}
