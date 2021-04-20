import { LifestyleType } from '@type'

export interface Offer {
  priceId: number
  dateCreated: number
  shopName: string
  dateTill: number
  finalPrice: number
  shopComission: number
  skuName: string
  count: number
  corporationName: string
  corporationLogo: string
  nomenklaturaName: string
  lifeStyle: LifestyleType
  description: string
  urlPicture: string
  productTypeName: string
}
