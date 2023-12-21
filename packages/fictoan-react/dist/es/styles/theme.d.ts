declare type CustomColoursType = {
    [k in string]: string;
};
export declare const customColours: {
    readonly hue: "hsla( 212, 100%,  48%, 1)";
    readonly tint: "hsla(  40,  97%,  61%, 1)";
    readonly shade: "hsla(   0,   0%,  34%, 1)";
    readonly analogue: "hsla( 237,  65%,  76%, 1)";
    readonly accent: "hsla( 148,  36%,  54%, 1)";
};
export declare const globalVariables: {
    borderWidth: string;
    borderRadius: string;
    measurements: {
        nano: string;
        micro: string;
        tiny: string;
        small: string;
        medium: string;
        large: string;
        huge: string;
    };
};
export declare const FictoanTheme: {
    customColours: CustomColoursType;
    body: {
        bg: string;
    };
    bottomDrawer: {
        bg: string;
        border: string;
        borderRadius: string;
        overlay: {
            bg: string;
            opacity: number;
            blur: string;
        };
        dismissButton: {
            color: string;
        };
    };
    breadcrumbs: {
        wrapper: {
            bg: string;
        };
        item: {
            text: string;
            active: string;
            inactive: string;
        };
        separator: {
            text: string;
            content: string;
        };
    };
    button: {
        font: string;
        isLoading: {
            spinnerBorder: string;
        };
        primary: {
            default: {
                bg: string;
                border: string;
                text: string;
                borderRadius: string;
            };
            onHover: {
                bg: string;
                border: string;
                text: string;
            };
            isActive: {
                bg: string;
                border: string;
                text: string;
            };
            isDisabled: {
                bg: string;
                border: string;
                text: string;
            };
            isLoading: {
                spinnerBorder: string;
            };
        };
        secondary: {
            default: {
                bg: string;
                border: string;
                text: string;
                borderRadius: string;
            };
            onHover: {
                bg: string;
                border: string;
                text: string;
            };
            isActive: {
                bg: string;
                border: string;
                text: string;
            };
            isLoading: {
                spinnerBorder: string;
            };
            isDisabled: {
                bg: string;
                border: string;
                text: string;
            };
        };
        tertiary: {
            default: {
                bg: string;
                border: string;
                text: string;
                borderRadius: string;
            };
            onHover: {
                bg: string;
                border: string;
                text: string;
            };
            isActive: {
                bg: string;
                border: string;
                text: string;
            };
            isLoading: {
                spinnerBorder: string;
            };
            isDisabled: {
                bg: string;
                border: string;
                text: string;
            };
        };
    };
    card: {
        bg: string;
        border: string;
        borderRadius: string;
    };
    checkBox: {
        square: {
            default: {
                bg: string;
                borderRadius: string;
            };
            onHover: {
                bg: string;
            };
            isChecked: {
                bg: string;
            };
            isDisabled: {
                bg: string;
            };
        };
        check: {
            default: {
                border: string;
            };
        };
    };
    hr: {
        default: {
            bg: string;
            height: string;
        };
        primary: {
            bg: string;
            height: string;
        };
        secondary: {
            bg: string;
            height: string;
        };
        tertiary: {
            bg: string;
            height: string;
        };
    };
    inputField: {
        default: {
            bg: string;
            border: string;
            label: string;
            text: string;
            borderRadius: string;
            helpText: {
                text: string;
                scale: string;
            };
        };
        onFocus: {
            bg: string;
            border: string;
            text: string;
        };
        isValid: {
            bg: string;
            border: string;
            label: string;
        };
        isInvalid: {
            bg: string;
            border: string;
            text: string;
            label: string;
            errorText: string;
        };
        isDisabled: {
            bg: string;
            border: string;
            text: string;
            label: string;
        };
        isReadOnly: {
            bg: string;
            border: string;
            text: string;
            label: string;
        };
        required: {
            text: string;
        };
        icons: {
            default: {
                fill: string;
            };
            onFocus: {
                fill: string;
            };
            isValid: {
                bg: string;
                border: string;
            };
        };
    };
    infoPanel: {
        bg: string;
        border: string;
        dismissButton: {
            color: string;
            borderRadius: string;
        };
    };
    notification: {
        generic: {
            bg: string;
            text: string;
            borderRadius: string;
        };
        kinds: {
            info: {
                bg: string;
                border: string;
            };
            warning: {
                bg: string;
                border: string;
            };
            error: {
                bg: string;
                border: string;
            };
            success: {
                bg: string;
                border: string;
            };
        };
    };
    progressBar: {
        bg: string;
        fill: string;
        label: string;
        value: string;
        borderRadius: string;
    };
    radioButton: {
        inset: {
            default: {
                bg: string;
            };
            onHover: {
                bg: string;
            };
            isSelected: {
                bg: string;
            };
            isDisabled: {
                bg: string;
            };
        };
        circle: {
            default: {
                bg: string;
            };
        };
    };
    select: {
        chevron: string;
    };
    sidebar: {
        width: string;
        bg: string;
        isCollapsed: {
            width: string;
            label: {
                text: string;
                bg: string;
                borderRadius: string;
            };
        };
        header: {
            bg: string;
            borderBottom: string;
            logoWidth: string;
            iconWidth: string;
        };
        icons: {
            size: string;
            stroked: {
                thickness: number;
                default: {
                    line: string;
                };
                onHover: {
                    line: string;
                };
                isActive: {
                    line: string;
                };
            };
            filled: {
                default: {
                    bg: string;
                };
                onHover: {
                    bg: string;
                };
                isActive: {
                    bg: string;
                };
            };
        };
        links: {
            default: {
                bg: string;
                text: string;
                scale: number;
                weight: number;
            };
            onHover: {
                bg: string;
                text: string;
            };
            isSelected: {
                bg: string;
                border: string;
                text: string;
            };
            hasAlert: {
                bg: string;
            };
        };
        subLinks: {
            header: {
                weight: number;
            };
            default: {
                bg: string;
                text: string;
                weight: number;
                scale: number;
            };
            onHover: {
                bg: string;
                text: string;
            };
            chevron: {
                border: string;
            };
        };
        footer: {
            height: string;
            bg: string;
            borderTop: string;
        };
    };
    spinner: {
        color: string;
    };
    table: {
        bg: string;
        text: string;
        border: string;
        striped: {
            header: {
                bg: string;
            };
            cell: {
                bg: string;
            };
        };
        onHover: {
            bg: string;
            text: string;
        };
        pagination: {
            bg: string;
            text: string;
            borderRadius: string;
            navIcon: {
                onHover: {
                    stroke: string;
                };
            };
        };
    };
    tabs: {
        label: {
            default: {
                text: string;
            };
            onHover: {
                text: string;
            };
            isActive: {
                border: string;
                text: string;
            };
            isDisabled: {
                text: string;
            };
            hasAlert: {
                circle: {
                    bg: string;
                    border: string;
                };
            };
        };
    };
    text: {
        font: {
            sans: string;
            serif: string;
            mono: string;
        };
        paras: {
            font: string;
            size: number;
            color: string;
            weight: number;
            lineHeight: number;
            subtext: string;
        };
        headings: {
            font: string;
            color: string;
            weight: number;
            multiplier: number;
            lineHeight: number;
        };
        links: {
            font: string;
            default: {
                color: string;
            };
            onHover: {
                color: string;
            };
        };
        selection: {
            bg: string;
            text: string;
        };
        code: {
            inline: {
                bg: string;
                text: string;
                scale: number;
            };
            block: {
                bg: string;
                text: string;
                scale: number;
                lineHeight: number;
                borderRadius: string;
            };
            prism: {
                tokens: {
                    tag: string;
                    atrule: string;
                    attrName: string;
                    attrValue: string;
                    boolean: string;
                    cdata: string;
                    className: string;
                    comment: string;
                    constant: string;
                    deleted: string;
                    delimiter: string;
                    doctype: string;
                    entity: string;
                    function: string;
                    hexcode: string;
                    inserted: string;
                    italic: string;
                    keyword: string;
                    namespace: string;
                    number: string;
                    operator: string;
                    plain: string;
                    prolog: string;
                    property: string;
                    punctuation: string;
                    regex: string;
                    selector: string;
                    string: string;
                    symbol: string;
                    url: string;
                    variable: string;
                };
                languages: {
                    css: {
                        fallback: string;
                    };
                    html: {
                        fallback: string;
                    };
                    js: {
                        fallback: string;
                    };
                    json: {
                        fallback: string;
                        tokens: {
                            string: string;
                        };
                    };
                };
            };
        };
        kbd: {
            bg: string;
            text: string;
            borderRadius: string;
        };
    };
    toast: {
        bg: string;
        text: string;
    };
    toggleSwitch: {
        case: {
            default: {
                bg: string;
            };
            onHover: {
                bg: string;
            };
            isChecked: {
                bg: string;
            };
            isDisabled: {
                bg: string;
            };
        };
        actuator: {
            default: {
                bg: string;
            };
            onHover: {
                bg: string;
            };
            isChecked: {
                bg: string;
            };
            isDisabled: {
                bg: string;
            };
        };
    };
};
export {};
