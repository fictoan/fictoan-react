import React, { ReactNode } from "react";

import { Element } from "../../Element/Element";
import { ElementProps, SpacingTypes } from "../../Element/constants";

import { Row } from "../../Row/Row";
import { PortionProps, Portion } from "../../Portion/Portion";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";
import { InputCommonProps } from "../BaseInputComponent/constants";
import { InputField } from "../InputField/InputField";
import { FileUpload } from "../InputField/FileUpload";
import { InputLabel } from "../InputLabel/InputLabel";
import { CheckBox } from "../CheckBox/CheckBox";
import { Switch } from "../CheckBox/Switch";
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
    as: string;
    options?: FormFieldOptionsType[];
}

// Supported Form elements for "as" prop in config
const FormElements: Record<string, ReactNode | string> = {
    CheckBox: CheckBox,
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

const getFormItem = (formField: FormFieldsType, onFieldsChange: React.FormEventHandler | null): ReactNode => {
    const { as: elementName, ...formFieldProps } = formField;

    return (
        <Element
            as={FormElements[elementName] || InputField}
            {...formFieldProps}
            isFullWidth
            // disabled={disabledIds.includes(formFieldProps.id)}
            onChange={onFieldsChange}
        ></Element>
    );
};

export const generateFormThroughConfig = (
    fields: FormFieldsConfig[],
    onFieldsChange: React.FormEventHandler | null,
    spacing: SpacingTypes
): ReactNode => {
    let formChildren: ReactNode[] = [];

    for (const i in fields) {
        const { desktopSpan, tabletLandscape, tabletPortraitSpan, mobileSpan, isHorizontal, ...formField } = fields[i];

        const portionPorps = {
            desktopSpan,
            tabletLandscape,
            tabletPortraitSpan,
            mobileSpan,
            isHorizontal,
        };

        formChildren.push(<Portion {...portionPorps} key={`fields-${i}`}>{getFormItem(formField, onFieldsChange)}</Portion>);
    }
    return <Row gutters={spacing}>{formChildren}</Row>;
};
