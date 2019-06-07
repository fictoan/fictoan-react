import React from "react";

function RadioButton(prop) {
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
