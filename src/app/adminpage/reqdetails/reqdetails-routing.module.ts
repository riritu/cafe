import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReqdetailsPage } from './reqdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ReqdetailsPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReqdetailsPageRoutingModule {}
