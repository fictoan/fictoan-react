import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ContentWrapper } from "./ContentWrapper";
import { Card } from "../Card/Card";
import { Text } from "../Typography/Text";
import { SidebarWrapper } from "../Sidebar/SidebarWrapper/SidebarWrapper";

const meta: Meta<typeof ContentWrapper> = {
    component: ContentWrapper,
    tags: ["autodocs"],
    parameters: {
        docs: {
            description: {
                component: "This is the Content wrapper.",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ContentWrapper>;

export const Default: Story = {
    render: (args) => (
        <div>
            <SidebarWrapper></SidebarWrapper>
            <ContentWrapper {...args}>
                <Card padding="small" shape="rounded">
                    <Text>
                        This is a paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ut tempore
                        praesentium nesciunt nobis optio error amet nulla! Doloremque, vitae?
                    </Text>
                </Card>
                <Text marginTop="tiny">
                    This is another paragraph. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
                    perspiciatis culpa beatae placeat ratione laborum nam voluptatibus ex eius, temporibus rem numquam
                    illum corrupti modi minus aliquid, molestiae a sunt ducimus cumque quasi nulla? Labore pariatur
                    eligendi error placeat consectetur?
                </Text>
            </ContentWrapper>
        </div>
    ),
};
