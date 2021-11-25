import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRecettePageRoutingModule } from './modal-recette-routing.module';

import { ModalRecettePage } from './modal-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRecettePageRoutingModule
  ],
  declarations: [ModalRecettePage]
})
export class ModalRecettePageModule {}
