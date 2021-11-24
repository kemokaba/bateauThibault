import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalBateauPage } from './modal-bateau.page';

const routes: Routes = [
  {
    path: '',
    component: ModalBateauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalBateauPageRoutingModule {}
