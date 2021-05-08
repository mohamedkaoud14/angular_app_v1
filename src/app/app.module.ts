import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteUserComponent } from './component/delete-user/delete-user.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { UserComponent } from './component/user/user.component';
import { UsersComponent } from './component/users/users.component';
import { UsersService } from './services/users.service';





@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,    
    UserDetailsComponent,
    UsersComponent,
    UserRegisterComponent,
    DeleteUserComponent,
    UserEditComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
