import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalRestaurentPageRoutingModule } from './modal-restaurent-routing.module';

import { ModalRestaurentPage } from './modal-restaurent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalRestaurentPageRoutingModule
  ],
  declarations: [ModalRestaurentPage]
})
export class ModalRestaurentPageModule {}
