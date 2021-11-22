import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  produitPromotion(){
    this.router.navigate(['/produit-promotions'])
  }


  bateau(){
    this.router.navigate(['/bateaux']);
  }

  restaurant(){
    this.router.navigate(['/restaurants']);
  }
  
  recette(){
    this.router.navigate(['/recettes']);
  }
  contact(){
    this.router.navigate(['/contacts']);
  }



  
  

}
