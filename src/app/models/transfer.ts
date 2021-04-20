import { transferType } from '../types/transfer.type'

export interface Transfer {
  amount: number
  anonimous: boolean
  comment: string
  from: string
  newBalance: number
  operationTime: string
  to: string
  transferType: transferType
}
