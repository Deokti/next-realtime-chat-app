import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { User } from "../components/User";
import { UserProps } from "../components/User/User.props";
import { TEST_USER } from "../config/TEST_DATA";

//👇 This default export determines where your story goes in the story list
export default {
  title: "User",
  component: User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args: UserProps) => (
  <User {...args} />
);

export const UserDefault = Template.bind({});
export const UserOnline = Template.bind({});
export const UserSelected = Template.bind({});

UserDefault.args = {
  isSelected: false,
  user: TEST_USER,
};
UserOnline.args = {
  isSelected: false,
  user: {
    ...TEST_USER,
    isOnline: true,
  },
};
UserSelected.args = {
  isSelected: true,
  user: {
    ...TEST_USER,
    isOnline: true,
  },
};
