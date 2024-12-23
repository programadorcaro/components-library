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
export default function Table<T extends Record<keyof T, React.ReactNode>>({ data, columns, onRowClick, }: TableProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
