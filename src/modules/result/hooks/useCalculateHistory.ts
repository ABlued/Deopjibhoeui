import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import { calculateMountPerPerson } from '../utils/calculateMinimumTransaction';
import { useHistoryStore } from './useHistory';

export function useCalculateHistory() {
  const { histories } = useHistoryStore();
  const { names } = useFriendsNameStore();

  const totalCost = histories.reduce((acc, cur) => acc + cur.cost, 0);
  const mountPerPerson = calculateMountPerPerson(histories, names);

  return {
    totalCost,
    mountPerPerson
  };
}
