import { Checkbox } from "@features/ui/";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
  paramaters: {
    layout: "fullscreen",
  },
} as Meta<typeof Checkbox>;
const voidFn = () => {};
const Template: StoryFn<typeof Checkbox> = ({
  size,
  label,
  checked = false,
}) => (
  <div>
    <Checkbox size={size} label={label} checked={checked} onChange={voidFn} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  label: "Label",
};
Default.parameters = {
  viewMode: "docs",
};
