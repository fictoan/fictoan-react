import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { BreadcrumbsWrapper } from "./BreadcrumbsWrapper";

describe("Testing BreadcrumbsWrapper", () => {
    it("should be visible in DOM", async () => {
        render(<BreadcrumbsWrapper />);
        const el = screen.getByTestId("BreadcrumbsWrapperTest");
        expect(el).toBeVisible();
    });
});
