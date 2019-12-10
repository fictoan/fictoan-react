import React from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

const BreadcrumbWrapper = (props: BaseAndHTMLProps<HTMLDivElement>) => {
    return (
        <BaseComponent
            Element="nav"
            baseClassName={`ff-breadcrumb-bar`}
            {...props}
        />
    );
}

export default BreadcrumbWrapper;