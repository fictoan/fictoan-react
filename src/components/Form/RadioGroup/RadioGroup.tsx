import React, { ChangeEvent, HTMLProps, ReactEventHandler } from "react";

import RadioButton from "./RadioButton";
{
    /***
    1. options - Takes an array of objects with properties:
        1. id - Identifier
        2. value - Text to be displayed
    2. onChange - Callback, called when radio button state changes
    3. defaultSelected - String, value to be selected by default.
Example:
<RadioGroup options={[{id:'cat',value:'cat'},{id:'dog',value:'dogs'}]} onChange={(selected)=>console.log("I changed!",selected)} />
***/
}
type RadioGroupProps = HTMLProps<HTMLInputElement> & {
    options: object[];
    onChange: () => void;
    defaultSelected: string;
};

class RadioGroup extends React.Component<
    RadioGroupProps,
    { selected: string; options: { id: string; value: string }[] }
> {
    constructor(props: RadioGroupProps) {
        super(props);
        this.state = {
            // @ts-ignore
            options: props.options || {},
            selected: props.defaultSelected || ""
        };
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(event: ChangeEvent<HTMLDivElement>, id: string) {
        this.setState({
            selected: id
        });

        this.state.selected !== id &&
            this.props.onChange &&
            // @ts-ignore
            this.props.onChange(id);
    }

    render() {
        let { options, selected } = this.state;
        return options.map(option => (
            <RadioButton
                key={option.id}
                id={option.id}
                value={option.value}
                isChecked={selected === option.id}
                onSelected={this.onSelect}
            />
        ));
    }
}

export default RadioGroup;
