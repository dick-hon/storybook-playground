import React from "react";
import TaskAction from "./TaskAction";

export default {
  component: TaskAction,
  title: "Task Action",
};

const Template = (args) => <TaskAction {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  title: "Test Task",
  isPinned: false,
};

export const Pinned = Template.bind({});
Pinned.args = {
  ...Default.args,
  isPinned: true,
};

export const ExistingRecord = Template.bind({});
ExistingRecord.args = {
  ...Default.args,
};

export const NotExistingRecord = Template.bind({});
NotExistingRecord.args = {
  ...Default.args,
};
delete NotExistingRecord.args.id;
