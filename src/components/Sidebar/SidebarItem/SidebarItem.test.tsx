import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarItem } from "./SidebarItem";

describe("Testing SidebarItem", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarItem />);
        const el = screen.getByTestId("SidebarItemTest");
        expect(el).toBeVisible();
    });
});
