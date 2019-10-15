import React, { HTMLProps } from "react";
import { BaseComponent } from "../BaseComponent/BaseComponent";

const ContentWrapper = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLDivElement>
        Element="div"
        baseClassName="content-wrapper"
        {...props}
    />
);

export default ContentWrapper;
