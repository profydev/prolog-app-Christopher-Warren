import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ProjectCardError } from "./project-card-error";

export default {
  title: "Project/ProjectCardError",
  component: ProjectCardError,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof ProjectCardError>;

const Template: StoryFn<typeof ProjectCardError> = (props) => (
  <div
    style={{
      maxWidth: 500,
      width: "100%",
      boxSizing: "border-box",
      padding: 10,
    }}
  >
    <ProjectCardError {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  error: {
    name: "error 500",
    message: "There was an error loading the page",
  },
};
Default.parameters = {
  viewMode: "docs",
};
