import React from "react";

import { BaseComponent }    from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

import { ContentWrapperStyled }      from "./ContentWrapper.styled";
import { ContentWrapperElementType } from "./constants";

export const ContentWrapper = (props: BaseAndHTMLProps<HTMLDivElement>) => (
    <BaseComponent<ContentWrapperElementType>
        Element={ContentWrapperStyled}
        {...props}
    />
);
