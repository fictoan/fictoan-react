import { CommonAndHTMLProps } from "../Element/constants";

export type InfoPanelElementType = HTMLDivElement;

export interface InfoPanelCustomProps {
    isOpen?: boolean;
    width?: "tiny" | "small" | "medium" | "large" | "huge";
}

export type InfoPanelProps = CommonAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;
