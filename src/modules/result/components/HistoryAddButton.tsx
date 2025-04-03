import Button, { ButtonProps } from '../../../components/Button/Button';
import { cn } from '../../../core/utils/classname/cn';
import { openDialog } from '../../../core/utils/dialog';
import { BreakPoint } from '../../../types/style/breakPoint';
import { resultDialog } from '../dialog';
import { VscAdd } from 'react-icons/vsc';

function HistoryAddButton({
  className,
  maxWidth
}: { className?: string; maxWidth?: BreakPoint } & ButtonProps) {
  return (
    <Button
      text="내역 추가"
      size={'small'}
      onClick={() => {
        openDialog(resultDialog.addHistory({ maxWidth }));
      }}
      startIcon={() => (
        <VscAdd
          width={20}
          height={20}
          style={{
            display: 'inline'
          }}
        />
      )}
      className={cn('w-[120px] font-bold text-[16px]', className)}
    />
  );
}

export default HistoryAddButton;
