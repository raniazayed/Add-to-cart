import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router,UrlTree ,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private loginser: LoginService,private route:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return this.loginser.isUserAuthenticated();
    // return true;
    const User = this.loginser.currentUser;

    if(User){
      console.log(User)
      return true;
    }else{
      this.route.navigateByUrl('/forms');
      return false;
    }
}
}
