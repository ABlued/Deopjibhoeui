import { History } from '../History';
import { v4 as uuidv4 } from 'uuid';

export const createHistoryMock = (
  params: Pick<History, 'buyer' | 'cost' | 'purchaseHistory'> & {
    purchaseDate?: string;
  }
): History => ({
  id: uuidv4(),
  buyer: params.buyer ?? 'buyer',
  cost: params.cost,
  purchaseDate: params?.purchaseDate
    ? new Date(params.purchaseDate).toLocaleString('ko-KR')
    : new Date().toLocaleString('ko-KR'),
  purchaseHistory: params.purchaseHistory ?? 'purchaseHistory'
});
