import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router'
import { Observable } from 'rxjs'
import { SessionService } from '@services/session.service'

@Injectable({
  providedIn: 'root'
})
export class TrustedUserGuard implements CanActivate, CanActivateChild {
  get isOwner() {
    return  this.session.selectedOrg.value.isOwner
  }
  constructor(private session: SessionService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isOwner ? true : this.router.createUrlTree(['/auth'])
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isOwner ? true : this.router.createUrlTree(['/auth'])
  }

}
