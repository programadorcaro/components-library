import { cn } from '@/utils/cn';

export type Columnn<T, K extends keyof T = keyof T> = {
  key: K;
  header: string;
  render?: (value: T[K]) => React.ReactNode;
};

type TableProps<T extends Record<keyof T, React.ReactNode>> = {
  data: T[];
  columns: Columnn<T>[];
  onRowClick?: (row: T) => void;
};

export default function Table<T extends Record<keyof T, React.ReactNode>>({
  data,
  columns,
  onRowClick,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-flow-row gap-1">
        <div className="grid grid-flow-col auto-cols-fr">
          {columns.map((column: Columnn<T>, index) => (
            <div
              key={index}
              className="px-6 py-3 text-left text-xs text-black tracking-wider uppercase font-semibold"
            >
              {column.header}
            </div>
          ))}
        </div>

        <div>
          {data.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={cn(
                'grid grid-flow-col divide-x rounded-sm auto-cols-fr divide-black/20',
                rowIndex % 2 === 0 ? 'bg-white/5' : 'bg-transparent',
                onRowClick && 'cursor-pointer hover:bg-white/10'
              )}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map((column: Columnn<T>, colIndex) => (
                <div key={colIndex} className="px-6 py-4 whitespace-nowrap text-xs text-black">
                  {column.render ? column.render(row[column.key]) : row[column.key]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
