import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoformComponent } from './components/todoform/todoform.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GetconfirmationComponent } from './components/getconfirmation/getconfirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { StdListComponent } from './components/std-list/std-list.component';
import { StdFormComponent } from './components/std-form/std-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoformComponent,
    TodolistComponent,
    GetconfirmationComponent,
    StdListComponent,
    StdFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
