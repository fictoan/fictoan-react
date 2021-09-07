import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../../utils/testUtils";

import { NotificationItem } from "./NotificationItem";

describe("Testing NotificationItem", () => {
    it("should be visible in DOM", async () => {
        render(<NotificationItem />);
        const el = screen.getByTestId("NotificationItemTest");
        expect(el).toBeVisible();
    });
});
