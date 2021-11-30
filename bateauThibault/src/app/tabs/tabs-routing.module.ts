import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    
    children: [

      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
          }
        ]
      },      
      {
        path: 'cart-modal',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
          }
        ]
      },
      {
        path: 'produits',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/produits/produits.module').then( m => m.ProduitsPageModule)
          }
        ]
      },
      {
        path: 'recettes',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/recettes/recettes.module').then( m => m.RecettesPageModule)
          }
        ]
      },
      {
        path: 'restaurants',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
          }
        ]
      },
      {
        path: 'bateaux',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/bateaux/bateaux.module').then( m => m.BateauxPageModule)
          }
        ]
      },
      {
        path: 'contacts',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/contacts/contacts.module').then( m => m.ContactsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
