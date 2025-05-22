// src/app/pages/tabs/tabs-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'sales-orders',
        loadChildren: () => import('../sales-orders/sales-orders.module').then(m => m.SalesOrdersPageModule)
      },
      {
        path: 'invoices',
        loadChildren: () => import('../invoices/invoices.module').then(m => m.InvoicesPageModule)
      },
      {
        path: '',
        redirectTo: 'sales-orders',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}