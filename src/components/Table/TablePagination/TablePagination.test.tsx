import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { TablePagination } from "./TablePagination";

describe("Testing TablePagination", () => {
    it("should be visible in DOM", async () => {
        render(<TablePagination />);
        const el = screen.getByTestId("TablePaginationTest");
        expect(el).toBeVisible();
    });
});
