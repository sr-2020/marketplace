import { transferType } from '../types/transfer.type';

export interface TransferModel {
  amount: number;
  anonimous: boolean;
  comment: string;
  from: string;
  newBalance: number;
  operationTime: string;
  to: string;
  transferType: transferType;
}

