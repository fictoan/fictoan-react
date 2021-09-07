import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarItemText } from "./SidebarItemText";

describe("Testing SidebarItemText", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarItemText />);
        const el = screen.getByTestId("SidebarItemTextTest");
        expect(el).toBeVisible();
    });
});
