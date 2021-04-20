import { LifestyleType } from '../types/lifestyle.type'

export interface Shop {
  id: number
  balance: number
  lifestyle: LifestyleType
  name: string
  ownerId: number
  specialisations: number[]
}

export interface Corporation {
  id: number
  corporationUrl: string
  currentKPI: number
  lastKPI: number
  name: string
  owner: ShopOwner
}

export interface ShopOwner {
  balance: number
  modelId: string
  name: string
  rights: null
}
