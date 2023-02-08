import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ModalUserComponent } from './modal-user/modal-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
{path: 'dasboard', component: DasboardComponent, pathMatch: 'full'},
{path: 'category', component: CategoryComponent, pathMatch: 'full'},
{path: 'users', component: UsersComponent, pathMatch: 'full'},
{path: 'modal-user', component: ModalUserComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
