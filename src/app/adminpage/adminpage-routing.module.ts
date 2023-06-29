import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminpagePage } from './adminpage.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpagePageRoutingModule {}
