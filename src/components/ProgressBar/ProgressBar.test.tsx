import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { ProgressBar } from "./ProgressBar";

describe("Testing ProgressBar", () => {
    it("should be visible in DOM", async () => {
        render(<ProgressBar />);
        const el = screen.getByTestId("ProgressBarTest");
        expect(el).toBeVisible();
    });
});
