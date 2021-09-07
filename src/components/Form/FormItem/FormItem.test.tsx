import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { FormItem } from "./FormItem";

describe("Testing FormItem", () => {
    it("should be visible in DOM", async () => {
        render(<FormItem />);
        const el = screen.getByTestId("FormItemTest");
        expect(el).toBeVisible();
    });
});
