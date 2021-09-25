import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ListBicisComponent } from './components/list-bicis/list-bicis.component';
import { DetailsBiciComponent } from './components/details-bici/details-bici.component';
import { UpdateBiciComponent } from './components/update-bici/update-bici.component';
import { NewBiciComponent } from './components/new-bici/new-bici.component';
import { BiciRoutingModule } from './bici-routing.module';



@NgModule({
  declarations: [
    NewBiciComponent,
    UpdateBiciComponent,
    DetailsBiciComponent,
    ListBicisComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BiciRoutingModule
  ]
})
export class BiciModule { }
