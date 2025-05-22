// src/app/pages/invoices/invoices.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesPage } from './invoices.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InvoicesPage]
})
export class InvoicesPageModule {}
