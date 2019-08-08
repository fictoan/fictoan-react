import { HTMLProps } from "react";
declare type SidebarItemTextProps = HTMLProps<HTMLParagraphElement> & {
    linkText: string;
};
declare const SidebarItemText: ({ linkText, ...props }: SidebarItemTextProps) => JSX.Element;
export default SidebarItemText;
