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
      photo_2:"/assets/imgs/Bistrot des Gascons_2.png",
      photos:"/assets/imgs/desGascons_icon.png", 
      infos: "Le Bistrot des Gascons, dans un cadre contemporain et un lieu historique est un restaurant de cuisine principalement Landaise."
    },
    {
      name:"Les fous de l'île", 
      photo:"/assets/imgs/fousDeLIle.png", 
      photos:"/assets/imgs/fousDeLIle_icon.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
      name:"Bistrot landais", 
      photo:"/assets/imgs/bistrotLandais.png",
      photos:"/assets/imgs/bistrotLandais_icon.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
      name: "Villa 9-Trois",  
      photo:"/assets/imgs/villa9Trois.png", 
      photos:"/assets/imgs/villa9Trois_icon.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
      name: "Bistrot du Sommalier",  
      photo:"/assets/imgs/duSommelier.png", 
      photos:"/assets/imgs/duSommelier_icon.png", 
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
