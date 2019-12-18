import { BaseAndHTMLProps } from "../../BaseComponent/typings";
interface NotificationWrapperProps extends BaseAndHTMLProps<HTMLDivElement> {
    position?: "left" | "right";
    anchor?: "top" | "bottom";
}
declare const NotificationWrapper: ({ position, anchor, className, ...props }: NotificationWrapperProps) => JSX.Element;
export default NotificationWrapper;
