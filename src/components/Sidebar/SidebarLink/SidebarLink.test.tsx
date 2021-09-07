import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarLink } from "./SidebarLink";

describe("Testing SidebarLink", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarLink />);
        const el = screen.getByTestId("SidebarLinkTest");
        expect(el).toBeVisible();
    });
});
