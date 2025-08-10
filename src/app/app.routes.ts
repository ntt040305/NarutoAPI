import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./pages/detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent),
  },
  {
    path:'storage1',
    loadComponent:()  =>import('./pages/storage1/storage1.component').then(m =>m.Storage1Component),
  },
  {
    path:'character-focus/:id',
    loadComponent:()  =>import('./pages/character-focus/character-focus.component').then(m =>m.CharacterFocusComponent),
  },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {
  path:'**',
  loadComponent:()=>import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent),
},

];
