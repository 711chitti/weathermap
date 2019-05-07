import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SerachComponent } from './serach/serach.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'search',
      component: SerachComponent
  },
  {
    path: 'about',
    component: AboutComponent
},
{
    path: 'contact',
    component: ContactComponent
},
  {
      path:'**',redirectTo:'search',pathMatch:'full'
  }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

