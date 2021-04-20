import { Organisation } from '@type'

export interface Session {
  currentCharacterId: number
  currentCharacterName: string
  shops: Organisation[]
  corporations: Organisation[]
}
