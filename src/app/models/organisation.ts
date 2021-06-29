import { Lifestyle } from '@type'

export interface Organisation extends Shop, Corporation{
  id: number
  name: string
  owner: ShopOwner
}

export interface Shop {
  id?: number
  name?: string
  balance?: number
  lifestyle?: Lifestyle
  specialisations?: number[]
  location?: string
  comment?: string
}

export interface Corporation {
  corporationUrl?: string
  currentKPI?: number
  lastKPI?: number
  currentSkuSold?: number
  lastSkuSold?: number
}

export interface ShopOwner {
  balance: number
  modelId: string
  name: string
  rights: null
}
