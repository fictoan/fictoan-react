import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type  CardElementType = HTMLDivElement;

export interface CardCustomProps {
    shape?  : "rounded" | "curved";
    shadow? : "mild" | "soft" | "hard";
}

export type CardProps = BaseAndHTMLProps<CardElementType> & CardCustomProps;
