import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { Switch } from "./Switch";

describe("Testing Switch", () => {
    it("should be visible in DOM", async () => {
        render(<Switch />);
        const el = screen.getByTestId("SwitchTest");
        expect(el).toBeVisible();
    });
});
