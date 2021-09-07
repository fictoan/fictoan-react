import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarFooter } from "./SidebarFooter";

describe("Testing SidebarFooter", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarFooter />);
        const el = screen.getByTestId("SidebarFooterTest");
        expect(el).toBeVisible();
    });
});
