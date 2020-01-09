import { BaseAndHTMLProps } from "../BaseComponent/constants";

export type ButtonElementType = HTMLButtonElement;

export interface ButtonCustomProps {
    value       : string;
    size      ? : "tiny" | "small" | "medium" | "large" | "huge";
    shape     ? : "rounded" | "curved";
    shadow    ? : "mild" | "soft" | "hard";
    border    ? : string;
    isLoading ? : boolean;
    hasDelete ? : boolean;
};

export type ButtonProps = BaseAndHTMLProps<ButtonElementType> & ButtonCustomProps;
