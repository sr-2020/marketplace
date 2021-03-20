import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ShopGuard implements CanActivateChild, CanActivate {
  constructor(private router: Router) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const shopId = window.localStorage?.getItem('shopId')
    if (shopId) {
      return true
    }
    return this.router.createUrlTree(['/', 'auth'])
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const shopId = window.localStorage?.getItem('shopId')
    if (shopId) {
      return true
    }
    return this.router.createUrlTree(['/', 'auth'])
  }
}
