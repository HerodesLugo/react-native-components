import { ViewProps } from "react-native";

export type TableSize = "sm" | "md" | "lg";
export type Align = "left" | "center" | "right";

export type SizeClasses = { header: string; row: string; cell: string };

export interface Column<T = any> {
    key: string;
    title: React.ReactNode;
    width?: number | string;
    render?: (row: T) => React.ReactNode;
    sortable?: boolean;
    align?: Align;
    className?: string;
}

export interface PaginationOptions {
    pageSize: number;
}

export interface TableProps<T = any> extends ViewProps {
    columns: Column<T>[];
    data: T[];
    size?: TableSize;
    className?: string;
    rowKey?: string | ((row: T) => string);
    selectable?: boolean;
    selectedIds?: string[];
    onSelectionChange?: (ids: string[]) => void;
    sortable?: boolean;
    onRowPress?: (row: T) => void;
    pagination?: PaginationOptions;
}

export interface HeaderProps<T> {
    columns: Column<T>[];
    selectable: boolean;
    allSelected: boolean;
    onToggleAll: (selected: boolean) => void;
    sortable: boolean;
    sortKey: string | null;
    sortDir: "asc" | "desc";
    onSortChange: (key: string) => void;
    sizeClasses: SizeClasses;
}

export interface PaginationProps {
    page: number;
    totalPages: number;
    onPrev: () => void;
    onNext: () => void;
}

export interface RowProps<T> {
    item: T;
    index: number;
    columns: Column<T>[];
    selectable: boolean;
    isSelected: boolean;
    onToggleSelect: (id: string) => void;
    getRowKey: (row: T, index: number) => string;
    sizeClasses: SizeClasses;
    onRowPress?: (row: T) => void;
}
