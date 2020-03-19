import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpExposurePage } from './http-exposure.page';

const routes: Routes = [
  {
    path: 'http-exposure',
    component: HttpExposurePage,
    children:
      [
        {
          path: 'get',
          loadChildren: '../http-get/http-get.module#HttpGetPageModule',
          
        },
        {
          path: 'post',
          loadChildren: '../http-post/http-post.module#HttpPostPageModule'
        },
        {
          path: '',
          redirectTo: '/http-exposure/get',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/http-exposure/get',
    pathMatch: 'full'
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpExposurePageRoutingModule { }
