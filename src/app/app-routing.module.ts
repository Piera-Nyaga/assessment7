import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthorService} from './services/author.service';




const routes: Routes = [

  {path: '', component: HomepageComponent},
  {path: 'add', loadComponent:() => import('./add/add.component').then(a=>a.AddComponent), canActivate: [AuthorService ]},
  {path: 'display', loadComponent:() => import('./display/display.component').then(d=>d.DisplayComponent)},
  {path: 'login', loadComponent:() => import('./login/login.component').then(l=>l.LoginComponent )},

  {
    path: 'not-found',
    loadComponent: () => import('./pagenotfound/pagenotfound.component').then(p => p.PagenotfoundComponent )
    , data: { message: 'Error Occured' }
  },
  { path: "**", redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }