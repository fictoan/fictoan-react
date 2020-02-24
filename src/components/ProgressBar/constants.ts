import { CommonAndHTMLProps } from "../Element/constants";

export type ProgressBarElementType = HTMLProgressElement;

export interface ProgressBarCustomProps {
    
}

export type ProgressBarProps = CommonAndHTMLProps<ProgressBarElementType> & ProgressBarCustomProps;
