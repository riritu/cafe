import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeltwoPageRoutingModule } from './modeltwo-routing.module';

import { ModeltwoPage } from './modeltwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeltwoPageRoutingModule
  ],
  declarations: [ModeltwoPage]
})
export class ModeltwoPageModule {}
