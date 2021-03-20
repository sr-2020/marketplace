import { ShopModel } from './shop.model'

export interface SessionModel {
  currentCharacterId: number
  currentCharacterName: string
  shops: ShopModel[]
}
