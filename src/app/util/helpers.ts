import { Corporation, Organisation } from '@type'
import { CorpGuard } from '../corp/corp.guard'
import { ShopGuard } from '../shop/shop.guard'

export type OrganisationType = 'shop' | 'corporation'

export function checkOrganisationType(
  org: Organisation & Corporation
): OrganisationType {
  if (!org) {
    return null
  }

  if ('balance' in org) {
    return 'shop'
  }

  if ('currentKPI' in org) {
    return 'corporation'
  }
  return null
}

export function guardHelper(ctx: CorpGuard & ShopGuard, key: string) {
  const id = window.localStorage?.getItem(key)
  if (id) {
    return true
  }
  return ctx.router.createUrlTree(['/', 'auth'])
}
