import { useState } from 'react';
import { useForm } from '../../../core/hooks/useForm';
import { useInput } from '../../../core/hooks/useInput';
import { useHistoryStore } from './useHistory';
import { v4 as uuidv4 } from 'uuid';
import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';

export const useAddHistory = () => {
  const { pushHistories: set } = useHistoryStore();
  const { names } = useFriendsNameStore();
  const cost = useInput({ text: '' });
  const [buyer, setBuyer] = useState(names[0]);

  const onChangeBuyer = (value: string) => {
    if (names.includes(value)) {
      setBuyer(value);
    }
  };

  const form = useForm({
    initialValues: {
      purchaseDate: '',
      purchaseHistory: ''
    },
    onSubmit: () => {
      set({
        id: uuidv4(),
        cost: Number(cost.value),
        buyer: buyer,
        purchaseDate: form.values.purchaseDate,
        purchaseHistory: form.values.purchaseHistory
      });
    },
    validators: {},
    requires: {
      purchaseDate: true,
      purchaseHistory: true
    }
  });

  return {
    buyer,
    onChangeBuyer,
    form,
    cost
  };
};
