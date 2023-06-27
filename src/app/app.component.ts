import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fireBaseAuthentication';
  isLoggedIn : boolean = false;
  @ViewChild('sideNav') sideNav! : any;
  constructor(private _authService : AuthService, private _router : Router){}
  ngOnInit(): void {
    this._authService.logInStatus
      .subscribe(res =>{
        this.isLoggedIn = res;
      })
  }

  onSignup(email: string, password: string){
    this._authService.signUp(email,password)
      .then(res =>{
          console.log(res);
      })
      .catch(err => {
        console.log(err.code);
        
      })

  }

  toggleSidenav(){
      this.sideNav.open()
  }
  onLogoutfrom(){
    this._authService.OnLogout()
  }
}
