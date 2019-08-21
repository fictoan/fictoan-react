import React, { HTMLProps, PureComponent, ReactNode } from "react";
import { BaseComponent } from "../BaseComponent";


interface Breadcrumb {
    children: ReactNode;
}



class BaseBreadcrumb extends PureComponent<HTMLProps<HTMLDivElement>> {


    render(): ReactNode {
        return (
            <BaseComponent Element="div" baseClassName={`ff-breadcrumb-bar`} {...this.props} />
        );
    }
}

export default BaseBreadcrumb;
