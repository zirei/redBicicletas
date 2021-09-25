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
        console.log(user);
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  }

  getBicis() {
    this.localizationService.read().subscribe((data: any) => {
      this.bicis = data.body
      console.log(this.bicis)
    })
  }

  logIn() {
    this.authService.login();
  }

  logOut() {
    this.authService.logout();
    this.user = ''
  }

}
