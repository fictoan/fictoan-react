import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { FileUpload } from "./FileUpload";

describe("Testing FileUpload", () => {
    it("should be visible in DOM", async () => {
        render(<FileUpload />);
        const el = screen.getByTestId("FileUploadTest");
        expect(el).toBeVisible();
    });
});
