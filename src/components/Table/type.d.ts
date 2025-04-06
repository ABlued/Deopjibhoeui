import '@tanstack/react-table';
import { ValidationResult } from '../../core/utils/types/validate';

export type TableRowType = 'common' | 'checkbox';

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue, TransValue = unknown> {
    headerClassName?: string;
    cellClassName?: string;
    editComponent?: React.ComponentType<{
      value: TValue;
      setValue: (value: TValue) => void;
    }>;
    canEdit?: boolean;
    validate?: (value: TValue) => ValidationResult;
    transform?: (value: TValue) => TransValue;
    type?: TableRowType;
  }
}

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}
