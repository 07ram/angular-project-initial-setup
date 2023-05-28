import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageThreeRoutingModule } from './page-three-routing.module';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PageThreeRoutingModule
  ]
})
export class PageThreeModule { }
