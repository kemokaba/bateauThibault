import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-recette',
  templateUrl: './modal-recette.page.html',
  styleUrls: ['./modal-recette.page.scss'],
})
export class ModalRecettePage implements OnInit {

  constructor(private modalController: ModalController) { }
  dismiss(){
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
