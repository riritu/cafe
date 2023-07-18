import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminmainPageRoutingModule } from './adminmain-routing.module';

import { AdminmainPage } from './adminmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminmainPageRoutingModule
  ],
  declarations: [AdminmainPage]
})
export class AdminmainPageModule {}
