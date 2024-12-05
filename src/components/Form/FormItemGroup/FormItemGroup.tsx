// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";

// STYLES ==============================================================================================================
import "./form-item-group.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

// prettier-ignore
export interface FormItemGroupCustomProps {
    isJoint      ? : boolean;
    retainLayout ? : boolean;
    legend       ? : string;
}

export type FormItemGroupElementType = HTMLDivElement;
export type FormItemGroupProps = Omit<CommonAndHTMLProps<FormItemGroupElementType>, keyof FormItemGroupCustomProps> &
    FormItemGroupCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const FormItemGroup = React.forwardRef(
    (
        {
            isJoint,
            retainLayout,
            children,
            legend,
            id,
            ...props
        }: FormItemGroupProps,
        ref: React.Ref<FormItemGroupElementType>
    ) => {
        const groupId = id || `form-group-${Math.random().toString(36).substring(2, 9)}`;
        let classNames = [];

        if (isJoint) {
            classNames.push("is-joint");
        }

        if (retainLayout) {
            classNames.push("retain-layout");
        }

        return (
            <Element<FormItemGroupElementType>
                as="div"
                data-form-item-group
                ref={ref}
                id={groupId}
                role="group"
                aria-label={legend}
                classNames={classNames}
                {...props}
            >
                {children}
            </Element>
        );
    }
);
