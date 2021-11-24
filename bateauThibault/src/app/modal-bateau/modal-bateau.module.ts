import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalBateauPageRoutingModule } from './modal-bateau-routing.module';

import { ModalBateauPage } from './modal-bateau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalBateauPageRoutingModule
  ],
  declarations: [ModalBateauPage]
})
export class ModalBateauPageModule {}
