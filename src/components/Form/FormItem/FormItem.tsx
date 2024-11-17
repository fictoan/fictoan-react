// FRAMEWORK ===========================================================================================================
import React from "react";
// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
// STYLES ==============================================================================================================
import "./form-item.css";
// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";
export type FormItemElementType = HTMLDivElement;
export type FormItemProps = CommonAndHTMLProps<FormItemElementType>;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const FormItem = React.forwardRef(({ ...props }: FormItemProps, ref: React.Ref<FormItemElementType>) => {
    return (
        <Element<FormItemElementType>
            as="div"
            data-form-item
            ref={ref}
            role="group"
            {...props}
        />
    );
});
