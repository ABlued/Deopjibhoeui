import { useInput } from '../../../core/hooks/useInput';
import { emptyValidator } from '../../../core/utils/validator/emptyValidator';
import { useHistoryStore } from './useHistory';
import { v4 as uuidv4 } from 'uuid';

export const useAddHistory = () => {
  const { setHistories: set } = useHistoryStore();
  const buyer = useInput({
    text: '',
    validator: emptyValidator
  });

  const cost = useInput({
    text: '',
    validator: emptyValidator
  });

  const purchaseDate = useInput({
    text: '',
    validator: emptyValidator
  });

  const purchaseHistory = useInput({
    text: '',
    validator: emptyValidator
  });

  const isDisabled = () => {
    return (
      buyer.error.isError ||
      cost.error.isError ||
      purchaseDate.error.isError ||
      purchaseHistory.error.isError
    );
  };

  const submit = () => {
    set({
      id: uuidv4(),
      buyer: buyer.value,
      cost: Number(cost.value),
      purchaseDate: purchaseDate.value,
      purchaseHistory: purchaseHistory.value
    });
  };

  return {
    buyer,
    cost,
    purchaseDate,
    purchaseHistory,
    isDisabled,
    submit
  };
};
