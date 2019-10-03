import { HTMLProps } from "react";
interface PortionProps extends Omit<HTMLProps<HTMLDivElement>, 'width'> {
    width?: {
        mobile?: string;
        tabletLandscape?: string;
        tabletPortrait?: string;
        desktop?: string;
    };
}
declare const Portion: ({ width, className, ...props }: PortionProps) => JSX.Element;
export default Portion;
