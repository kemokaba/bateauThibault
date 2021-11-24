import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurants =  [ "Bistrot des Gascons", 
   "Les fous de l'île", 
   "Bistrot landais",
  "Villa 9-Trois" ,
  "Bistrot du Sommalier" ,
  "Devenez partenaire" ]

  constructor() { }

  ngOnInit() {
  }

}
