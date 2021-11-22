import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitPromotionsPageRoutingModule } from './produit-promotions-routing.module';

import { ProduitPromotionsPage } from './produit-promotions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitPromotionsPageRoutingModule
  ],
  declarations: [ProduitPromotionsPage]
})
export class ProduitPromotionsPageModule {}
