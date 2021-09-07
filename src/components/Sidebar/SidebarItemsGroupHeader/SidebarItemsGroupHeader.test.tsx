import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarItemsGroupHeader } from "./SidebarItemsGroupHeader";

describe("Testing SidebarItemsGroupHeader", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarItemsGroupHeader />);
        const el = screen.getByTestId("SidebarItemsGroupHeaderTest");
        expect(el).toBeVisible();
    });
});
