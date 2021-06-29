import { TransferType } from '@type'

export interface Transfer {
  amount: number
  anonimous: boolean
  comment: string
  from: string
  newBalance: number
  operationTime: string
  overdraft: boolean
  to: string
  transferType: TransferType
}
