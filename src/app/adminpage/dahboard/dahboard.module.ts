import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DahboardPageRoutingModule } from './dahboard-routing.module';

import { DahboardPage } from './dahboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DahboardPageRoutingModule
  ],
  declarations: [DahboardPage]
})
export class DahboardPageModule {}
