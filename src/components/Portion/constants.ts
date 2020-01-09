import { CommonAndHTMLProps } from "../Element/constants";

export type PortionElementType = HTMLDivElement;

export interface PortionCustomProps {
    desktopSpan ? : string;
    tabPTSpan   ? : string;
    tabLSSpan   ? : string;
    mobileSpan  ? : string;
}

export type PortionProps = CommonAndHTMLProps<PortionElementType> & PortionCustomProps;
