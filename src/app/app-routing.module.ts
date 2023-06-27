import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersdashboardComponent } from './shared/components/teachersdashboard/teachersdashboard.component';
import { StudentdashboardComponent } from './shared/components/studentdashboard/studentdashboard.component';
import { AboutComponent } from './shared/components/about/about.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { Authgaurd } from './shared/services/authgaurd.service';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path : 'teacherDash',canActivate:[Authgaurd], component : TeachersdashboardComponent},
  {path : 'studentDash',canActivate:[Authgaurd], component : StudentdashboardComponent},
  {path : 'about',canActivate:[Authgaurd], component : AboutComponent},

  // {path: '', component: AuthComponent},
  // {path : 'teacherDash', component : TeachersdashboardComponent},
  // {path : 'studentDash', component : StudentdashboardComponent},
  // {path : 'about', component : AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
