import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./pages/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'se1',
    loadChildren: () => import('./pages/se1/se1.module').then( m => m.Se1PageModule)
  },
  {
    path: 'se2',
    loadChildren: () => import('./pages/se2/se2.module').then( m => m.Se2PageModule)
  },
  {
    path: 'se11',
    loadChildren: () => import('./pages/se11/se11.module').then( m => m.Se11PageModule)
  },
  {
    path: 'se12',
    loadChildren: () => import('./pages/se12/se12.module').then( m => m.Se12PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
