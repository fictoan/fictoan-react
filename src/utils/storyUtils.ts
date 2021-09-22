import { ArgTypes, ComponentStory } from "@storybook/react";
import { JSXElementConstructor } from "react";
import { defaultColours } from "../styles/DefaultColours";

const DefaultOptions = {
    spacing: ["none", "nano", "micro", "tiny", "small", "medium", "large", "huge"],
    size: ["tiny", "small", "medium", "large", "huge"],
    kind: ["primary", "secondary", "tertiary", "custom"],
    shape: ["rounded", "curved"],
    shadow: ["none", "mild", "soft", "hard"],
    align: ["left", "center", "centre", "right"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    opacity: ["00", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    colors: Object.keys(defaultColours).map((color) =>
        color.replace(/([a-z]*)(\d*)/, Number.isInteger(parseInt(color[color.length - 1])) ? "$1-$2" : "$1")
    ),
} as const;

export type FictoanStory<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = ComponentStory<T> & { displayName?: string };

export const createStoryFromTemplate = (template: FictoanStory<any>) => {
    const story = template.bind({});
    story.displayName = template.displayName;
    return story;
}

type ArgTypeOptions = {
    defaultValue?: any;
    defaultOptionsKey?: keyof typeof DefaultOptions;
    options?: any;
    required?: boolean;
    category?: "Common";
    min?: number;
    max?: number;
    step?: number;
};

export const constructArgType = (
    type: string,
    description: string,
    { defaultValue, defaultOptionsKey, options, required, category, min, max, step }: ArgTypeOptions = {}
) => {
    switch (type) {
        case "select":
        case "radio":
            return {
                description,
                type: {
                    name: type,
                    required: required || false,
                },
                table: {
                    category,
                    type: {
                        summary: (DefaultOptions[defaultOptionsKey] || options || []).reduce(
                            (summary: string, item: string) => (summary === "" ? item : summary + "|" + item),
                            ""
                        ),
                    },
                    defaultValue: { summary: defaultValue || "-" },
                },
                control: {
                    type: type,
                },
                options: DefaultOptions[defaultOptionsKey] || options || [],
            };

        case "array":
            return {
                description,
                type: {
                    name: "array",
                    required: required || false,
                },
                table: {
                    category,
                    type: {
                        summary: (DefaultOptions[defaultOptionsKey] || options || []).reduce(
                            (summary: string, item: string) => (summary === "" ? item : summary + "|" + item),
                            ""
                        ),
                    },
                    defaultValue: { summary: defaultValue || "-" },
                },
                control: {
                    type: "array",
                    separator: ",",
                },
            };

        case "range":
            return {
                description,
                type: {
                    name: "range",
                    required: required || false,
                },
                table: {
                    category,
                    type: {
                        summary: (DefaultOptions[defaultOptionsKey] || options || []).reduce(
                            (summary: string, item: string) => (summary === "" ? item : summary + "|" + item),
                            ""
                        ),
                    },
                    defaultValue: { summary: defaultValue || "-" },
                },
                control: {
                    type: "range",
                    min,
                    max,
                    step,
                },
            };

        default:
            return {
                description,
                type: {
                    name: type,
                    required: required || false,
                },
                table: {
                    category,
                    type: { summary: type },
                    defaultValue: { summary: defaultValue },
                },
                control: {
                    type,
                },
            };
    }
};

export const CommonArgTypes: ArgTypes = {
    bgColor: constructArgType("select", "This is a colors field", { defaultOptionsKey: "colors", category: "Common" }),
    bgColour: constructArgType("select", "This is a colors field", { defaultOptionsKey: "colors", category: "Common" }),
    textColor: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    textColour: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    borderColor: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    borderColour: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    fillColor: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    fillColour: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    strokeColor: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    strokeColour: constructArgType("select", "This is a colors field", {
        defaultOptionsKey: "colors",
        category: "Common",
    }),
    children: constructArgType("text", "This is a text field"),
    margin: constructArgType("select", "This is a select field", { defaultOptionsKey: "spacing", category: "Common" }),
    marginTop: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    marginRight: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    marginBottom: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    marginLeft: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    padding: constructArgType("select", "This is a select field", { defaultOptionsKey: "spacing", category: "Common" }),
    paddingTop: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    paddingRight: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    paddingBottom: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    paddingLeft: constructArgType("select", "This is a select field", {
        defaultOptionsKey: "spacing",
        category: "Common",
    }),
    hideOnMobile: constructArgType("boolean", "This is a boolean field", { defaultValue: false, category: "Common" }),
    showOnlyOnMobile: constructArgType("boolean", "This is a boolean field", {
        defaultValue: false,
        category: "Common",
    }),
    hideOnTabPT: constructArgType("boolean", "This is a boolean field", { defaultValue: false, category: "Common" }),
    showOnlyOnTabPT: constructArgType("boolean", "This is a boolean field", {
        defaultValue: false,
        category: "Common",
    }),
    hideOnTabLS: constructArgType("boolean", "This is a boolean field", { defaultValue: false, category: "Common" }),
    showOnlyOnTabLS: constructArgType("boolean", "This is a boolean field", {
        defaultValue: false,
        category: "Common",
    }),
    hideOnDesktop: constructArgType("boolean", "This is a boolean field", { defaultValue: false, category: "Common" }),
    showOnlyOnDesktop: constructArgType("boolean", "This is a boolean field", {
        defaultValue: false,
        category: "Common",
    }),
    isFullWidth: constructArgType("boolean", "This is a boolean field", { defaultValue: false, category: "Common" }),
    isFullHeight: constructArgType("boolean", "This is a boolean field", { defaultValue: false, category: "Common" }),
    shadow: constructArgType("radio", "This is a radio field", { defaultOptionsKey: "shadow", category: "Common" }),
    shape: constructArgType("radio", "This is a radio field", { defaultOptionsKey: "shape", category: "Common" }),
    opacity: constructArgType("radio", "This is a radio field", { defaultOptionsKey: "opacity", category: "Common" }),
    theme: {
        table: {
            disable: true,
        },
    },
    classNames: {
        table: {
            disable: true,
        },
    },
    // className         : TextArgType,
};
