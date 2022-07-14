import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Profile } from "../components/Profile";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = () => <Profile />;

export const ProfileDefault = Template.bind({});

ProfileDefault.args = {};
