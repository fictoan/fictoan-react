import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface PortionProps extends BaseAndHTMLProps<HTMLDivElement> {
    desktopSpan?: string;
    tabPTSpan?: string;
    tabLSSpan?: string;
    mobileSpan?: string;
}
declare const Portion: ({ desktopSpan, mobileSpan, tabLSSpan, tabPTSpan, className, ...props }: PortionProps) => JSX.Element;
export default Portion;
