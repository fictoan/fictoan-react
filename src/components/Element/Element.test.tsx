import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Element } from "./Element";

describe("Testing Element", () => {
    it("should be visible in DOM", async () => {
        render(<Element />);
        const el = screen.getByTestId("ElementTest");
        expect(el).toBeVisible();
    });
});
