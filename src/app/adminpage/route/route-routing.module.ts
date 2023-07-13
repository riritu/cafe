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
        path: 'requests',
        loadChildren: () => import('../../adminpage/requests/requests.module').then( m => m.RequestsPageModule)
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutePageRoutingModule {}



