import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { InputLabel } from "./InputLabel";

describe("Testing InputLabel", () => {
    it("should be visible in DOM", async () => {
        render(<InputLabel />);
        const el = screen.getByTestId("InputLabelTest");
        expect(el).toBeVisible();
    });
});
