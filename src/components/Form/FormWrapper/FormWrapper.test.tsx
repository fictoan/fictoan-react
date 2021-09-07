import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { FormWrapper } from "./FormWrapper";

describe("Testing FormWrapper", () => {
    it("should be visible in DOM", async () => {
        render(<FormWrapper />);
        const el = screen.getByTestId("FormWrapperTest");
        expect(el).toBeVisible();
    });
});
