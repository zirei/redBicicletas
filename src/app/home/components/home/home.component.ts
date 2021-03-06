import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { LocalizacionService } from 'src/app/core/services/localizacion/localizacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin: boolean = false
  bicis: any[] = []
  user: any;
  currentUser: any;
  
  constructor(
    private localizationService: LocalizacionService,
    private authService: AuthenticationService,
  ) {
    this.getUserStatus();
   }

  ngOnInit(): void {
    this.getBicis();
  }
  getUserStatus() {
    this.authService.getUserStatus().subscribe((user) => {
      if (user) {
        this.user = Object(user.multiFactor).user;
        this.currentUser = user.displayName;
        console.log(user);
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  }

  getBicis() {
    this.localizationService.read().subscribe((data) => {
      this.bicis = data.body
      console.log("bicis ->", this.bicis)      
    })
    if(this.bicis.length >0){
    }else{
      this.localizationService.readGeo().subscribe((data) => {
        this.bicis = data.body
        console.log("bicis ->", this.bicis)      
      })
    }
  }

  logIn() {
    this.authService.login();
    alert(`Bienvenido: ${this.currentUser}`)
  }

  logOut() {
    alert(`Hasta Pronto: ${this.currentUser}`)
    this.authService.logout();
    this.user = ''
  }
  // makeMarkers(map: any, lat: any, lon: any): void {


}
