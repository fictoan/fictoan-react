import React from "react";

import { Element } from "../Element/Element";

import { ContentWrapperStyled } from "./ContentWrapper.styled";
import { ContentWrapperProps, ContentWrapperElementType } from "./constants";

export const ContentWrapper = ({...props}: ContentWrapperProps) => {
    return (
        <Element<ContentWrapperElementType>
            as={ContentWrapperStyled}
            {...props}
        />
    );
}
