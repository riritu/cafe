import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpagePageRoutingModule } from './adminpage-routing.module';

import { AdminpagePage } from './adminpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminpagePageRoutingModule
  ],
  declarations: [AdminpagePage]
})
export class AdminpagePageModule {}
