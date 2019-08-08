import React, { PureComponent } from 'react';
import { __rest } from 'tslib';

const BaseComponent = (_a) => {
    var { Element = "div", baseClassName, className } = _a, props = __rest(_a, ["Element", "baseClassName", "className"]);
    const classNames = [];
    if (baseClassName) {
        classNames.push(baseClassName);
    }
    if (className) {
        classNames.push(className);
    }
    return React.createElement(Element, Object.assign({}, props, { className: classNames.join(" ") }));
};

const Row = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "row" }, props)));

const Portion = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "portion" }, props)));

const Card = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-card" }, props)));

class Header extends React.PureComponent {
    render() {
        return (React.createElement(Row, { className: "docs-header bg-white shadow-mild vertically-centre-items" },
            React.createElement(Portion, { className: "whole horizontal vertically-centre-items" },
                React.createElement("div", { className: "menu-toggle", onClick: this.props.onMenuBtnClick },
                    React.createElement("h6", { className: "weight-400" }, "\u2014"),
                    React.createElement("h6", { className: "weight-400" }, "\u2013")))));
    }
}

const SidebarItemIcon = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-icon" }, props)));

const SidebarItemText = (_a) => {
    var { linkText } = _a, props = __rest(_a, ["linkText"]);
    return (React.createElement(BaseComponent, Object.assign({ Element: "p", baseClassName: "sidebar-text" }, props), linkText));
};

const SidebarItem = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-item" }, props)));

const SidebarHeader = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-header" }, props)));

const SidebarWrapper = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-wrapper" }, props)));

const ContentWrapper = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "content-wrapper" }, props)));

const HRule = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "hr" }, props)));

const Button = (_a) => {
    var { value, className, loading } = _a, props = __rest(_a, ["value", "className", "loading"]);
    const classNames = [];
    if (className) {
        classNames.push(className);
    }
    if (loading) {
        classNames.push("with-loader");
    }
    return (React.createElement(BaseComponent, Object.assign({ Element: "button", baseClassName: "ff-button", className: classNames.join(" ") }, props), value));
};

class Form extends PureComponent {
    render() {
        return (React.createElement(BaseComponent, Object.assign({ Element: "form", baseClassName: "ff-form" }, this.props)));
    }
}

const FormUnit = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-form-unit" }, props)));

const FormGroup = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-input-group" }, props)));

class InputField extends PureComponent {
    render() {
        return (React.createElement(BaseComponent, Object.assign({ Element: "input", baseClassName: "ff-input" }, this.props)));
    }
}

const InputField$1 = (props) => {
    return (React.createElement(BaseComponent, Object.assign({ Element: "textarea", baseClassName: "ff-input" }, props)));
};

function InputLabel(_a) {
    var { value, helpText, errorText } = _a, props = __rest(_a, ["value", "helpText", "errorText"]);
    return (
    // @ts-ignore
    React.createElement(BaseComponent, Object.assign({ Element: "label", baseClassName: "ff-input-label" }, props),
        value,
        helpText && helpText.length > 0 && (React.createElement("span", { className: "ff-input-help" }, helpText)),
        errorText && errorText.length > 0 && (React.createElement("span", { className: "ff-input-error" }, errorText))));
}

const FileUpload = (props) => (
// @ts-ignore
React.createElement(BaseComponent, Object.assign({ Element: "input", baseClassName: "ff-input", type: "file" }, props)));

const Table = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "table", baseClassName: "ff-table" }, props)));

function RadioButton(prop) {
    // @ts-ignore
    return (React.createElement("div", { className: "ff-radio", onClick: (event) => typeof prop.onSelected === "function" &&
            prop.onSelected(event, prop.id) },
        React.createElement("input", { type: "radio", id: prop.id, name: prop.name, checked: prop.isChecked }),
        React.createElement("label", { htmlFor: prop.id },
            " ",
            prop.value)));
}

class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // @ts-ignore
            options: props.options || {},
            selected: props.defaultSelected || ""
        };
        this.onSelect = this.onSelect.bind(this);
    }
    onSelect(event, id) {
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
        return options.map(option => (React.createElement(RadioButton, { key: option.id, id: option.id, value: option.value, isChecked: selected === option.id, onSelected: this.onSelect })));
    }
}

export { Button, Card, ContentWrapper, FileUpload, Form, FormGroup, FormUnit, HRule, Header, InputField, InputLabel, Portion, RadioButton, RadioGroup, Row, SidebarHeader, SidebarItem, SidebarItemIcon, SidebarItemText, SidebarWrapper, Table, InputField$1 as TextArea };
//# sourceMappingURL=index.es.js.map
