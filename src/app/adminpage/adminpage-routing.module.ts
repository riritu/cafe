import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpagePage } from './adminpage.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpagePage
  },
  {
    path: 'route',
    loadChildren: () => import('./route/route.module').then( m => m.RoutePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'reqdetails',
    loadChildren: () => import('./reqdetails/reqdetails.module').then( m => m.ReqdetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpagePageRoutingModule {}
