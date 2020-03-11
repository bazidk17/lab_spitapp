import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpGetPage } from './http-get.page';

const routes: Routes = [
  {
    path: '',
    component: HttpGetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpGetPageRoutingModule {}
