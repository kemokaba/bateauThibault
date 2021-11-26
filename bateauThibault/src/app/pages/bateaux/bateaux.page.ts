import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalBateauPage, } from '../modal-bateau/modal-bateau.page';
import { BateauxPageModule } from './bateaux.module';


@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  modelData: any[]=[
  {
    name :"saphir",
    photo:"/assets/imgs/saphir.png", 
    infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s" 
  },
  {
    name:"De la brise", 
    photo:"/assets/imgs/deLaBrise.png", 
    infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
  },
  {
    name:"Gast Micher", 
    photo:"/assets/imgs/gastMicher.png", 
    infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
  },
  {
    name: "Aquillons",  
    photo:"/assets/imgs/aquilon.png", 
    infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
  },
 
]
  
  
constructor( private router : Router, private modalCtrl: ModalController) { }
button_home(){
  this.router.navigate(['/home'])
}
async showModal(modelData){
  const modal = await this.modalCtrl.create({
    component: ModalBateauPage,
    componentProps: {modelData}
  });
  return await modal.present();
}
 
   
  
   

  ngOnInit() {}
  
    
}
