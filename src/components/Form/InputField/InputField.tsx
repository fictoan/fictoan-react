import React, { PureComponent } from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { InputFieldProps } from "./typings";

class InputField extends PureComponent<InputFieldProps> {
    render() {
        return (
            <BaseInputComponent<HTMLInputElement>
                Element="input"
                baseClassName="ff-input"
                {...this.props}
            />
        );
    }
}

export default InputField;
