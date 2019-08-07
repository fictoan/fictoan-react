import React, { HTMLProps } from "react";
import { BaseComponent } from "../BaseComponent";

const ContentWrapper = (props: HTMLProps<HTMLDivElement>) => (
    <BaseComponent<HTMLProps<HTMLDivElement>, HTMLDivElement>
        Element="div"
        baseClassName="content-wrapper"
        {...props}
    />
);

export default ContentWrapper;
