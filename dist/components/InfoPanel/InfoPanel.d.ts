import { BaseAndHTMLProps } from "../BaseComponent/typings";
interface InfoPanelProps extends BaseAndHTMLProps<HTMLDivElement> {
    open?: boolean;
    width?: "tiny" | "small" | "medium" | "large" | "huge";
}
declare const InfoPanel: ({ open, width, className, ...props }: InfoPanelProps) => JSX.Element;
export default InfoPanel;
