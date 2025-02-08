import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'online-coach',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'programas',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'conteudos',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'configuracoes',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'ajuda',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'sair',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
