import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarNestedLinks } from "./SidebarNestedLinks";

describe("Testing SidebarNestedLinks", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarNestedLinks />);
        const el = screen.getByTestId("SidebarNestedLinksTest");
        expect(el).toBeVisible();
    });
});
