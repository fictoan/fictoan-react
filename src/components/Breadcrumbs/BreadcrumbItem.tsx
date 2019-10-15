import React from "react";
import { BaseComponent } from "../BaseComponent/BaseComponent";

interface BreadcrumbItemProps {
    className?: string;
}

class BaseBreadcrumbItem extends React.PureComponent<BreadcrumbItemProps> {
    render() {
        return (
            <BaseComponent Element="div" baseClassName={`ff-breadcrumb-item`} {...this.props} />
        );
    }
}

export default BaseBreadcrumbItem;
