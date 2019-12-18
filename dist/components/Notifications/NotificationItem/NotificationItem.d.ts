import { BaseAndHTMLProps } from "../../BaseComponent/typings";
interface NotificationProps extends Omit<BaseAndHTMLProps<HTMLDivElement>, "shape"> {
    type?: "info" | "warning" | "error" | "success";
    position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
    isDismissible?: boolean;
}
declare const NotificationItem: ({ type, position, children, isDismissible, className, ...props }: NotificationProps) => JSX.Element;
export default NotificationItem;
