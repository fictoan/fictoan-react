import { CommonAndHTMLProps } from "../Element/constants";

export type RowElementType = HTMLDivElement;

export interface RowCustomProps {
    sidePadding          ? : "tiny" | "small" | "medium" | "large" | "huge";
    gutters              ? : "none" | "tiny" | "small" | "medium" | "large" | "huge";
    retainLayoutOnTabLS  ? : boolean;
    retainLayoutOnTabPT  ? : boolean;
    retainLayoutOnMobile ? : boolean;
    retainLayoutAlways   ? : boolean;
}

export type RowProps = CommonAndHTMLProps<RowElementType> & RowCustomProps;
