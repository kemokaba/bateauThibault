import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recettes = [ "Homard" ,  "St Jacques" ,  "Bar",   "Tourteu", "Recettes","Recttes" ];

  constructor() { }

  ngOnInit() {
  }

}
