import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Portion } from "./Portion";

describe("Testing Portion", () => {
    it("should be visible in DOM", async () => {
        render(<Portion />);
        const el = screen.getByTestId("PortionTest");
        expect(el).toBeVisible();
    });
});
