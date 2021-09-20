import React from "react";
import { Provider } from "react-redux";

import { Todo } from "./Todo";

import { action } from "@storybook/addon-actions";

import * as TaskListStories from "./TaskList.stories";

const store = {
  getState: () => {
    return { tasks: TaskListStories.Default.args.tasks };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

export default {
  component: Todo,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  title: "Todo",
};

const Template = (args) => <Todo {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  isWrongState: true,
};
