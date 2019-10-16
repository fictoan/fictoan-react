import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface SidebarWrapperProps extends BaseAndHTMLProps<HTMLDivElement> {
    collapsed?: boolean;
}
declare const SidebarWrapper: ({ collapsed, className, ...props }: SidebarWrapperProps) => JSX.Element;
export default SidebarWrapper;
