import React, { PureComponent } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { InputFieldProps } from "./typings";

class InputField extends PureComponent<InputFieldProps> {
    render() {
        const { iconLeft, iconRight, ...inputProps } = this.props;
        return (
            <>
                <BaseComponent<HTMLInputElement>
                    Element="input"
                    baseClassName="ff-input"
                    {...inputProps}
                />
                {iconLeft && <span className="icon-left">{iconLeft}</span>}
                {iconRight && <span className="icon-right">{iconRight}</span>}
            </>
        );
    }
}

export default InputField;
