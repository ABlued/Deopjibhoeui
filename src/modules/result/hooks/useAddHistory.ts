import { useForm } from '../../../core/hooks/useForm';
import { useInput } from '../../../core/hooks/useInput';
import { useHistoryStore } from './useHistory';
import { v4 as uuidv4 } from 'uuid';

export const useAddHistory = () => {
  const { pushHistories: set } = useHistoryStore();
  const cost = useInput({ text: '' });
  const form = useForm({
    initialValues: {
      buyer: '',
      purchaseDate: '',
      purchaseHistory: ''
    },
    onSubmit: () => {
      set({
        id: uuidv4(),
        cost: Number(cost.value),
        buyer: form.values.buyer,
        purchaseDate: form.values.purchaseDate,
        purchaseHistory: form.values.purchaseHistory
      });
    },
    validators: {},
    requires: {
      buyer: true,
      purchaseDate: true,
      purchaseHistory: true
    }
  });

  return {
    form,
    cost
  };
};
