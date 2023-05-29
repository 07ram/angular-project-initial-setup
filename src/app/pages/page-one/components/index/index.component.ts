import { Component, OnInit } from '@angular/core';
import { TransactionData } from '@libs/transactions';
import { PortfolioData } from '@libs/shared';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  transactionData: TransactionData;
  portfolioData: PortfolioData;

  constructor() { }

  ngOnInit(): void {
  }

}
