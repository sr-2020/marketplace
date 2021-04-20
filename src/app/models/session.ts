import { Corporation, Shop } from '@type'

export interface Session {
  currentCharacterId: number
  currentCharacterName: string
  shops: Shop[]
  organisations: Corporation[]
}
