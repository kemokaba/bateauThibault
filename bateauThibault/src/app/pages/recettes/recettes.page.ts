import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalRecettePage } from '../modal-recette/modal-recette.page';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})

export class RecettesPage implements OnInit {

  modelData: any[]=[
    { name :"Homard",
      photo:"/assets/imgs/homardRecette.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles;C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
   },

    {
      name:"St Jacques", 
      photo:"/assets/imgs/saintJacques.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
       name:"Bar",
       photo:"/assets/imgs/barRecette.png", 
       infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
       name: "Tourteu", 
       photo:"/assets/imgs/tourteau.png",
       infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
      },

  ]

  constructor( private router : Router, private modalCtrl: ModalController) { }
    button_home(){
      this.router.navigate(['/home'])
    }

    async showModal(modelData){
      const modal = await this.modalCtrl.create({
        component: ModalRecettePage,
        componentProps: {modelData}
      });
      return await modal.present();
    }
  

  ngOnInit() {
  }

}
