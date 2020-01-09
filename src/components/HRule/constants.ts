import { CommonAndHTMLProps } from "../Element/constants";

export type HRElementType = "HTMLHRElement";

export interface HRCustomProps {
    sideMargin ? : "tiny" | "small" | "medium" | "large" | "huge";
    slim       ? : boolean;
    thick      ? : boolean;
}

export type HRProps = CommonAndHTMLProps<HRElementType> & HRCustomProps;
