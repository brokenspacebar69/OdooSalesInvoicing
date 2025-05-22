// src/app/pages/create-sales-order/create-sales-order.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { CreateSalesOrderPage } from './create-sales-order.page';

const routes: Routes = [
  {
    path: '',
    component: CreateSalesOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateSalesOrderPage]
})
export class CreateSalesOrderPageModule {}
