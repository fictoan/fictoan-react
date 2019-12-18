'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

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
    var { Element, baseClassName, className, size, fullWidth, fullHeight, bgColor, textColor, hideOnMobile, showOnlyOnMobile, hideOnTabPT, showOnlyOnTabPT, hideOnTabLS, showOnlyOnTabLS, hideOnDesktop, showOnlyOnDesktop, marginTop, marginRight, marginBottom, marginLeft, margin, paddingTop, paddingRight, paddingBottom, paddingLeft, padding } = _a, props = __rest(_a, ["Element", "baseClassName", "className", "size", "fullWidth", "fullHeight", "bgColor", "textColor", "hideOnMobile", "showOnlyOnMobile", "hideOnTabPT", "showOnlyOnTabPT", "hideOnTabLS", "showOnlyOnTabLS", "hideOnDesktop", "showOnlyOnDesktop", "marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding"]);
    return (React__default.createElement(Element, Object.assign({}, props, { className: createClassName([
            baseClassName,
            className,
            size && `size-${size}`,
            fullWidth && "full-width",
            fullHeight && "full-height",
            bgColor && `bg-${bgColor}`,
            textColor && `text-${textColor}`,
            hideOnMobile && "hide-on-mobile",
            showOnlyOnMobile && "show-only-on-mobile",
            showOnlyOnTabPT && "hide-on-tab-pt",
            showOnlyOnTabPT && "show-only-on-tab-pt",
            showOnlyOnTabLS && "hide-on-tab-ls",
            showOnlyOnTabLS && "show-only-on-tab-ls",
            hideOnDesktop && "hide-on-desktop",
            showOnlyOnDesktop && "show-only-on-desktop",
            marginTop && `margin-top-${marginTop}`,
            marginRight && `margin-right-${marginRight}`,
            marginBottom && `margin-bottom-${marginBottom}`,
            marginLeft && `margin-left-${marginLeft}`,
            margin && `margin-all-${margin}`,
            paddingTop && `padding-top-${paddingTop}`,
            paddingRight && `padding-right-${paddingRight}`,
            paddingBottom && `padding-bottom-${paddingBottom}`,
            paddingLeft && `padding-left-${paddingLeft}`,
            padding && `padding-all-${padding}`,
        ]) })));
};

const Row = (_a) => {
    var { sidePadding, className, gutters, retainLayoutOnTabLS, retainLayoutOnTabPT, retainLayoutOnMobile, retainLayoutAlways } = _a, props = __rest(_a, ["sidePadding", "className", "gutters", "retainLayoutOnTabLS", "retainLayoutOnTabPT", "retainLayoutOnMobile", "retainLayoutAlways"]);
    const classNames = [
        className
    ];
    if (sidePadding) {
        classNames.push(`side-padding-${sidePadding}`);
    }
    if (["tiny", "small", "large", "huge"].includes(gutters)) {
        classNames.push(`${gutters}-gutters`);
    }
    else if (gutters == "none") {
        classNames.push("no-gutters");
    }
    else {
        classNames.push("medium-gutters");
    }
    if (retainLayoutOnTabLS) {
        classNames.push("retain-layout-on-tab-ls");
    }
    if (retainLayoutOnTabPT) {
        classNames.push("retain-layout-on-tab-pt");
    }
    if (retainLayoutOnMobile) {
        classNames.push("retain-layout-on-mobile");
    }
    if (retainLayoutAlways) {
        classNames.push("retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile");
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "row", className: createClassName(classNames) }, props)));
};

const Portion = (_a) => {
    var { desktopSpan, mobileSpan, tabLSSpan, tabPTSpan, className } = _a, props = __rest(_a, ["desktopSpan", "mobileSpan", "tabLSSpan", "tabPTSpan", "className"]);
    const classNames = [className];
    if (desktopSpan || tabLSSpan || tabPTSpan || mobileSpan) {
        if (desktopSpan) {
            classNames.push(`${desktopSpan}`);
        }
        if (tabLSSpan) {
            classNames.push(`${tabLSSpan}-on-tab-ls`);
        }
        if (tabPTSpan) {
            classNames.push(`${tabPTSpan}-on-tab-pt`);
        }
        if (mobileSpan) {
            classNames.push(`${mobileSpan}-on-mobile`);
        }
    }
    else {
        classNames.push("whole");
    }
    return React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "portion", className: createClassName(classNames) }, props));
};

const Heading = (_a) => {
    var { type, weight, className } = _a, props = __rest(_a, ["type", "weight", "className"]);
    const classNames = [className];
    if (weight) {
        classNames.push(`weight-${weight}`);
    }
    return React__default.createElement(BaseComponent, Object.assign({ Element: type, className: createClassName(classNames) }, props));
};

const Text = (_a) => {
    var { weight, size, className } = _a, props = __rest(_a, ["weight", "size", "className"]);
    const classNames = [className];
    if (weight) {
        classNames.push(`weight-${weight}`);
    }
    if (size) {
        classNames.push(`text-${size}`);
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "p", className: createClassName(classNames) }, props)));
};

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
    var { linkText } = _a, props = __rest(_a, ["linkText"]);
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "p", baseClassName: "sidebar-text" }, props), linkText));
};

const SidebarItem = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-item" }, props)));

const SidebarHeader = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sidebar-header" }, props)));

const SublinkGroup = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "sublink-group" }, props)));

const SidebarWrapper = (_a) => {
    var { collapsed, className } = _a, props = __rest(_a, ["collapsed", "className"]);
    const classNames = [
        className
    ];
    if (collapsed) {
        classNames.push("collapsed");
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "div", className: createClassName(classNames), baseClassName: "sidebar-wrapper" }, props)));
};

const ContentWrapper = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "content-wrapper" }, props)));

const HRStyled = styled.hr `
    border           : 0;
    height           : 1px;
    margin           : 4vmax auto;
    width            : 100%;
    background-color : $colorSlate-20;

    &.thick { height : 4px; }
    &.slim  { height : 2px; }

    &.side-margin-tiny   { width: calc(100% - 8vw); }
    &.side-margin-small  { width: calc(100% - 16vw); }
    &.side-margin-medium { width: calc(100% - 24vw); }
    &.side-margin-large  { width: calc(100% - 36vw); }
    &.side-margin-huge   { width: calc(100% - 48vw); }

    @media all and (max-width : 600px) {
        hr[class*="side-margin-"] {
            width: calc(100% - 12vw);
        }
    }
`;

const HRule = (_a) => {
    var { sideMargin, className, thick, slim } = _a, props = __rest(_a, ["sideMargin", "className", "thick", "slim"]);
    const classNames = [
        className
    ];
    if (sideMargin) {
        classNames.push(`side-margin-${sideMargin}`);
    }
    if (thick) {
        classNames.push("thick");
    }
    if (slim) {
        classNames.push("slim");
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: HRStyled, className: createClassName(classNames) }, props)));
};

const Button = (_a) => {
    var { value, size, shape, shadow, border, className, isLoading, hasDelete } = _a, props = __rest(_a, ["value", "size", "shape", "shadow", "border", "className", "isLoading", "hasDelete"]);
    const classNames = [];
    if (className) {
        classNames.push(className);
    }
    if (size) {
        classNames.push(`size-${size}`);
    }
    if (shape) {
        classNames.push(`shape-${shape}`);
    }
    if (shadow) {
        classNames.push(`shadow-${shadow}`);
    }
    if (border) {
        classNames.push(`border-${border}`);
    }
    if (isLoading) {
        classNames.push("with-loader");
    }
    if (hasDelete) {
        classNames.push("with-delete");
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "button", baseClassName: "ff-button", className: createClassName(classNames) }, props), value));
};

class Form extends React.PureComponent {
    render() {
        return (React__default.createElement(BaseComponent, Object.assign({ Element: "form", baseClassName: "ff-form" }, this.props)));
    }
}

const FormUnit = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-form-unit" }, props)));

const FormGroup = (props) => (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-input-group" }, props)));

function InputLabel(_a) {
    var { label, helpText, errorText } = _a, props = __rest(_a, ["label", "helpText", "errorText"]);
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "label", baseClassName: "ff-input-label" }, props),
        label,
        helpText && helpText.length > 0 && (React__default.createElement("span", { className: "ff-input-help" }, helpText)),
        errorText && errorText.length > 0 && (React__default.createElement("span", { className: "ff-input-error" }, errorText))));
}

const BaseInputComponent = (_a) => {
    var { Element, baseClassName, className, label, helpText, errorText, iconLeft, iconRight, validateThis } = _a, inputProps = __rest(_a, ["Element", "baseClassName", "className", "label", "helpText", "errorText", "iconLeft", "iconRight", "validateThis"]);
    const classNames = [className];
    if (iconLeft) {
        classNames.push("with-icon-left");
    }
    if (iconRight) {
        classNames.push("with-icon-right");
    }
    if (validateThis) {
        classNames.push("validate-this");
    }
    return (React__default.createElement(React__default.Fragment, null,
        React__default.createElement(BaseComponent, Object.assign({ Element: Element, baseClassName: baseClassName, className: createClassName(classNames) }, inputProps)),
        iconLeft && React__default.createElement("span", { className: "icon-left" }, iconLeft),
        iconRight && React__default.createElement("span", { className: "icon-right" }, iconRight),
        label && (React__default.createElement(InputLabel, { label: label, helpText: helpText, errorText: errorText, htmlFor: inputProps.id }))));
};

class InputField extends React.PureComponent {
    render() {
        return (React__default.createElement(BaseInputComponent, Object.assign({ Element: "input", baseClassName: "ff-input", placeholder: " " }, this.props)));
    }
}

const TextArea = (props) => {
    return (React__default.createElement(BaseInputComponent, Object.assign({ Element: "textarea", baseClassName: "ff-input" }, props)));
};

const Option = (_a) => {
    var { name } = _a, props = __rest(_a, ["name"]);
    return React__default.createElement("option", Object.assign({}, props), name);
};
const Select = (_a) => {
    var { fullWidth, className, options } = _a, props = __rest(_a, ["fullWidth", "className", "options"]);
    return (React__default.createElement(BaseComponent, { Element: "div", fullWidth: fullWidth, className: className, baseClassName: "ff-select" },
        React__default.createElement("select", Object.assign({}, props), options.map((option, i) => {
            return React__default.createElement(Option, Object.assign({ key: i }, option));
        }))));
};

const FileUpload = (props) => (
// @ts-ignore
React__default.createElement(BaseComponent, Object.assign({ Element: "input", baseClassName: "ff-input", type: "file" }, props)));

function RadioButton(prop) {
    return (React__default.createElement("div", { className: "ff-radio", 
        // @ts-ignore
        onClick: (event) => typeof prop.onSelected === "function" &&
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

class CheckBox extends React.PureComponent {
    render() {
        return (React__default.createElement(BaseComponent, { Element: "div", baseClassName: "ff-checkbox" },
            React__default.createElement(BaseInputComponent, Object.assign({ Element: "input", type: "checkbox" }, this.props))));
    }
}

class Switch extends React.PureComponent {
    render() {
        return (React__default.createElement(BaseComponent, { Element: "div", baseClassName: "ff-switch" },
            React__default.createElement(BaseInputComponent, Object.assign({ Element: "input", type: "checkbox" }, this.props))));
    }
}

const CardStyled = styled.div `
    position : relative;
    width    : 100%;
    height   : auto;
    border   : 1px solid hsla(0, 0%, 0%, 0.04);
    background-color : ${(props) => props.theme.card.bg};

    &.padding-all-tiny   { padding : 8px; }
    &.padding-all-small  { padding : 16px; }
    &.padding-all-medium { padding : 24px; }
    &.padding-all-large  { padding : 32px; }
    &.padding-all-huge   { padding : 48px; }

    @media all and (max-width : 600px) {
        &[class*="padding"] { padding : 4vmin; }
    }
`;

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
    return (React__default.createElement(BaseComponent, Object.assign({ Element: CardStyled, className: createClassName(classNames) }, props)));
};

const InfoPanel = (_a) => {
    var { open, width, className } = _a, props = __rest(_a, ["open", "width", "className"]);
    const classNames = [className];
    if (open) {
        classNames.push("open");
    }
    if (width) {
        classNames.push(width);
    }
    return React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "info-panel", className: createClassName(classNames) }, props));
};

const NotificationWrapper = (_a) => {
    var { position, anchor, className } = _a, props = __rest(_a, ["position", "anchor", "className"]);
    const classNames = [
        className
    ];
    if (position) {
        classNames.push(position);
    }
    if (anchor) {
        classNames.push(anchor);
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-notification-wrapper", className: createClassName(classNames) }, props)));
};

const NotificationItem = (_a) => {
    var { type, position, children, isDismissible, className } = _a, props = __rest(_a, ["type", "position", "children", "isDismissible", "className"]);
    const classNames = [
        className, "ff-notification"
    ];
    if (type) {
        classNames.push(type);
    }
    if (position) {
        classNames.push(position);
    }
    if (isDismissible) {
        classNames.push("dismissible");
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "div", baseClassName: "ff-notification-item", className: createClassName(classNames) }, props),
        React__default.createElement("div", { className: "notification-content" }, children),
        isDismissible && (React__default.createElement("div", { className: "dismiss-button" }))));
};

const BreadcrumbWrapper = (props) => {
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "nav", baseClassName: `ff-breadcrumb-bar` }, props)));
};

const Breadcrumb = (_a) => {
    var { text, className } = _a, props = __rest(_a, ["text", "className"]);
    const classNames = [className];
    if (text) {
        props.children = text;
    }
    return (React__default.createElement(BaseComponent, Object.assign({ Element: "li", baseClassName: `ff-breadcrumb-item`, className: createClassName(classNames) }, props)));
};

const Table = (_a) => {
    var { bordered, striped, hoverable, fullWidth, className } = _a, props = __rest(_a, ["bordered", "striped", "hoverable", "fullWidth", "className"]);
    const classNames = [className];
    if (bordered) {
        classNames.push(`bordered-${bordered}`);
    }
    if (striped) {
        classNames.push("striped");
    }
    if (hoverable) {
        classNames.push("hoverable");
    }
    if (fullWidth) {
        classNames.push("full-width");
    }
    return React__default.createElement(BaseComponent, Object.assign({ Element: "table", baseClassName: "ff-table", className: createClassName(classNames) }, props));
};

// Power function - for setting heading sizes  ================================
// @function pow($number, $exponent) {
//     $value: 1;
//     @if $exponent > 0 {
//         @for $i from 1 through $exponent {
//             $value: $value * $number;
//         }
//     } @else if $exponent < 0 {
//         @for $i from 1 through - $exponent {
//             $value: $value / $number;
//         }
//     }
//     @return $value;
// }
//  Colours  ==================================================================
//  Neutrals
const baseColors = {
    "black": "hsl(   0,   0%,   0%)",
    "white": "hsl(   0,   0%, 100%)",
    "red": "hsl(   0,  84%,  60%)",
    "red90": "hsl(   0,  84%,  64%)",
    "red80": "hsl(   0,  84%,  68%)",
    "red70": "hsl(   0,  84%,  72%)",
    "red60": "hsl(   0,  84%,  76%)",
    "red50": "hsl(   0,  84%,  80%)",
    "red40": "hsl(   0,  84%,  84%)",
    "red30": "hsl(   0,  84%,  88%)",
    "red20": "hsl(   0,  84%,  92%)",
    "red10": "hsl(   0,  84%,  96%)",
    "salmon": "hsl(   9, 100%,  69%)",
    "salmon90": "hsl(   9, 100%,  72%)",
    "salmon80": "hsl(   9, 100%,  75%)",
    "salmon70": "hsl(   9, 100%,  79%)",
    "salmon60": "hsl(   9, 100%,  81%)",
    "salmon50": "hsl(   9, 100%,  84%)",
    "salmon40": "hsl(   9, 100%,  87%)",
    "salmon30": "hsl(   9, 100%,  91%)",
    "salmon20": "hsl(   9, 100%,  94%)",
    "salmon10": "hsl(   9, 100%,  97%)",
    "orange": "hsl(  32,  92%,  56%)",
    "orange90": "hsl(  32,  92%,  60%)",
    "orange80": "hsl(  32,  92%,  64%)",
    "orange70": "hsl(  32,  92%,  68%)",
    "orange60": "hsl(  32,  92%,  72%)",
    "orange50": "hsl(  32,  92%,  76%)",
    "orange40": "hsl(  32,  92%,  80%)",
    "orange30": "hsl(  32,  92%,  84%)",
    "orange20": "hsl(  32,  92%,  88%)",
    "orange10": "hsl(  32,  92%,  92%)",
    "amber": "hsl(  39,  97%,  61%)",
    "amber90": "hsl(  39,  97%,  65%)",
    "amber80": "hsl(  39,  96%,  69%)",
    "amber70": "hsl(  40,  96%,  72%)",
    "amber60": "hsl(  39,  97%,  76%)",
    "amber50": "hsl(  39,  96%,  80%)",
    "amber40": "hsl(  40,  95%,  84%)",
    "amber30": "hsl(  39,  97%,  88%)",
    "amber20": "hsl(  40,  95%,  92%)",
    "amber10": "hsl(  41,  90%,  96%)",
    "yellow": "hsl(  50, 100%,  52%)",
    "yellow90": "hsl(  50, 100%,  57%)",
    "yellow80": "hsl(  50, 100%,  62%)",
    "yellow70": "hsl(  50, 100%,  67%)",
    "yellow60": "hsl(  50, 100%,  72%)",
    "yellow50": "hsl(  50, 100%,  77%)",
    "yellow40": "hsl(  50, 100%,  82%)",
    "yellow30": "hsl(  50, 100%,  87%)",
    "yellow20": "hsl(  50, 100%,  92%)",
    "yellow10": "hsl(  50, 100%,  97%)",
    "pistachio": "hsl(  78,  54%,  52%)",
    "pistachio90": "hsl(  78,  54%,  57%)",
    "pistachio80": "hsl(  78,  54%,  62%)",
    "pistachio70": "hsl(  78,  54%,  67%)",
    "pistachio60": "hsl(  78,  54%,  72%)",
    "pistachio50": "hsl(  78,  54%,  77%)",
    "pistachio40": "hsl(  78,  54%,  82%)",
    "pistachio30": "hsl(  78,  54%,  87%)",
    "pistachio20": "hsl(  78,  54%,  92%)",
    "pistachio10": "hsl(  78,  54%,  97%)",
    "green": "hsl( 148,  50%,  42%)",
    "green90": "hsl( 148,  39%,  48%)",
    "green80": "hsl( 148,  36%,  54%)",
    "green70": "hsl( 148,  36%,  59%)",
    "green60": "hsl( 148,  36%,  65%)",
    "green50": "hsl( 148,  36%,  71%)",
    "green40": "hsl( 148,  36%,  77%)",
    "green30": "hsl( 148,  36%,  82%)",
    "green20": "hsl( 148,  37%,  88%)",
    "green10": "hsl( 148,  35%,  94%)",
    "teal": "hsl( 174,  62%,  48%)",
    "teal90": "hsl( 174,  58%,  53%)",
    "teal80": "hsl( 174,  58%,  58%)",
    "teal70": "hsl( 174,  57%,  63%)",
    "teal60": "hsl( 174,  58%,  69%)",
    "teal50": "hsl( 174,  58%,  74%)",
    "teal40": "hsl( 174,  57%,  79%)",
    "teal30": "hsl( 173,  58%,  84%)",
    "teal20": "hsl( 174,  56%,  89%)",
    "teal10": "hsl( 172,  56%,  95%)",
    "cyan": "hsl( 176,  78%,  55%)",
    "cyan90": "hsl( 176,  77%,  59%)",
    "cyan80": "hsl( 176,  77%,  64%)",
    "cyan70": "hsl( 176,  77%,  68%)",
    "cyan60": "hsl( 176,  77%,  73%)",
    "cyan50": "hsl( 176,  78%,  77%)",
    "cyan40": "hsl( 176,  77%,  82%)",
    "cyan30": "hsl( 176,  77%,  86%)",
    "cyan20": "hsl( 177,  75%,  91%)",
    "cyan10": "hsl( 177,  75%,  95%)",
    "sky": "hsl( 194,  97%,  72%)",
    "sky90": "hsl( 194,  97%,  75%)",
    "sky80": "hsl( 194,  97%,  77%)",
    "sky70": "hsl( 194,  96%,  80%)",
    "sky60": "hsl( 194,  95%,  83%)",
    "sky50": "hsl( 194,  97%,  86%)",
    "sky40": "hsl( 194,  97%,  89%)",
    "sky30": "hsl( 194,  95%,  91%)",
    "sky20": "hsl( 193,  93%,  94%)",
    "sky10": "hsl( 193,  88%,  97%)",
    "blue": "hsl( 212, 100%,  42%)",
    "blue90": "hsl( 212, 100%,  48%)",
    "blue80": "hsl( 212, 100%,  54%)",
    "blue70": "hsl( 212, 100%,  59%)",
    "blue60": "hsl( 212, 100%,  65%)",
    "blue50": "hsl( 212, 100%,  71%)",
    "blue40": "hsl( 212, 100%,  77%)",
    "blue30": "hsl( 212, 100%,  83%)",
    "blue20": "hsl( 212, 100%,  89%)",
    "blue10": "hsl( 212, 100%,  95%)",
    "indigo": "hsl( 237,  66%,  53%)",
    "indigo90": "hsl( 237,  66%,  57%)",
    "indigo80": "hsl( 237,  66%,  62%)",
    "indigo70": "hsl( 237,  66%,  67%)",
    "indigo60": "hsl( 237,  66%,  72%)",
    "indigo50": "hsl( 237,  65%,  76%)",
    "indigo40": "hsl( 237,  65%,  81%)",
    "indigo30": "hsl( 237,  64%,  86%)",
    "indigo20": "hsl( 238,  63%,  90%)",
    "indigo10": "hsl( 240,  60%,  95%)",
    "violet": "hsl( 258,  55%,  58%)",
    "violet90": "hsl( 259,  55%,  62%)",
    "violet80": "hsl( 259,  55%,  66%)",
    "violet70": "hsl( 259,  55%,  70%)",
    "violet60": "hsl( 259,  55%,  75%)",
    "violet50": "hsl( 258,  55%,  79%)",
    "violet40": "hsl( 259,  54%,  83%)",
    "violet30": "hsl( 259,  54%,  87%)",
    "violet20": "hsl( 260,  55%,  91%)",
    "violet10": "hsl( 260,  55%,  96%)",
    "purple": "hsl( 311,  47%,  55%)",
    "purple90": "hsl( 311,  47%,  60%)",
    "purple80": "hsl( 311,  47%,  64%)",
    "purple70": "hsl( 311,  47%,  69%)",
    "purple60": "hsl( 311,  47%,  73%)",
    "purple50": "hsl( 311,  47%,  78%)",
    "purple40": "hsl( 311,  47%,  82%)",
    "purple30": "hsl( 311,  48%,  86%)",
    "purple20": "hsl( 311,  48%,  91%)",
    "purple10": "hsl( 311,  48%,  95%)",
    "pink": "hsl( 336,  96%,  72%)",
    "pink90": "hsl( 336,  95%,  75%)",
    "pink80": "hsl( 336,  95%,  78%)",
    "pink70": "hsl( 336,  94%,  80%)",
    "pink60": "hsl( 336,  95%,  83%)",
    "pink50": "hsl( 336,  94%,  86%)",
    "pink40": "hsl( 336,  93%,  89%)",
    "pink30": "hsl( 337,  95%,  92%)",
    "pink20": "hsl( 336,  93%,  94%)",
    "pink10": "hsl( 337,  87%,  97%)",
    "crimson": "hsl( 340,  64%,  42%)",
    "crimson90": "hsl( 340,  64%,  48%)",
    "crimson80": "hsl( 340,  64%,  54%)",
    "crimson70": "hsl( 340,  64%,  59%)",
    "crimson60": "hsl( 340,  64%,  65%)",
    "crimson50": "hsl( 340,  64%,  71%)",
    "crimson40": "hsl( 340,  64%,  77%)",
    "crimson30": "hsl( 340,  64%,  82%)",
    "crimson20": "hsl( 340,  64%,  88%)",
    "crimson10": "hsl( 340,  64%,  94%)",
    "brown": "hsl(  24,  34%,  42%)",
    "brown90": "hsl(  24,  27%,  48%)",
    "brown80": "hsl(  24,  25%,  54%)",
    "brown70": "hsl(  24,  25%,  60%)",
    "brown60": "hsl(  24,  25%,  65%)",
    "brown50": "hsl(  24,  25%,  71%)",
    "brown40": "hsl(  24,  25%,  77%)",
    "brown30": "hsl(  23,  26%,  83%)",
    "brown20": "hsl(  24,  25%,  88%)",
    "brown10": "hsl(  22,  27%,  94%)",
    "slate": "hsl( 209,  12%,  50%)",
    "slate90": "hsl( 210,  12%,  55%)",
    "slate80": "hsl( 209,  12%,  60%)",
    "slate70": "hsl( 207,  12%,  65%)",
    "slate60": "hsl( 210,  12%,  70%)",
    "slate50": "hsl( 210,  12%,  75%)",
    "slate40": "hsl( 208,  13%,  80%)",
    "slate30": "hsl( 213,  12%,  85%)",
    "slate20": "hsl( 210,  12%,  90%)",
    "slate10": "hsl( 200,  11%,  95%)",
    "grey": "hsl(   0,   0%,  34%)",
    "grey90": "hsl(   0,   0%,  41%)",
    "grey80": "hsl(   0,   0%,  48%)",
    "grey70": "hsl(   0,   0%,  55%)",
    "grey60": "hsl(   0,   0%,  62%)",
    "grey50": "hsl(   0,   0%,  69%)",
    "grey40": "hsl(   0,   0%,  76%)",
    "grey30": "hsl(   0,   0%,  83%)",
    "grey20": "hsl(   0,   0%,  90%)",
    "grey10": "hsl(   0,   0%,  97%)",
};

exports.BaseComponent = BaseComponent;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbWrapper = BreadcrumbWrapper;
exports.Button = Button;
exports.Card = Card;
exports.CheckBox = CheckBox;
exports.ContentWrapper = ContentWrapper;
exports.FileUpload = FileUpload;
exports.Form = Form;
exports.FormGroup = FormGroup;
exports.FormUnit = FormUnit;
exports.HRule = HRule;
exports.Header = Header;
exports.Heading = Heading;
exports.InfoPanel = InfoPanel;
exports.InputField = InputField;
exports.InputLabel = InputLabel;
exports.NotificationItem = NotificationItem;
exports.NotificationWrapper = NotificationWrapper;
exports.Portion = Portion;
exports.RadioButton = RadioButton;
exports.RadioGroup = RadioGroup;
exports.Row = Row;
exports.Select = Select;
exports.SidebarHeader = SidebarHeader;
exports.SidebarItem = SidebarItem;
exports.SidebarItemIcon = SidebarItemIcon;
exports.SidebarItemText = SidebarItemText;
exports.SidebarWrapper = SidebarWrapper;
exports.SublinkGroup = SublinkGroup;
exports.Switch = Switch;
exports.Table = Table;
exports.Text = Text;
exports.TextArea = TextArea;
exports.baseColors = baseColors;
//# sourceMappingURL=index.js.map
