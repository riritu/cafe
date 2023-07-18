import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminmainPage } from './adminmain.page';

const routes: Routes = [
  {
    path: '',
    component: AdminmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminmainPageRoutingModule {}
