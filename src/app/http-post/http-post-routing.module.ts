import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpPostPage } from './http-post.page';

const routes: Routes = [
  {
    path: '',
    component: HttpPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpPostPageRoutingModule {}
