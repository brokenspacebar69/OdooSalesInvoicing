// src/app/pages/sales-orders/sales-orders.page.ts
import { Component, OnInit } from '@angular/core';

interface SalesOrder {
  id: number;
  customer: string;
  total: number;
  date: string;
}

@Component({
  selector: 'app-sales-orders',
  templateUrl: './sales-orders.page.html',
  styleUrls: ['./sales-orders.page.scss'],
})
export class SalesOrdersPage implements OnInit {
  salesOrders: SalesOrder[] = [];

  constructor() { }

  ngOnInit() {
    this.salesOrders = [
      { id: 1, customer: 'Customer 1', total: 1000, date: '2023-01-01' },
      { id: 2, customer: 'Customer 2', total: 2000, date: '2023-01-02' }
    ];
  }
}