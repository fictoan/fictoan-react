import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { InfoPanel } from "./InfoPanel";

describe("Testing InfoPanel", () => {
    it("should be visible in DOM", async () => {
        render(<InfoPanel />);
        const el = screen.getByTestId("InfoPanelTest");
        expect(el).toBeVisible();
    });
});
