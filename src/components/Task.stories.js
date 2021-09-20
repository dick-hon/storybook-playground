import React from "react";
import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    isFinished: false,
    isPinned: false,
  },
  index: 1,
};

export const Finished = Template.bind({});
Finished.args = {
  ...Default.args,
  task: {
    ...Default.args.task,
    isFinished: true,
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  task: {
    ...Default.args.task,
    isPinned: true,
  },
};
