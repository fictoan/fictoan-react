import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";
import { Card } from "../Card";
import { Text } from "../Typography";

const meta: Meta<typeof ThemeProvider> = {
    component: ThemeProvider,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is a Theme Provider.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ThemeProvider>;

export const Default: Story = {
    args: {
        theme: {
            "paragraph-font-size": "4rem",
            "card-bg": "var(--sky-light-80)",
            "global-border-radius": "16px",
        },
        customColors: {
            "peach": "#ff9e9e",
        },
        currentTheme: "light",
    },
    render: (args) => (
        <ThemeProvider {...args}>
            <Card shape="rounded">
                <Text className="text-peach">Change the theme!</Text>
            </Card>
        </ThemeProvider>
    )
};
