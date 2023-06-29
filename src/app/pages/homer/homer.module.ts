import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomerPageRoutingModule } from './homer-routing.module';

import { HomerPage } from './homer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomerPageRoutingModule
  ],
  declarations: [HomerPage]
})
export class HomerPageModule {}
