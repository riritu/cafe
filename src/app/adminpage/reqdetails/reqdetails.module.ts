import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReqdetailsPageRoutingModule } from './reqdetails-routing.module';

import { ReqdetailsPage } from './reqdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReqdetailsPageRoutingModule
  ],
  declarations: [ReqdetailsPage]
})
export class ReqdetailsPageModule {}
