import { Lifestyle } from '@type'

export interface Sku {
  alias: string
  baseCount: number
  basePrice: number
  code: string
  corporationId: number
  corporationLogo: string
  corporationName: string
  count: number
  description: string
  discountType: number
  enabled: boolean
  id: number
  lifeStyle: Lifestyle
  lifeStyleId: number
  name: string
  nomenklaturaId: number
  nomenklaturaName: string
  productTypeId: number
  productTypeName: string
  skuId: number
  skuName: string
  specialisationId: number
  specialisationName: string
  urlPicture: string
}

export interface ShopUnit {
  sku: Sku
  qrid: number
  shop: number
  qr: string
}
