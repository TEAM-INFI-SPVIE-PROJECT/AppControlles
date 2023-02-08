import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DasboardComponent } from './dasboard/dasboard.component';
import { CategoryComponent } from './category/category.component';
import { SitesComponent } from './sites/sites.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    DasboardComponent,
    CategoryComponent,
    SitesComponent,
    UsersComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
