import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'user-view/:userId', component: UserViewComponent},
  { path: 'user-edit/:userId', component: UserEditComponent},
  { path: 'user-add', component: UserAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
