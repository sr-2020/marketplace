import { LifestyleType } from '../types/lifestyle.type'
import { SpecialisationModel } from './specialisation.model'

export interface ShopModel {
  id: number
  ownerId: number
  balance: number
  commission: number
  lifestyle: LifestyleType
  name: string
  specialisation: SpecialisationModel[]
}
