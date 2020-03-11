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
          path: 'http-get',
          children:
            [
              {
                path: '',
                loadChildren: '../http-get/http-get.module#HttpGetPageModule'
              }
            ]
        },
        {
          path: 'http-post',
          children:
            [
              {
                path: '',
                loadChildren: '../http-post/http-post.module#HttpPostPageModule'
              }
            ]
        },
        {
          path: '',
          redirectTo: '/http-exposure/http-get',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/http-exposure/http-get',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HttpExposurePageRoutingModule { }
