import { PureComponent } from "react";
import { BaseAndHTMLProps } from "../../BaseComponent/typings";
interface SwitchProps extends BaseAndHTMLProps<HTMLDivElement> {
    label?: string;
}
declare class Switch extends PureComponent<SwitchProps> {
    render(): JSX.Element;
}
export default Switch;
