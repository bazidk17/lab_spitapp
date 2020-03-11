import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HttpPostPageRoutingModule } from './http-post-routing.module';

import { HttpPostPage } from './http-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpPostPageRoutingModule
  ],
  declarations: [HttpPostPage]
})
export class HttpPostPageModule {}
