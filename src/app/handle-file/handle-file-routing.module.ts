import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandleFilePage } from './handle-file.page';

const routes: Routes = [
  {
    path: '',
    component: HandleFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandleFilePageRoutingModule {}
