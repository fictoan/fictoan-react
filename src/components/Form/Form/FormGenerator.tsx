import React, { ElementType, ReactNode } from "react";

import { Element } from "../../Element/Element";
import { ElementProps, SpacingTypes } from "../../Element/constants";

import { Row } from "../../Row/Row";
import { PortionProps, Portion } from "../../Portion/Portion";
import { InputLabel, InputLabelCustomProps } from "../InputLabel/InputLabel";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputField } from "../InputField/InputField";
import { FileUpload } from "../InputField/FileUpload";
import { Checkbox } from "../Checkbox/Checkbox";
import { Switch } from "../Checkbox/Switch";
import { RadioButton } from "../RadioButton/RadioButton";
import { RadioGroup } from "../RadioButton/RadioGroup";
import { Select } from "../Select/Select";
import { TextArea } from "../TextArea/TextArea";
import { RadioGroupOption } from "../RadioButton/constants";

// Types
export type FormFieldsType = ElementProps<HTMLInputElement> &
    ElementProps<HTMLSelectElement> &
    ElementProps<HTMLTextAreaElement> &
    InputLabelCustomProps &
    InputCommonProps;
export type FormFieldsConfigBase = PortionProps & FormFieldsType;

interface FormFieldOptionsType extends RadioGroupOption {
    id: string;
    label: string;
    value: string;
}

export interface FormFieldsConfig extends FormFieldsConfigBase {
    as: ElementType;
    options?: FormFieldOptionsType[];
}

// Supported Form elements for "as" prop in config
const FormElements: Record<string, ElementType> = {
    Checkbox: Checkbox,
    Switch: Switch,
    InputField: InputField,
    FileUpload: FileUpload,
    InputLabel: InputLabel,
    RadioButton: RadioButton,
    RadioGroup: RadioGroup,
    Select: Select,
    TextArea: TextArea,
    Empty: "div",
};

const getFormItem = (formField: Omit<FormFieldsConfig, "mobileSpan" | "tabletLandscapeSpan" | "isHorizontal" | "desktopSpan" | "tabletPortraitSpan">, onFieldsChange: React.FormEventHandler | undefined): React.ReactNode => {
    const { as: elementName, ...formFieldProps } = formField;

    return (
        <Element
            as={FormElements[elementName as keyof typeof FormElements] || InputField}
            {...formFieldProps}
            isFullWidth
            // disabled={disabledIds.includes(formFieldProps.id)}
            onChange={onFieldsChange}
        />
    );
};

export const generateFormThroughConfig = (
    fields: FormFieldsConfig[],
    onFieldsChange: React.FormEventHandler | undefined,
    spacing: SpacingTypes | undefined,
): React.ReactNode => {
    let formChildren: ReactNode[] = [];

    for (const i in fields) {
        const { desktopSpan, tabletLandscapeSpan, tabletPortraitSpan, mobileSpan, isHorizontal, ...formField } =
            fields[i];

        const portionProps = {
            desktopSpan,
            tabletLandscapeSpan,
            tabletPortraitSpan,
            mobileSpan,
            isHorizontal,
        };

        formChildren.push(
            <Portion {...portionProps} key={`fields-${i}`}>
                {getFormItem(formField, onFieldsChange)}
            </Portion>
        );
    }
    return <Row layout="grid" gutters={spacing}>{formChildren}</Row>;
};
