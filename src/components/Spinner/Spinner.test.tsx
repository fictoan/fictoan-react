import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Spinner } from "./Spinner";

describe("Testing Spinner", () => {
    it("should be visible in DOM", async () => {
        render(<Spinner />);
        const el = screen.getByTestId("SpinnerTest");
        expect(el).toBeVisible();
    });
});
