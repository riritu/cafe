import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelthreePageRoutingModule } from './modelthree-routing.module';

import { ModelthreePage } from './modelthree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelthreePageRoutingModule
  ],
  declarations: [ModelthreePage]
})
export class ModelthreePageModule {}
