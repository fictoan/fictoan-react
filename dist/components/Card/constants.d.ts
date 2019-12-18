import { BaseAndHTMLProps } from "../BaseComponent/typings";
export declare type CardElementType = HTMLDivElement;
export interface CardCustomProps {
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard";
}
export declare type CardProps = BaseAndHTMLProps<CardElementType> & CardCustomProps;
