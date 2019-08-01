import React, { PureComponent } from "react";

import { BaseComponent } from "../BaseComponent";

class Form extends PureComponent {
    render() {
        return (
            <BaseComponent
                Element="form"
                baseClassName="ff-form"
                {...this.props}
            />
        );
    }
}

export default Form;
