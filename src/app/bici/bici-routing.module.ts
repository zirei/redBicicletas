import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBicisComponent } from './components/list-bicis/list-bicis.component';
import { DetailsBiciComponent } from './components/details-bici/details-bici.component';
import { UpdateBiciComponent } from './components/update-bici/update-bici.component';
import { NewBiciComponent } from './components/new-bici/new-bici.component';

const routes: Routes = [
  {
    path: '',
    component: ListBicisComponent
  },
  {
    path: 'new',
    component: NewBiciComponent
  },
  {
    path: ':id/update',
    component: UpdateBiciComponent
  },
  {
    path: ':id/details',
    component: DetailsBiciComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BiciRoutingModule { }