import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'produit-promotions',
    loadChildren: () => import('./produit-promotions/produit-promotions.module').then( m => m.ProduitPromotionsPageModule)
  },
  {
    path: 'bateaux',
    loadChildren: () => import('./bateaux/bateaux.module').then( m => m.BateauxPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then( m => m.RecettesPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
