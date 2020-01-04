import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type InfoPanelElementType = HTMLDivElement;

export interface InfoPanelCustomProps {
    open  ? : boolean;
    width ? : "tiny" | "small" | "medium" | "large" | "huge";
}

export type InfoPanelProps = BaseAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;
