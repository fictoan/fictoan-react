import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { ContentWrapperStyled } from "./ContentWrapper.styled";

export type ContentWrapperElementType = HTMLDivElement;
export type ContentWrapperProps = CommonAndHTMLProps<ContentWrapperElementType>;

export const ContentWrapper = React.forwardRef(
    ({ ...props }: ContentWrapperProps, ref: React.Ref<ContentWrapperElementType>) => {
        return <Element<ContentWrapperElementType> as={ContentWrapperStyled} ref={ref} {...props} />;
    }
);
