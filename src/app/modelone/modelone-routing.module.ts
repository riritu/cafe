import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelonePage } from './modelone.page';

const routes: Routes = [
  {
    path: '',
    component: ModelonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelonePageRoutingModule {}
