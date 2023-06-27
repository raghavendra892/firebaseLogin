import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuthModule } from'@angular/fire/compat/auth';
import { AngularFireModule } from'@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AboutComponent } from './shared/components/about/about.component';
import { StudentdashboardComponent } from './shared/components/studentdashboard/studentdashboard.component';
import { TeachersdashboardComponent } from './shared/components/teachersdashboard/teachersdashboard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AboutComponent,
    StudentdashboardComponent,
    TeachersdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
