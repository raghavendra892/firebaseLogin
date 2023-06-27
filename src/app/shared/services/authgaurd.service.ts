import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class Authgaurd implements CanActivate {

  constructor(private _afAuth : AngularFireAuth, private _router : Router,
    private _authService : AuthService) { }

  canActivate() : Observable<boolean>{
    let login = localStorage.getItem("userrole");
    if(login){
      this._authService.logInStatus.next(true)
      return of(true)
    }else{
      this._router.navigate(['/'])
      return of(false)
    }
  }
}
