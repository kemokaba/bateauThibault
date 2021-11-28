import { Product, CartService } from './../../services/panier.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

interface Restaurants {
  name: string;
  adresse: string;
}

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
 
  cart: Product[] = [];
  
  restaurants: Restaurants[] = [
    {
      name: 'Bistrot des Gascons',
      adresse: '',
    },
    {
      name: "Les fous de l'île",
      adresse: '',
    },
    {
      name: 'Bistrot landais',
      adresse: '',
    },
    {
      name: "Villa 9-Trois",  
      adresse: ''
    },
    {
      name: "Bistrot du Sommalier",  
      adresse: ''
    },
  ];

  customAlertOptions: any = {
    header: 'Adresse de Click & Collect',
    subHeader: 'Séléctionner votre restaurant de retrait',
    message: 'Frais de service : gratuit',
    translucent: true
  };

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
 
  async checkout() {
    // Perfom PayPal or Stripe checkout process
 
    let alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'Votre demande sera traité dans la journée',
      buttons: ['OK']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    }); 
  }
}