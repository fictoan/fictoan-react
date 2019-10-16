import React, { PureComponent } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

const createClassName = (classNames) => {
    return classNames.filter((item) => !!item).join(" ");
};

const BaseComponent = (_a) => {
    var { Element = "div", baseClassName, className, bgColor, textColor } = _a, props = __rest(_a, ["Element", "baseClassName", "className", "bgColor", "textColor"]);
    return (React.createElement(Element, Object.assign({}, props, { className: createClassName([baseClassName, className, bgColor && `bg-${bgColor}`, textColor && `text-${textColor}`]) })));
};

const Row = (_a) => {
    var { contentPadding, className, gutters } = _a, props = __rest(_a, ["contentPadding", "className", "gutters"]);
    const classNames = [
        className
    ];
    if (contentPadding) {
        classNames.push(`content-padding-${contentPadding}`);
    }
    if (gutters) {
        classNames.push(`${gutters}-gutters`);
    }
    else {
        classNames.push("medium-gutters");
    }
    return (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "row", className: createClassName(classNames) }, props)));
};

const Portion = (_a) => {
    var { width, className } = _a, props = __rest(_a, ["width", "className"]);
    const classNames = [className];
    if (width) {
        if (width.mobile) {
            classNames.push(`${width.mobile}-on-mobile`);
        }
        if (width.tabletLandscape) {
            classNames.push(`${width.tabletLandscape}-on-tab-ls`);
        }
        if (width.tabletPortrait) {
            classNames.push(`${width.tabletPortrait}-on-tab-pt`);
        }
        if (width.desktop) {
            classNames.push(width.desktop);
        }
    }
    else {
        classNames.push("whole");
    }
    return React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "portion", className: createClassName(classNames) }, props));
};

const Card = (_a) => {
    var { shadow, shape, className } = _a, props = __rest(_a, ["shadow", "shape", "className"]);
    const classNames = [
        className
    ];
    if (shape) {
        classNames.push(`shape-${shape}`);
    }
    if (shadow) {
        classNames.push(`shadow-${shadow}`);
    }
    return (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-card", className: createClassName(classNames) }, props)));
};

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

const SublinkGroup = (props) => (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sublink-group" }, props)));

const SidebarWrapper = (_a) => {
    var { collapsed, className } = _a, props = __rest(_a, ["collapsed", "className"]);
    const classNames = [
        className
    ];
    if (collapsed) {
        classNames.push("collapsed");
    }
    return (React.createElement(BaseComponent, Object.assign({ Element: "div", className: createClassName(classNames), baseClassName: "sidebar-wrapper" }, props)));
};

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

const TextArea = (props) => {
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
    return (React.createElement("div", { className: "ff-radio", 
        // @ts-ignore
        onClick: (event) => typeof prop.onSelected === "function" &&
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

class BaseBreadcrumb extends PureComponent {
    render() {
        return (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: `ff-breadcrumb-bar` }, this.props)));
    }
}

class BaseBreadcrumbItem extends React.PureComponent {
    render() {
        return (React.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: `ff-breadcrumb-item` }, this.props)));
    }
}

export { BaseBreadcrumb, BaseBreadcrumbItem, Button, Card, ContentWrapper, FileUpload, Form, FormGroup, FormUnit, HRule, Header, InputField, InputLabel, Portion, RadioButton, RadioGroup, Row, SidebarHeader, SidebarItem, SidebarItemIcon, SidebarItemText, SidebarWrapper, SublinkGroup, Table, TextArea };
//# sourceMappingURL=index.es.js.map
