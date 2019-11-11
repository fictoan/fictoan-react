import React, { PureComponent, HTMLProps } from "react";

import InputField from "../InputField/InputField";
import { InputFieldProps } from "../InputField/typings";

import InputLabel from "../InputLabel/InputLabel";


interface LabelProps extends HTMLProps<HTMLLabelElement> {
    label?: string;
    helpText?: string;
    errorText?: string;
}

type Props = InputFieldProps & LabelProps;

class InputWrapper extends PureComponent<Props> {
    render() {
        const {
            label,
            helpText,
            errorText,
            ref,
            ...inputProps
        } = this.props;

        return (
            <>
                <InputField {...inputProps} />
                {label && (
                    <InputLabel
                        value={label}
                        helpText={helpText}
                        errorText={errorText}
                    />
                )}
            </>
        );
    }
}

export default InputWrapper;
