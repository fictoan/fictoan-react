import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Card } from "./Card";

describe("Testing Card", () => {
    it("should be visible in DOM", async () => {
        render(<Card />);
        const el = screen.getByTestId("CardTest");
        expect(el).toBeVisible();
    });
});
