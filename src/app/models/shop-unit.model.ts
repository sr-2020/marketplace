import { LifestyleType } from '../types/lifestyle.type'

export interface SKUModel {
  skuId: number
  skuName: string
  count: number
  corporationId: number
  corporationName: string
  enabled: boolean
  corporationLogo: string
  nomenklaturaId: number
  nomenklaturaName: string
  code: string
  lifeStyle: LifestyleType
  lifeStyleId: number
  basePrice: number
  description: string
  urlPicture: string
  productTypeId: number
  productTypeName: string
  discountType: number
}

export interface ShopUnitModel {
  sku: SKUModel
  qrid: number
  shop: number
  qr: string
}
