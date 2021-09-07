import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { SidebarLinksWrapper } from "./SidebarLinksWrapper";

describe("Testing SidebarLinksWrapper", () => {
    it("should be visible in DOM", async () => {
        render(<SidebarLinksWrapper />);
        const el = screen.getByTestId("SidebarLinksWrapperTest");
        expect(el).toBeVisible();
    });
});
