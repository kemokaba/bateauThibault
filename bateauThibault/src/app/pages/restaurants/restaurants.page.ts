import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalRestaurentPage } from '../modal-restaurent/modal-restaurent.page';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  modelData: any[]=[
    {
      name :"Bistrot des Gascons",
      photo:"/assets/imgs/desGascons.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
      name:"Les fous de l'île", 
      photo:"/assets/imgs/fousDeLIle.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
      name:"Bistrot landais", 
      photo:"/assets/imgs/bistrotLandais.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
      name: "Villa 9-Trois",  
      photo:"/assets/imgs/villa9Trois.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
      name: "Bistrot du Sommalier",  
      photo:"/assets/imgs/duSommelier.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
     
  ]

  constructor( private router : Router, private modalCtrl: ModalController) { }
  button_home(){
    this.router.navigate(['/home'])
  }
  async showModal(modelData){
    const modal = await this.modalCtrl.create({
      component: ModalRestaurentPage,
      componentProps: {modelData}
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
