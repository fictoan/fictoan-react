'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var tslib_1 = require('tslib');

const BaseComponent = (_a) => {
    var { Element = "div", baseClassName, className } = _a, props = tslib_1.__rest(_a, ["Element", "baseClassName", "className"]);
    const classNames = [];
    if (baseClassName) {
        classNames.push(baseClassName);
    }
    if (className) {
        classNames.push(className);
    }
    return React__default.createElement(Element, Object.assign({}, props, { className: classNames.join(" ") }));
};

const Row = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "row" }, props)));

const Portion = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "portion" }, props)));

const Card = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-card" }, props)));

class Header extends React__default.PureComponent {
    render() {
        return (React__default.createElement(Row, { className: "docs-header bg-white shadow-mild vertically-centre-items" },
            React__default.createElement(Portion, { className: "whole horizontal vertically-centre-items" },
                React__default.createElement("div", { className: "menu-toggle", onClick: this.props.onMenuBtnClick },
                    React__default.createElement("h6", { className: "weight-400" }, "\u2014"),
                    React__default.createElement("h6", { className: "weight-400" }, "\u2013")))));
    }
}

const SidebarItemIcon = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-icon" }, props)));

const SidebarItemText = (_a) => {
    var { linkText } = _a, props = tslib_1.__rest(_a, ["linkText"]);
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "p", baseClassName: "sidebar-text" }, props), linkText));
};

const SidebarItem = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-item" }, props)));

const SidebarHeader = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-header" }, props)));

const SidebarWrapper = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-wrapper" }, props)));

const ContentWrapper = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "content-wrapper" }, props)));

const HRule = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "hr" }, props)));

const Button = (_a) => {
    var { value, className, loading } = _a, props = tslib_1.__rest(_a, ["value", "className", "loading"]);
    const classNames = [];
    if (className) {
        classNames.push(className);
    }
    if (loading) {
        classNames.push("with-loader");
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "button", baseClassName: "ff-button", className: classNames.join(" ") }, props), value));
};

class Form extends React.PureComponent {
    render() {
        return (React__default.createElement(BaseComponent, Object.assign({ Element: "form", baseClassName: "ff-form" }, this.props)));
    }
}

const FormUnit = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-form-unit" }, props)));

const FormGroup = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-input-group" }, props)));

class InputField extends React.PureComponent {
    render() {
        return (React__default.createElement(BaseComponent, Object.assign({ Element: "input", baseClassName: "ff-input" }, this.props)));
    }
}

const InputField$1 = (props) => {
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "textarea", baseClassName: "ff-input" }, props)));
};

function InputLabel(_a) {
    var { value, helpText, errorText } = _a, props = tslib_1.__rest(_a, ["value", "helpText", "errorText"]);
    return (
    // @ts-ignore
    React__default.createElement(BaseComponent, Object.assign({ Element: "label", baseClassName: "ff-input-label" }, props),
        value,
        helpText && helpText.length > 0 && (React__default.createElement("span", { className: "ff-input-help" }, helpText)),
        errorText && errorText.length > 0 && (React__default.createElement("span", { className: "ff-input-error" }, errorText))));
}

const FileUpload = (props) => (
// @ts-ignore
React__default.createElement(BaseComponent, Object.assign({ Element: "input", baseClassName: "ff-input", type: "file" }, props)));

const Table = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "table", baseClassName: "ff-table" }, props)));

function RadioButton(prop) {
    // @ts-ignore
    return (React__default.createElement("div", { className: "ff-radio", onClick: (event) => typeof prop.onSelected === "function" &&
            prop.onSelected(event, prop.id) },
        React__default.createElement("input", { type: "radio", id: prop.id, name: prop.name, checked: prop.isChecked }),
        React__default.createElement("label", { htmlFor: prop.id },
            " ",
            prop.value)));
}

class RadioGroup extends React__default.Component {
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
        return options.map(option => (React__default.createElement(RadioButton, { key: option.id, id: option.id, value: option.value, isChecked: selected === option.id, onSelected: this.onSelect })));
    }
}

exports.Button = Button;
exports.Card = Card;
exports.ContentWrapper = ContentWrapper;
exports.FileUpload = FileUpload;
exports.Form = Form;
exports.FormGroup = FormGroup;
exports.FormUnit = FormUnit;
exports.HRule = HRule;
exports.Header = Header;
exports.InputField = InputField;
exports.InputLabel = InputLabel;
exports.Portion = Portion;
exports.RadioButton = RadioButton;
exports.RadioGroup = RadioGroup;
exports.Row = Row;
exports.SidebarHeader = SidebarHeader;
exports.SidebarItem = SidebarItem;
exports.SidebarItemIcon = SidebarItemIcon;
exports.SidebarItemText = SidebarItemText;
exports.SidebarWrapper = SidebarWrapper;
exports.Table = Table;
exports.TextArea = InputField$1;
//# sourceMappingURL=index.js.map
