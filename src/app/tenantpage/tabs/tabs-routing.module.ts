import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../../tenantpage/dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      // {
      //   path: 'account',
      //   loadChildren: () => import('../../adminpage/account/account.module').then( m => m.AccountPageModule)
      // }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
