import React, { ElementType, ReactNode } from "react";

import { Element } from "../../Element/Element";
import { ElementProps, SpacingTypes } from "../../Element/constants";

import { Row } from "../../Row/Row";
import { PortionProps, Portion } from "../../Portion/Portion";
import { InputLabel, InputLabelCustomProps } from "../InputLabel/InputLabel";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputField } from "../InputField/InputField";
import { FileUpload } from "../FileUpload/FileUpload";
import { Checkbox } from "../Checkbox/Checkbox";
import { Switch } from "../Checkbox/Switch";
import { RadioButton } from "../RadioButton/RadioButton";
import { RadioGroup } from "../RadioButton/RadioGroup";
import { Select } from "../Select/Select";
import { TextArea } from "../TextArea/TextArea";
import { RadioGroupOptionProps } from "../RadioButton/constants";

// Types
export type FormFieldsType = ElementProps<HTMLInputElement> &
    ElementProps<HTMLSelectElement> &
    ElementProps<HTMLTextAreaElement> &
    InputLabelCustomProps &
    InputCommonProps;

export type FormFieldsConfigBase = PortionProps & FormFieldsType;

interface FormFieldOptionsType extends RadioGroupOptionProps {
    id: string;
    label: string;
    value: string;
}

export interface FormFieldsConfig extends FormFieldsConfigBase {
    as: ElementType;
    options?: FormFieldOptionsType[];
    name: string;  // Making name required for field identification
}

// Supported Form elements for "as" prop in config
const FormElements: Record<string, ElementType> = {
    Checkbox,
    Switch,
    InputField,
    FileUpload,
    InputLabel,
    RadioButton,
    RadioGroup,
    Select,
    TextArea,
    Empty: "div",
};

const getFormItem = (
    formField: Omit<FormFieldsConfig, "mobileSpan" | "tabletLandscapeSpan" | "isHorizontal" | "desktopSpan" | "tabletPortraitSpan">,
    onFieldChange: (fieldName: string, value: any) => void
): React.ReactNode => {
    const { as: elementName, name, ...formFieldProps } = formField;

    // Create an onChange handler specific to this field
    const handleChange = (value: any) => {
        onFieldChange(name, value);
    };

    const ElementComponent = FormElements[elementName as keyof typeof FormElements] || InputField;

    return (
        <Element
            as={ElementComponent}
            {...formFieldProps}
            name={name}
            isFullWidth
            onChange={handleChange}
        />
    );
};

export const generateFormThroughConfig = (
    fields: FormFieldsConfig[],
    onFieldChange: (fieldName: string, value: any) => void,
    spacing: SpacingTypes | undefined,
): React.ReactNode => {
    const formChildren: ReactNode[] = fields.map((field, index) => {
        const {
                  desktopSpan,
                  tabletLandscapeSpan,
                  tabletPortraitSpan,
                  mobileSpan,
                  isHorizontal,
                  ...formField
              } = field;

        const portionProps = {
            desktopSpan,
            tabletLandscapeSpan,
            tabletPortraitSpan,
            mobileSpan,
            isHorizontal,
        };

        return (
            <Portion {...portionProps} key={`${field.name}-${index}`}>
                {getFormItem(formField, onFieldChange)}
            </Portion>
        );
    });

    return <Row gutters={spacing}>{formChildren}</Row>;
};
