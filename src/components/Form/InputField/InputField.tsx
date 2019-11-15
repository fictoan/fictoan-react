import React, { HTMLProps, PureComponent, ReactEventHandler } from "react";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { InputFieldProps } from "./typings";

class InputField extends PureComponent<InputFieldProps> {
    render() {
        return (
            <BaseInputComponent<HTMLInputElement>
                Element="input"
                baseClassName="ff-input"
                placeholder=" "
                {...this.props}
            />
        );
    }
}

export default InputField;
