import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Table } from "./Table";

describe("Testing Table", () => {
    it("should be visible in DOM", async () => {
        render(<Table />);
        const el = screen.getByTestId("TableTest");
        expect(el).toBeVisible();
    });
});
