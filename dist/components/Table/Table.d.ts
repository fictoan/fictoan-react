import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface TableProps extends BaseAndHTMLProps<HTMLTableElement> {
    bordered?: "rows" | "columns" | "all";
    striped?: boolean;
    hoverable?: boolean;
    fullWidth?: boolean;
}
declare const Table: ({ bordered, striped, hoverable, fullWidth, className, ...props }: TableProps) => JSX.Element;
export default Table;
