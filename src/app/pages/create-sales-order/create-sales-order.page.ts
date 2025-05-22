// src/app/pages/create-sales-order/create-sales-order.page.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-sales-order',
  templateUrl: './create-sales-order.page.html',
  styleUrls: ['./create-sales-order.page.scss'],
})
export class CreateSalesOrderPage implements OnInit {
  orderForm: FormGroup = new FormGroup({}); // Initialize here

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      customer: ['', Validators.required],
      product: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      date: [new Date().toISOString(), Validators.required]
    });
  }

  createOrder() {
    if (this.orderForm.valid) {
      console.log(this.orderForm.value);
    }
  }
}