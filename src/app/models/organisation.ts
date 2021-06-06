import { Lifestyle } from '@type'

export interface Organisation extends Shop, Corporation{
  id: number
  name: string
  owner: ShopOwner
}

export interface Shop {
  balance?: number
  lifestyle?: Lifestyle
  specialisations?: number[]
}

export interface Corporation {
  corporationUrl?: string
  currentKPI?: number
  lastKPI?: number
}

export interface ShopOwner {
  balance: number
  modelId: string
  name: string
  rights: null
}
