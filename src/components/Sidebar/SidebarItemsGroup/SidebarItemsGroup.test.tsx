import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarItemsGroup } from "./SidebarItemsGroup";

describe("Testing SidebarItemsGroup", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarItemsGroup />);
        const el = screen.getByTestId("SidebarItemsGroupTest");
        expect(el).toBeVisible();
    });
});
