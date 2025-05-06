import { useState } from 'react';
import { useForm } from '../../../core/hooks/useForm';
import { useInput } from '../../../core/hooks/useInput';
import { useHistoryStore } from './useHistory';
import { History } from '../types/History';

export const useEditHistory = (props: History) => {
  const { setHistoryById } = useHistoryStore();
  const cost = useInput({ text: props.cost?.toString() ?? '' });
  const [buyer, setBuyer] = useState(props.buyer || '');

  const onChangeBuyer = (value: string) => {
    setBuyer(value);
  };

  const form = useForm({
    initialValues: {
      purchaseDate: props.purchaseDate || '',
      purchaseHistory: props.purchaseHistory || ''
    },
    onSubmit: () => {
      setHistoryById(props.id, {
        id: props.id,
        cost: Number(cost.value),
        buyer: buyer,
        purchaseDate: form.values.purchaseDate,
        purchaseHistory: form.values.purchaseHistory
      });
    },
    validators: {},
    requires: {
      purchaseHistory: true
    }
  });

  const isValid = (): boolean => {
    return form.isValid() && cost.value.length > 0 && buyer.length > 0;
  };

  return {
    buyer,
    onChangeBuyer,
    form,
    cost,
    isValid
  };
};
