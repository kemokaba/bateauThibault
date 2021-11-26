import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import { Produit } from 'src/app/models/produit';
import { Storage } from '@ionic/storage';
import { ProduitsPage } from '../produits/produits.page';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  ProduitsList: Produit[];

  constructor(private ProduitsService: ProduitsService, public storage: Storage){ }

  

  ngOnInit() {

  };
}