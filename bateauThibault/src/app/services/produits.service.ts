import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  ProduitsList : Produit[];

  constructor(private http: HttpClient) { }
  
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>('/assets/data/produits.json');
  }
}

