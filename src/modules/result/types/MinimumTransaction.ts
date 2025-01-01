export interface MinimumTransaction {
  sender: string;
  receiver: string;
  amount: number;
}

export interface Transaction {
  member: string;
  amount: number;
}

type Name = string;
type Amount = number;
export type TransactionDetail = Record<Name, Amount>;
export type SortedMembersToPay = {
  member: string;
  amount: number;
}[];
