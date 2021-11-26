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
  liste = []

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


  AddToCart(produit):void{
    this.storage.set('name', produit.name)
    this.storage.get('name').then((val) =>{
      console.log(val);
    })
    this.liste.push(produit.name);
  }
  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }
 
  async openCart() {
    this.animateCSS('bounceOutLeft', true);
 
    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }
 
  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)
    
    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}

