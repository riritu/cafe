import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelfourPageRoutingModule } from './modelfour-routing.module';

import { ModelfourPage } from './modelfour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelfourPageRoutingModule
  ],
  declarations: [ModelfourPage]
})
export class ModelfourPageModule {}
