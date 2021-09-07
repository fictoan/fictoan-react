import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarWrapper } from "./SidebarWrapper";

describe("Testing SidebarWrapper", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarWrapper />);
        const el = screen.getByTestId("SidebarWrapperTest");
        expect(el).toBeVisible();
    });
});
