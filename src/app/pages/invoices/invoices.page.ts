// src/app/pages/invoices/invoices.page.ts
import { Component, OnInit } from '@angular/core';

interface Invoice {
  id: number;
  customer: string;
  amount: number;
  date: string;
  status: string;
}

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  invoices: Invoice[] = []; // Define the type explicitly

  constructor() { }

  ngOnInit() {
    this.invoices = [
      { id: 1, customer: 'Customer 1', amount: 1000, date: '2023-01-01', status: 'Paid' },
      { id: 2, customer: 'Customer 2', amount: 2000, date: '2023-01-02', status: 'Pending' }
    ];
  }
}