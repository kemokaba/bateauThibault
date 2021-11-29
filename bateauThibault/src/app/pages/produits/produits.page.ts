import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import { Produit } from 'src/app/models/produit';
import { Storage } from '@ionic/storage';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})

export class ProduitsPage implements OnInit {

  ProduitsList: Produit[];

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

  searchActive = false;
}