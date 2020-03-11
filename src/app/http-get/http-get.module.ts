import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpGetPageRoutingModule } from './http-get-routing.module';

import { HttpGetPage } from './http-get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpGetPageRoutingModule
  ],
  declarations: [HttpGetPage]
})
export class HttpGetPageModule {}
