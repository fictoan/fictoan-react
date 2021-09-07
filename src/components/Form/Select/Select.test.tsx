import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { Select } from "./Select";

describe("Testing Select", () => {
    it("should be visible in DOM", async () => {
        render(<Select />);
        const el = screen.getByTestId("SelectTest");
        expect(el).toBeVisible();
    });
});
