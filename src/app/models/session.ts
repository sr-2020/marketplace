import { Corporation, Shop } from './shop'

export interface Session {
  currentCharacterId: number
  currentCharacterName: string
  shops: Shop[]
  organisations: Corporation[]
}
