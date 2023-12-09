import { Checkbox } from "@features/ui/";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
  paramaters: {
    layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = () => (
  <div>
    <Checkbox />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
};
Default.parameters = {
  viewMode: "docs",
};
