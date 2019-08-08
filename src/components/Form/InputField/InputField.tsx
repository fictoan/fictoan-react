import React, { PureComponent, HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent";

class InputField extends PureComponent<HTMLProps<HTMLInputElement>> {
    render() {
        return (
            <BaseComponent<HTMLProps<HTMLInputElement>, HTMLInputElement>
                Element="input"
                baseClassName="ff-input"
                {...this.props}
            />
        );
    }
}

export default InputField;
