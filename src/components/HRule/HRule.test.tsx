import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { HRule } from "./HRule";

describe("Testing HRule", () => {
    it("should be visible in DOM", async () => {
        render(<HRule />);
        const el = screen.getByTestId("HRuleTest");
        expect(el).toBeVisible();
    });
});
