import React, { PureComponent } from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { CommonAndHTMLProps } from "../../Element/constants";

interface CheckBoxProps extends CommonAndHTMLProps<HTMLDivElement> {
    label?: string
}

class CheckBox extends PureComponent<CheckBoxProps> {
    render() {
         return (
            <Element<HTMLDivElement>
                as="div"
                baseClassName="ff-checkbox"
            >
                <BaseInputComponent
                    as="input"
                    type="checkbox"
                    {...this.props}
                />
            </Element>
        )
    }
}

export default CheckBox;
