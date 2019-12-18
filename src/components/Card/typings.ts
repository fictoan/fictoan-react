import { BaseAndHTMLProps } from "../BaseComponent/typings";

export interface CardCustomProps {
    shape?  : "rounded" | "curved";
    shadow? : "mild" | "soft" | "hard";
}

export type CardProps = BaseAndHTMLProps<HTMLDivElement> & CardCustomProps
