// src/app/services/odoo-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OdooApiService {
  private apiUrl = 'https://your-odoo-instance-url/jsonrpc';
  private apiKey = 'e4bd2b490dc5653f70a9be7eea62067c501281c7';
  private dbName = 'daveryles';
  private uid: number | null = null;

  constructor(private http: HttpClient) {}

  // Authentication method
  login(username: string, password: string): Observable<any> {
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'common',
        method: 'login',
        args: [this.dbName, username, password]
      },
      id: new Date().getTime()
    };

    return this.http.post(this.apiUrl, payload);
  }

  // Method to fetch sales orders
  getSalesOrders(limit: number = 10, offset: number = 0): Observable<any> {
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'object',
        method: 'execute_kw',
        args: [
          this.dbName,
          this.uid,
          this.apiKey,
          'sale.order',
          'search_read',
          [[]],
          {
            fields: ['name', 'partner_id', 'date_order', 'amount_total', 'state'],
            limit: limit,
            offset: offset
          }
        ]
      },
      id: new Date().getTime()
    };

    return this.http.post(this.apiUrl, payload);
  }

  // Method to create a new sales order
  createSalesOrder(customerId: number, orderLines: any[]): Observable<any> {
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'object',
        method: 'execute_kw',
        args: [
          this.dbName,
          this.uid,
          this.apiKey,
          'sale.order',
          'create',
          [{
            partner_id: customerId,
            order_line: orderLines.map(line => [0, 0, line])
          }]
        ]
      },
      id: new Date().getTime()
    };

    return this.http.post(this.apiUrl, payload);
  }

  // Method to fetch invoices
  getInvoices(limit: number = 10, offset: number = 0): Observable<any> {
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'object',
        method: 'execute_kw',
        args: [
          this.dbName,
          this.uid,
          this.apiKey,
          'account.move',
          'search_read',
          [[['move_type', '=', 'out_invoice']]],
          {
            fields: ['name', 'partner_id', 'invoice_date', 'amount_total', 'state'],
            limit: limit,
            offset: offset
          }
        ]
      },
      id: new Date().getTime()
    };

    return this.http.post(this.apiUrl, payload);
  }

  // Method to create an invoice from a sales order
  createInvoiceFromSalesOrder(salesOrderId: number): Observable<any> {
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      params: {
        service: 'object',
        method: 'execute_kw',
        args: [
          this.dbName,
          this.uid,
          this.apiKey,
          'sale.order',
          'action_invoice_create',
          [[salesOrderId]]
        ]
      },
      id: new Date().getTime()
    };

    return this.http.post(this.apiUrl, payload);
  }
}