import React from "react";

import { Element }    from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ContentWrapperStyled }      from "./ContentWrapper.styled";
import { ContentWrapperElementType } from "./constants";

export const ContentWrapper = (props: CommonAndHTMLProps<HTMLDivElement>) => (
    <Element<ContentWrapperElementType>
        as={ContentWrapperStyled}
        {...props}
    />
);
