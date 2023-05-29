import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOneRoutingModule } from './page-one-routing.module';
import { IndexComponent } from './components/index/index.component';
import { UiComponentsModule } from '@feature/ui-components';
import { SharedModule } from '@feature/shared';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    PageOneRoutingModule,
    UiComponentsModule,
    SharedModule
  ]
})
export class PageOneModule { }
