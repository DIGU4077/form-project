import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
    email:string | undefined;
    password:string |undefined;
    constructor(private router:Router)
    {}
  onSubmit(data:any) {
    const email=data.value.email;
    const password=data.value.password;
    if(email=="abc123@gmail.com"&& password=="1234")
 
      {

        localStorage.setItem('loggedIn', 'true');
        this.router.navigate(['student']);

      }
      else
      {
        alert("wrong password and email");
        localStorage.setItem('loggedIn', 'false');

      }
 
 
  }
}
