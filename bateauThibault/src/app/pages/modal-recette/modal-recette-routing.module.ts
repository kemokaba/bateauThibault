import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalRecettePage } from './modal-recette.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRecettePageRoutingModule {}
