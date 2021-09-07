import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { NotificationsWrapper } from "./NotificationsWrapper";

describe("Testing NotificationsWrapper", () => {
    it("should be visible in DOM", async () => {
        render(<NotificationsWrapper />);
        const el = screen.getByTestId("NotificationsWrapperTest");
        expect(el).toBeVisible();
    });
});
