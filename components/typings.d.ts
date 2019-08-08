import { ReactElement } from "react";
export interface PropType {
    className?: string;
    children?: ReactElement[] | ReactElement;
    baseClassName?: string;
}
export declare type Props = PropType & ReactElement;
