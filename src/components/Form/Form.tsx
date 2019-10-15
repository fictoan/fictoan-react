import React, { HTMLProps, PureComponent } from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";

class Form extends PureComponent<HTMLProps<HTMLFormElement>> {
    render() {
        return (
            <BaseComponent<HTMLFormElement>
                Element="form"
                baseClassName="ff-form"
                {...this.props}
            />
        );
    }
}

export default Form;
