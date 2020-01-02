import { BaseAndHTMLProps } from "../BaseComponent/typings";

export type PortionElementType = HTMLDivElement;

export interface PortionCustomProps {
    desktopSpan ? : string;
    tabPTSpan   ? : string;
    tabLSSpan   ? : string;
    mobileSpan  ? : string;
}

export type PortionProps = BaseAndHTMLProps<PortionElementType> & PortionCustomProps;