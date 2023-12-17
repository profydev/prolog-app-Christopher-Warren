import { Meta, StoryFn } from "@storybook/react";
import { Input } from "@features/ui/";

export default {
  title: "UI/Input",
  component: Input,
  paramaters: {
    layout: "fullscreen",
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({
  label,
  disabled,
  hint,
  iconSrc,
  error,
}) => (
  <div>
    <Input
      label={label}
      disabled={disabled}
      hint={hint}
      iconSrc={iconSrc}
      error={error}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "I am label",
  hint: "I am a hint",
};
Default.parameters = {
  viewMode: "docs",
};
