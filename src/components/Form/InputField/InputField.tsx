import React, { PureComponent } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { InputFieldProps } from "./typings";
import { createClassName } from "../../../utils/classNames";

class InputField extends PureComponent<InputFieldProps> {
    render() {
        const {
            className,
            iconLeft,
            iconRight,
            ...inputProps
        } = this.props;

        const classNames = [
            className
        ]

        if (iconLeft) {
            classNames.push("with-icon-left")
        }

        if (iconRight) {
            classNames.push("with-icon-right")
        }

        return (
            <>
                <BaseComponent<HTMLInputElement>
                    Element="input"
                    baseClassName="ff-input"
                    className={createClassName(classNames)}
                    {...inputProps}
                />
                {iconLeft && <span className="icon-left">{iconLeft}</span>}
                {iconRight && <span className="icon-right">{iconRight}</span>}
            </>
        );
    }
}

export default InputField;
