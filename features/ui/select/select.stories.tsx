import { Meta, StoryFn } from "@storybook/react";
import { Select } from "@features/ui/";
import { useState } from "react";
import type { Option } from "@features/ui/";

export default {
  title: "UI/Select",
  component: Select,
  paramaters: {
    layout: "fullscreen",
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = ({
  error,
  hint,
  label,
  logoSrc,
  optionsList,
}) => {
  const [selectedValue, setSelectedValue] = useState<Option | null>(null);

  return (
    <div style={{ maxWidth: "320px" }}>
      <Select
        placeholder="Select a value"
        selectedValue={selectedValue}
        onChange={(option) => setSelectedValue(option)}
        onReset={() => setSelectedValue(null)}
        optionsList={optionsList}
        error={error}
        hint={hint}
        label={label}
        logoSrc={logoSrc}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  optionsList: [
    { value: "James woodruf", id: "123" },
    { value: "Bob Mcdill", id: "123123" },
    { value: "Feris Wilson", id: "1ewew" },
  ],
  hint: "I am a hint",
  label: "Don't label me!",
};
Default.parameters = {
  viewMode: "docs",
};
