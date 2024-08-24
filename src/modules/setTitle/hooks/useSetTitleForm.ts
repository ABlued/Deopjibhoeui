import { useNavigate } from 'react-router';
import { useInput } from '../../../core/hooks/useInput';
import { useTagInput } from '../../../core/hooks/useTagInput';
import { titleValidator } from '../../../core/utils/validator/titleValidator';
import { useFriendsNameStore } from './useFriendsNameStore';
import { useTitleStore } from './useTitleStore';
import { routePath } from '../../router/routePath';
import { UseSetTitleForm } from '../types/useSetTitleForm';

export const useSetTitleForm = (): UseSetTitleForm => {
  const title = useInput({
    text: '',
    validator: titleValidator
  });
  const tagInput = useTagInput();
  const setTitle = useTitleStore((state) => state.setTitle);
  const setNames = useFriendsNameStore((state) => state.setNames);
  const navigate = useNavigate();

  const submit = () => {
    setTitle(title.value);
    setNames(tagInput.tags);
    navigate(routePath.result);
  };
  const disabled = title.error.isError || tagInput.tags.length === 0;

  return {
    title,
    tagInput,
    submit,
    disabled
  };
};
