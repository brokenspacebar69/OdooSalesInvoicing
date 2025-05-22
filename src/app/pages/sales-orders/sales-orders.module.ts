// src/app/pages/sales-orders/sales-orders.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrdersPage } from './sales-orders.page';

const routes: Routes = [
  {
    path: '',
    component: SalesOrdersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalesOrdersPage]
})
export class SalesOrdersPageModule {}