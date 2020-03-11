import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomePageModule' },
  {
    path: 'timetable',
    loadChildren: () => import('./timetable/timetable.module').then( m => m.TimetablePageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'http-exposure',
    loadChildren:'./http-exposure/http-exposure.module#HttpExposurePageModule'
  },
  {
    path: 'http-get',
    loadChildren: () => import('./http-get/http-get.module').then( m => m.HttpGetPageModule)
  },
  {
    path: 'http-get',
    loadChildren: () => import('./http-get/http-get.module').then( m => m.HttpGetPageModule)
  },
  {
    path: 'http-post',
    loadChildren: () => import('./http-post/http-post.module').then( m => m.HttpPostPageModule)
  },


  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
