import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}


  searchActive = false;

  ngOnInit() {
    console.log('Home : OK')
  }

  produits(){
    this.router.navigate(['tabs/produits'])
  }

  bateau(){
    this.router.navigate(['tabs/bateaux']);
  }

  restaurant(){
    this.router.navigate(['tabs/restaurants']);
  }

  recette(){
    this.router.navigate(['tabs/recettes']);
  }
  
  contact(){
    this.router.navigate(['tabs/contacts']);
  }
}
