import { HTMLProps, PureComponent, ReactNode } from "react";
interface Breadcrumb {
    children: ReactNode;
}
declare class Breadcrumb extends PureComponent<HTMLProps<HTMLDivElement>> {
    render(): ReactNode;
}
export default Breadcrumb;
