import React, { PureComponent } from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { CommonAndHTMLProps } from "../../Element/constants";

interface SwitchProps extends CommonAndHTMLProps<HTMLDivElement> {
    label?: string
}

class Switch extends PureComponent<SwitchProps> {
    render() {
        return (
            <Element<HTMLDivElement>
                as="div"
                baseClassName="ff-switch"
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

export default Switch;
