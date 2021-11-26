import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./pages/produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./pages/bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./pages/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./pages/recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  
  {
    path: 'modal-bateau',
    loadChildren: () => import('./pages/modal-bateau/modal-bateau.module').then( m => m.ModalBateauPageModule)
  },
  {
    path: 'modal-recette',
    loadChildren: () => import('./pages/modal-recette/modal-recette.module').then( m => m.ModalRecettePageModule)
  },
  {
    path: 'modal-restaurent',
    loadChildren: () => import('./pages/modal-restaurent/modal-restaurent.module').then( m => m.ModalRestaurentPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
