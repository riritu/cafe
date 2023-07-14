import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelonePageRoutingModule } from './modelone-routing.module';

import { ModelonePage } from './modelone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelonePageRoutingModule
  ],
  declarations: [ModelonePage]
})
export class ModelonePageModule {}
