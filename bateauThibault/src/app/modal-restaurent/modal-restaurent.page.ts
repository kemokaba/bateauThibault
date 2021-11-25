import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-restaurent',
  templateUrl: './modal-restaurent.page.html',
  styleUrls: ['./modal-restaurent.page.scss'],
})
export class ModalRestaurentPage implements OnInit {

  constructor( private modalController: ModalController ){}

  dismiss(){
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
