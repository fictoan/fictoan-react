import React, { PureComponent } from "react";

import { BaseComponent } from "../../BaseComponent";

class InputField extends PureComponent {
    render() {
        return (
            <BaseComponent
                Element="input"
                baseClassName="ff-input"
                {...props}
            />
        );
    }
}

export default InputField;
