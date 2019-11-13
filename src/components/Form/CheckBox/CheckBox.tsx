import React, { PureComponent } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseAndHTMLProps } from "../../BaseComponent/typings";

interface CheckBoxProps extends BaseAndHTMLProps<HTMLDivElement> {
    label?: string
}

class CheckBox extends PureComponent<CheckBoxProps> {
    render() {
         return (
            <BaseComponent<HTMLDivElement>
                Element="div"
                baseClassName="ff-checkbox"
            >
                <BaseInputComponent
                    Element="input"
                    type="checkbox"
                    {...this.props}
                />
            </BaseComponent>
        )
    }
}

export default CheckBox;
