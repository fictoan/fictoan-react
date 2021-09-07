import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { RadioButton } from "./RadioButton";

describe("Testing RadioButton", () => {
    it("should be visible in DOM", async () => {
        render(<RadioButton />);
        const el = screen.getByTestId("RadioButtonTest");
        expect(el).toBeVisible();
    });
});
