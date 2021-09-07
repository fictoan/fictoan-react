import React from "react";
import { screen } from "@testing-library/react";
import { renderWithWrapper as render } from "../../utils/testUtils";

import { Tabs } from "./Tabs";

describe("Testing Tabs", () => {
    it("should be visible in DOM", async () => {
        render(<Tabs />);
        const el = screen.getByTestId("TabsTest");
        expect(el).toBeVisible();
    });
});
