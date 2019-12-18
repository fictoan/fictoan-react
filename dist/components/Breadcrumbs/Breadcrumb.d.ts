import { HTMLProps } from "react";
interface BreadcrumbProps extends HTMLProps<HTMLLIElement> {
    className?: string;
    text?: string;
}
declare const Breadcrumb: ({ text, className, ...props }: BreadcrumbProps) => JSX.Element;
export default Breadcrumb;
