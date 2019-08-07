import React, { ChangeEvent, HTMLProps } from "react";

function RadioButton(
    prop: HTMLProps<HTMLInputElement> & {
        id: string;
        value: string;
        onSelected: (
            event: React.ChangeEvent<HTMLDivElement>,
            id: string
        ) => void;
        isChecked: boolean;
    }
) {
    // @ts-ignore
    return (
        <div
            className="ff-radio"
            onClick={(event: ChangeEvent<HTMLDivElement>) =>
                typeof prop.onSelected === "function" &&
                prop.onSelected(event, prop.id)
            }
        >
            <input
                type="radio"
                id={prop.id}
                name={prop.name}
                checked={prop.isChecked}
            />
            <label htmlFor={prop.id}> {prop.value}</label>
        </div>
    );
}

export default RadioButton;
