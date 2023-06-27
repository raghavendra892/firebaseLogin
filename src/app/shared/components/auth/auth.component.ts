import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  allreadyHaveAccount : boolean = false;
  constructor(private _authService : AuthService, private _fireStore : AngularFirestore,
    private _router: Router) { }

  ngOnInit(): void {
    const userRole = localStorage.getItem('userRole')!;
    if(userRole){
      if(userRole.includes('Teacher')){
        this._router.navigate(['/teacherDash'])
      }
      if(userRole.includes('Student')){
        this._router.navigate(['/studentDash'])
      }
     }
  }

  onLogin(loginForm : NgForm){
    // if(loginForm.valid){
    //  console.log(loginForm.value);
      //
    // }
    console.log(loginForm.value);
    
    let {email,password} = loginForm.value;
    this._authService.onLogin(email,password)
      .then(res =>{
        console.log(res);

        this._authService.logInStatus.next(true)

        const uid = res.user?.uid;
        //console.log(uid);
        this._fireStore.collection('users').doc(uid).get()
          .subscribe((userdoc : any)=> {
            console.log(userdoc);
            const userRole : any = userdoc.data();
            console.log(userRole);
            localStorage.setItem("userRole", userRole.role)
            if(userRole.role.includes('Teacher')){
              this._router.navigate(['/teacherDash'])
            }
            if(userRole.role.includes('Student')){
              this._router.navigate(['/studentDash'])
            }
          })
        

      })
      .catch(err =>{
        console.log(err);
        
      })

  }
  onSignUp(signinForm: NgForm){
    // if(signinForm.valid){
    //   console.log(signinForm.value);
    // }


    // let email = signinForm.value.email;
    // let password = signinForm.value.password;
    let {email, password, userrole} =signinForm.value;
    console.log(signinForm.value);
    this._authService.signUp(email,password)
      .then(res =>{
        console.log(res);
        const uid = res.user?.uid;
        console.log(uid);
        this._fireStore.collection('users').doc(uid).set({
          role : userrole.role
        })
      })
      .catch(err =>{
        console.log(err);
      })
  }

  //email = '^[a-zA-Z0-9.-]+@[a-zA-Z0-9-.]+\\.[a-zA-Z]{2,5}$';

}
