import React from "react";
import { PropType } from "../../typings";

function RadioButton(prop: PropType & { id: string; name: string; value: string; onClick: Function, isChecked: boolean; }) {
    return (
        <div
            className="ff-radio"
            onClick={() =>
                typeof prop.onClick === "function" &&
                prop.onClick(prop.id, !prop.isChecked)
            }
        >
            <input
                type="radio"
                id={prop.id}
                name={prop.name}
                checked={prop.isChecked}
                onChange={prop.onClick.bind(this, prop.id)}
            />
            <label htmlFor={prop.id}> {prop.value}</label>
        </div>
    );
}

export default RadioButton;
