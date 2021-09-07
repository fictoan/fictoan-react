import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { InputField } from "./InputField";

describe("Testing InputField", () => {
    it("should be visible in DOM", async () => {
        render(<InputField />);
        const el = screen.getByTestId("InputFieldTest");
        expect(el).toBeVisible();
    });
});
