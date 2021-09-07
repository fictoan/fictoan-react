import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { CodeBlock } from "./CodeBlock";

describe("Testing CodeBlock", () => {
    it("should be visible in DOM", async () => {
        render(<CodeBlock />);
        const el = screen.getByTestId("CodeBlockTest");
        expect(el).toBeVisible();
    });
});
