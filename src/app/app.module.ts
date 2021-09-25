import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiciModule } from './bici/bici.module';
import { MarkerService } from './core/services/marker/marker.service';
import { HomeModule } from './home/home.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BiciModule,
    HttpClientModule
  ],
  providers: [
    MarkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
