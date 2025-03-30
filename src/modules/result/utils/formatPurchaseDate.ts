import { isNotDate } from '../../../core/utils/date/isNotDate';

export const formatPurchaseDate = (purchaseDate: string): string => {
  return !isNotDate(purchaseDate)
    ? new Date(purchaseDate).toLocaleString('ko-KR')
    : '설정하지 않음';
};

export const formatPurchaseDay = (purchaseDate: string): string => {
  return !isNotDate(purchaseDate)
    ? new Date(purchaseDate).toLocaleString('ko-KR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    : '설정하지 않음';
};
