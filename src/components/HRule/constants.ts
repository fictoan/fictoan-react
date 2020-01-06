import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type HRElementType = "HTMLHRElement";

export interface HRCustomProps {
    sideMargin ? : "tiny" | "small" | "medium" | "large" | "huge";
    slim       ? : boolean;
    thick      ? : boolean;
}

export type HRProps = BaseAndHTMLProps<HRElementType> & HRCustomProps;