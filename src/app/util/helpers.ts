import { Corporation, Organisation } from '@type'

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
