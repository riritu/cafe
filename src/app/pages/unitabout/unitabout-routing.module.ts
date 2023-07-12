import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnitaboutPage } from './unitabout.page';

const routes: Routes = [
  {
    path: '',
    component: UnitaboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitaboutPageRoutingModule {}
