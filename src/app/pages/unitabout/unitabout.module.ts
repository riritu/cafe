import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnitaboutPageRoutingModule } from './unitabout-routing.module';

import { UnitaboutPage } from './unitabout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnitaboutPageRoutingModule
  ],
  declarations: [UnitaboutPage]
})
export class UnitaboutPageModule {}
