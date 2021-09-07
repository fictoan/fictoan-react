import React from 'react';
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider';
import { defaultColours } from '../src/styles/DefaultColours';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        expanded: false,
        sort: 'requiredFirst',
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => (
        <ThemeProvider>
            <Story />
        </ThemeProvider>
    ),
];
