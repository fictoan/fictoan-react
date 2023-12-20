import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./form-item.css";

export type FormItemElementType = HTMLDivElement;
export type FormItemProps = CommonAndHTMLProps<FormItemElementType>;

export const FormItem = React.forwardRef(({ ...props }: FormItemProps, ref: React.Ref<FormItemElementType>) => {
    return <Element<FormItemElementType> as="div" data-form-item ref={ref} {...props} />;
});
