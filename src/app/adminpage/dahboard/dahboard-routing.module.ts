import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DahboardPage } from './dahboard.page';

const routes: Routes = [
  {
    path: '',
    component: DahboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DahboardPageRoutingModule {}
