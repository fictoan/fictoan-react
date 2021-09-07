import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { FormItemJointGroup } from "./FormItemJointGroup";

describe("Testing FormItemJointGroup", () => {
    it("should be visible in DOM", async () => {
        render(<FormItemJointGroup />);
        const el = screen.getByTestId("FormItemJointGroupTest");
        expect(el).toBeVisible();
    });
});
