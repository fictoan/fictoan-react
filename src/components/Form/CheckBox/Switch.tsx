import React, { PureComponent } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseAndHTMLProps } from "../../BaseComponent/typings";

interface SwitchProps extends BaseAndHTMLProps<HTMLDivElement> {
    label?: string
}

class Switch extends PureComponent<SwitchProps> {
    render() {
        return (
            <BaseComponent<HTMLDivElement>
                Element="div"
                baseClassName="ff-switch"
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

export default Switch;
