import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { TextArea } from "./TextArea";

describe("Testing TextArea", () => {
    it("should be visible in DOM", async () => {
        render(<TextArea />);
        const el = screen.getByTestId("TextAreaTest");
        expect(el).toBeVisible();
    });
});
