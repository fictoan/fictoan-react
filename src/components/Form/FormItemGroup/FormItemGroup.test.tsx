import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { FormItemGroup } from "./FormItemGroup";

describe("Testing FormItemGroup", () => {
    it("should be visible in DOM", async () => {
        render(<FormItemGroup />);
        const el = screen.getByTestId("FormItemGroupTest");
        expect(el).toBeVisible();
    });
});
