import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { CheckBox } from "./CheckBox";

describe("Testing CheckBox", () => {
    it("should be visible in DOM", async () => {
        render(<CheckBox />);
        const el = screen.getByTestId("CheckBoxTest");
        expect(el).toBeVisible();
    });
});
