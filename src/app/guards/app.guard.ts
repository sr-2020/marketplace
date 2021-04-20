import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const corp = window.localStorage.getItem('corpId')
    const shop = window.localStorage.getItem('shopId')
    if (corp && shop) {
      window.localStorage.removeItem('corpId')
      window.localStorage.removeItem('shopId')
      return this.router.createUrlTree(['/auth'])
    }
    if (corp) {
      return this.router.createUrlTree(['/corp', 'info'])
    }
    if (shop) {
      return this.router.createUrlTree(['/shop', 'info'])
    }

    return this.router.createUrlTree(['/auth'])
  }
}
