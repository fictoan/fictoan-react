import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Button } from "./Button";

describe("Testing Button", () => {
    it("should be visible in DOM", async () => {
        render(<Button />);
        const el = screen.getByTestId("ButtonTest");
        expect(el).toBeVisible();
    });
});
