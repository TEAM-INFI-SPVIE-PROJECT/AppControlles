import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './features/admin/admin.module';
import { AuthModule } from "./features/auth/auth.module";
import { ModalUserComponent } from './features/admin/modal-user/modal-user.component';




@NgModule({
    declarations: [
        AppComponent,
        ModalUserComponent,

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    HttpClientModule

    ]
})
export class AppModule { }
