import React, { HTMLProps } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { createClassName } from "../../../utils/classNames";

type SelectProps = HTMLProps<HTMLSelectElement>;

interface Props extends SelectProps {
    options: HTMLProps<HTMLOptionElement>[];
    fullWidth?: boolean;
}

const Option = ({ name, ...props }: HTMLProps<HTMLOptionElement>) => {
    return <option {...props}>{name}</option>;
};

const Select = ({ fullWidth, className, options, ...props }: Props) => {
    return (
        <BaseComponent<HTMLDivElement>
            Element="div"
            fullWidth={fullWidth}
            className={className}
            baseClassName="ff-select"
        >
            <select {...props}>
                {options.map((option, i) => {
                    return <Option key={i} {...option} />;
                })}
            </select>
        </BaseComponent>
    );
};

export default Select;
