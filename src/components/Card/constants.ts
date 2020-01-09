import { BaseAndHTMLProps } from "../BaseComponent/constants";

export type CardElementType = HTMLDivElement;

export interface CardCustomProps {
    shape  ? : "rounded" | "curved";
    shadow ? : "mild" | "soft" | "hard";
}

export type CardProps = BaseAndHTMLProps<CardElementType> & CardCustomProps;
