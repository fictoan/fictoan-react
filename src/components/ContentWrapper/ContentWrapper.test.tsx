import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { ContentWrapper } from "./ContentWrapper";

describe("Testing ContentWrapper", () => {
    it("should be visible in DOM", async () => {
        render(<ContentWrapper />);
        const el = screen.getByTestId("ContentWrapperTest");
        expect(el).toBeVisible();
    });
});
