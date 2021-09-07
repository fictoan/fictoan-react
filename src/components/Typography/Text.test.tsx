import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Text } from "./Text";

describe("Testing Text", () => {
    it("should be visible in DOM", async () => {
        render(<Text />);
        const el = screen.getByTestId("TextTest");
        expect(el).toBeVisible();
    });
});
