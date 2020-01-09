import { BaseAndHTMLProps } from "../BaseComponent/constants";

export type InfoPanelElementType = HTMLDivElement;

export interface InfoPanelCustomProps {
    open  ? : boolean;
    width ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type InfoPanelProps = BaseAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;
