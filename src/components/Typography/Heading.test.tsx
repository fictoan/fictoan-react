import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Heading } from "./Heading";

describe("Testing Heading", () => {
    it("should be visible in DOM", async () => {
        render(<Heading />);
        const el = screen.getByTestId("HeadingTest");
        expect(el).toBeVisible();
    });
});
