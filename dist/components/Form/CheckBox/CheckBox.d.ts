import { PureComponent } from "react";
import { BaseAndHTMLProps } from "../../BaseComponent/typings";
interface CheckBoxProps extends BaseAndHTMLProps<HTMLDivElement> {
    label?: string;
}
declare class CheckBox extends PureComponent<CheckBoxProps> {
    render(): JSX.Element;
}
export default CheckBox;
