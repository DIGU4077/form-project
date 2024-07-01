import { CanActivateFn,Router } from '@angular/router';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  let _router=inject(Router);
  let loggedId=localStorage.getItem('loggedIn');
  if(loggedId !=='true')
    {
      alert("not authanticated user");
      _router.navigate(['login']);
      return false;

    }
   else
   {
    alert("authantictate user congrats")
    return true;


   }
};
