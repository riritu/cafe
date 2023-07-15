import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutePage } from './route.page';

const routes: Routes = [
  {
    path: '',
    component: RoutePage,
    children: [
      {
        path: 'dahboard',
        loadChildren: () => import('../../adminpage/dahboard/dahboard.module').then( m => m.DahboardPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../../adminpage/account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: 'payment',
        loadChildren: () => import('../../adminpage/payment/payment.module').then( m => m.PaymentPageModule)
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutePageRoutingModule {}



