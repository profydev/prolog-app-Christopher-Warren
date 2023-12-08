import { Meta, StoryFn } from "@storybook/react";
import { Button } from "@features/ui/";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
  paramaters: {
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ size, color, children }) => (
  <div>
    <Button size={size} color={color}>
      {children}
    </Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  color: "primary",
  children: "Label",
};
Default.parameters = {
  viewMode: "docs",
};
