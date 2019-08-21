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
    return (
        <div
            className="ff-radio"
            // @ts-ignore
            onClick={(event: ChangeEvent<HTMLDivElement>):void =>
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
