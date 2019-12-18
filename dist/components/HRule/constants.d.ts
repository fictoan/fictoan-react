import { BaseAndHTMLProps } from "../BaseComponent/typings";
export declare type HRElementType = "HTMLHRElement";
export interface HRCustomProps {
    sideMargin?: "tiny" | "small" | "medium" | "large" | "huge";
    slim?: boolean;
    thick?: boolean;
}
export declare type HRProps = BaseAndHTMLProps<HRElementType> & HRCustomProps;
