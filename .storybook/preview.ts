import type { Preview } from "@storybook/react";

import "../src/styles/Normalize.css";
import "../src/styles/reset.css";
import "../src/styles/globals.css";
import "../src/styles/default-colours.css";
import "../src/styles/custom-colours.css";
import "../src/styles/generated-colours.css";
import "../src/styles/theme.css";
import "../src/styles/utilities.css";
import "../src/components/Typography/typography.css";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
