import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeltwoPage } from './modeltwo.page';

const routes: Routes = [
  {
    path: '',
    component: ModeltwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeltwoPageRoutingModule {}
