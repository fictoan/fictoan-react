import { CommonAndHTMLProps } from "../Element/constants";

export type ButtonElementType = HTMLButtonElement;

export interface ButtonCustomProps {
    size      ? : "tiny" | "small" | "medium" | "large" | "huge";
    shape     ? : "rounded" | "curved";
    shadow    ? : "mild" | "soft" | "hard";
    border    ? : string;
    isLoading ? : boolean;
    hasDelete ? : boolean;
};

export type ButtonProps = CommonAndHTMLProps<ButtonElementType> & ButtonCustomProps;
