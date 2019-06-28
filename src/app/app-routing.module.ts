import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AngularFireAuth } from '@angular/fire/auth';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'view', component: ViewComponent, canActivate: [AngularFireAuth]
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
