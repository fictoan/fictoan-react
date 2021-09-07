import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { RadioGroup } from "./RadioGroup";

describe("Testing RadioGroup", () => {
    it("should be visible in DOM", async () => {
        render(<RadioGroup />);
        const el = screen.getByTestId("RadioGroupTest");
        expect(el).toBeVisible();
    });
});
