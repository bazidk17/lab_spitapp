import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpExposurePageRoutingModule } from './http-exposure-routing.module';

import { HttpExposurePage } from './http-exposure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpExposurePageRoutingModule
  ],
  declarations: [HttpExposurePage]
})
export class HttpExposurePageModule {}
