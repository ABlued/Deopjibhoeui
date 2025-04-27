import { useInput } from '../../../core/hooks/useInput';
import { useTagInput } from '../../../core/hooks/useTagInput';
import { titleValidator } from '../../../core/utils/validator/titleValidator';
import { useFriendsNameStore } from './useFriendsNameStore';
import { useTitleStore } from './useTitleStore';
import { routePath } from '../../router/routePath';
import { UseSetTitleForm } from '../types/useSetTitleForm';
import { useRouter } from 'next/navigation';

export const useSetTitleForm = (): UseSetTitleForm => {
  const title = useInput({
    text: '',
    validator: titleValidator
  });
  const tagInput = useTagInput();
  const setTitle = useTitleStore((state) => state.setTitle);
  const setNames = useFriendsNameStore((state) => state.setNames);
  const router = useRouter();

  const submit = () => {
    setTitle(title.value);
    setNames(tagInput.tags);
    router.push(routePath.result);
  };

  const disabled =
    title.value.length === 0 ||
    title.error.isError ||
    tagInput.tags.length === 0;

  return {
    title,
    tagInput,
    submit,
    disabled
  };
};
