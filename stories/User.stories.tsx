import React from "react";
import "macro-css";
import "../styles/bootstrap-reboot.min.scss";
import "../styles/globals.scss";
import "@fontsource/roboto";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { User } from "../components/User";
import { UserProps } from "../components/User/User.props";

//👇 This default export determines where your story goes in the story list
export default {
  title: "User",
  component: User,
} as ComponentMeta<typeof User>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const Template: ComponentStory<typeof User> = (args: UserProps) => (
  <User {...args} />
);

const USER = {
  _id: "1",
  avatar:
    "https://avatars.mds.yandex.net/get-images-cbir/1776014/FDNMCWpPldSyC7p_XMaK9Q5954/ocr",
  isOnline: false,
  username: "Каин Искариот",
};

export const UserDefault = Template.bind({});
export const UserOnline = Template.bind({});
export const UserSelected = Template.bind({});

UserDefault.args = {
  isSelected: false,
  user: USER,
};
UserOnline.args = {
  isSelected: false,
  user: {
    ...USER,
    isOnline: true,
  },
};
UserSelected.args = {
  isSelected: true,
  user: {
    ...USER,
    isOnline: true,
  },
};
