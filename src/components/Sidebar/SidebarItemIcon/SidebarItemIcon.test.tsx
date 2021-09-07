import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarItemIcon } from "./SidebarItemIcon";

describe("Testing SidebarItemIcon", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarItemIcon />);
        const el = screen.getByTestId("SidebarItemIconTest");
        expect(el).toBeVisible();
    });
});
