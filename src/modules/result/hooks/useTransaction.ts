import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import { calculateMinimumTransaction } from '../utils/calculateMinimumTransaction';
import { useHistoryStore } from './useHistory';

export function useTransaction() {
  const { histories } = useHistoryStore();
  const { names } = useFriendsNameStore();

  const transaction = calculateMinimumTransaction({
    expense: histories,
    members: names
  });

  return { transaction };
}
