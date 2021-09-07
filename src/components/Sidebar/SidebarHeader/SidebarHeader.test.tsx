import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarHeader } from "./SidebarHeader";

describe("Testing SidebarHeader", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarHeader />);
        const el = screen.getByTestId("SidebarHeaderTest");
        expect(el).toBeVisible();
    });
});
