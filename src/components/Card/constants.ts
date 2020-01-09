import { CommonAndHTMLProps } from "../Element/constants";

export type CardElementType = HTMLDivElement;

export interface CardCustomProps {
    shape  ? : "rounded" | "curved";
    shadow ? : "mild" | "soft" | "hard";
}

export type CardProps = CommonAndHTMLProps<CardElementType> & CardCustomProps;
