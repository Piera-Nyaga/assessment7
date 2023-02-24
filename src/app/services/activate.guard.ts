import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,Router,CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorService } from './author.service';
@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate, CanActivateChild {

  constructor(private AuthService:AuthorService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.AuthService.getAuthStatus().then((status:boolean)=>{
    if(status){
      return true
    }else{
      alert("KINDLY LOGIN")
      this.router.navigate(['login'])
      return false
    }
   })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute,state)
  }
  
}
