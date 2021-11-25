import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRestaurentPage } from './modal-restaurent.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRestaurentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRestaurentPageRoutingModule {}
