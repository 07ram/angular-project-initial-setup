import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPipe } from './pipes/portfolio.pipe';

@NgModule({
  declarations: [
    PortfolioPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
