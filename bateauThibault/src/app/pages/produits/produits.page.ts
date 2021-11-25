import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';
import { Produit } from 'src/app/models/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  ProduitsList: Produit[];
  
  constructor(private ProduitsService: ProduitsService){ }

  ngOnInit() {
    this.ProduitsService.getProduits().subscribe( res => {
      this.ProduitsList = res;
    });
    
  };

}
