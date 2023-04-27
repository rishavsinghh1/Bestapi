import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthloginGuard implements CanActivate {
  constructor(
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve, reject) =>{
        const local = localStorage.getItem("notificationToken");
        if(local!=null && local!='null' ){
          this.router.navigateByUrl('/dashboard');
          resolve(true);
          return false;
        }else{
          resolve(true);
          return true;
        }
      })
  }
  
}
