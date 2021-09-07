import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Row } from "./Row";

describe("Testing Row", () => {
    it("should be visible in DOM", async () => {
        render(<Row />);
        const el = screen.getByTestId("RowTest");
        expect(el).toBeVisible();
    });
});
