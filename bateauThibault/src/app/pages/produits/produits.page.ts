import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import { Produit } from 'src/app/models/produit';
import { Storage } from '@ionic/storage';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/panier.service';

/*
import * as fs from 'fs';
if (fs.existsSync('/assets/data/produits.json'))
{
  let userBugsJson = JSON.parse(fs.readFileSync("/assets/data/produits.json", "utf-8"));
  const data = userBugsJson['name'];
  return
}
*/

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})

export class ProduitsPage implements OnInit {

  ProduitsList: Produit[];


  //Liste ImagesProduits

  ImagesProduits: any[]=[
    { name :"Aile de raie",
      photo:"/assets/imgs/Aile de raie", 
      photos:"/assets/imgs/Aile de raie", 
   },

    {
      name:"St Jacques", 
      photo:"/assets/imgs/saintJacques.png", 
      photos:"/assets/imgs/saintJacques_icon.png", 
      infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
       name:"Bar",
       photo:"/assets/imgs/barRecette.png", 
       photos:"/assets/imgs/barRecette_icon.png", 
       infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
    },
    {
       name: "Tourteu", 
       photo:"/assets/imgs/tourteau.png",
       photos:"/assets/imgs/tourteau.png",
       infos: "Qu'il est chaud le soleil;Quand nous sommes en vacances Y a de la joie, des hirondelles; C\'est le sud de la France; Papa bricole au garage;Maman lit dans la chaise longue; Dans ce joli paysage; Moi, je me balade en tongs; Que de bonheur!;Que de bonheur!s"
      },
  ]

  //Test
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;

  constructor(private ProduitsService: ProduitsService,
    public storage: Storage,
    private cartService: CartService,
    private modalCtrl: ModalController){ }

  ngOnInit() {
    this.ProduitsService.getProduits().subscribe( res => {
      this.ProduitsList = res;
    });
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  };
  
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  async openCart() {
 
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }
}