import React, { HTMLProps, PureComponent } from "react";

import { BaseComponent } from "../BaseComponent";

class Form extends PureComponent<HTMLProps<HTMLFormElement>> {
    render() {
        return (
            <BaseComponent<HTMLProps<HTMLFormElement>, HTMLFormElement>
                Element="form"
                baseClassName="ff-form"
                {...this.props}
            />
        );
    }
}

export default Form;
