import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Modulos

// Components
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';



@NgModule({
  declarations: [
    LoginComponent,
    ResgisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
