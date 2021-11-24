import { Component, Input, OnInit } from '@angular/core';
import { ModalController,  } from '@ionic/angular';
import { BateauxPage } from '../bateaux/bateaux.page';

@Component({
  selector: 'app-modal-bateau',
  templateUrl: './modal-bateau.page.html',
  styleUrls: ['./modal-bateau.page.scss'],
})
export class ModalBateauPage implements OnInit {
 
  

  constructor(
    private modalController: ModalController,
  ) { }
   dismiss(){
     this.modalController.dismiss();
   }

  ngOnInit() { }

   
}
