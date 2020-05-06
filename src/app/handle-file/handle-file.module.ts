import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandleFilePageRoutingModule } from './handle-file-routing.module';

import { HandleFilePage } from './handle-file.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandleFilePageRoutingModule
  ],
  declarations: [HandleFilePage]
})
export class HandleFilePageModule {}
