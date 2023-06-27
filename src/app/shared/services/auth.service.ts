import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logInStatus : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private _afAuth : AngularFireAuth,private _router : Router) { }

  signUp(email: string,password:string) : Promise<any>{
    return this._afAuth.createUserWithEmailAndPassword(email as string,password as string)
  }
  onLogin(email: string,password:string): Promise<any>{
    return this._afAuth.signInWithEmailAndPassword(email,password)
  }

  OnLogout(){
    localStorage.removeItem('userRole');
    this._router.navigate(['/']);
    this.logInStatus.next(false)
  }
}
