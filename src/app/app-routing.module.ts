import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'one',
    loadChildren: () => import('./pages/page-one/page-one.module').then(m => m.PageOneModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./pages/page-two/page-two.module').then(m => m.PageTwoModule)
  },
  {
    path: 'three',
    loadChildren: () => import('./pages/page-three/page-three.module').then(m => m.PageThreeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
