import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { BreadcrumbItem } from "./BreadcrumbItem";

describe("Testing BreadcrumbItem", () => {
    it("should be visible in DOM", async () => {
        render(<BreadcrumbItem />);
        const el = screen.getByTestId("BreadcrumbItemTest");
        expect(el).toBeVisible();
    });
});
