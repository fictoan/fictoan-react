import { BaseAndHTMLProps } from "../BaseComponent/typings";

export interface CardCustomProps {
    shape?: "rounded" | "curved";
    shadow?: "mild" | "soft" | "hard" | "heavy";
}

export type CardProps = BaseAndHTMLProps<HTMLDivElement> & CardCustomProps
