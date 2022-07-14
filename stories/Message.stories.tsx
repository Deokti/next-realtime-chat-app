import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Message } from "../components/Message";
import { TEST_MESSAGE } from "../config/TEST_DATA";
import { IMessage as MessageProps } from "../interfaces/message";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Message",
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args: MessageProps) => (
  <Message isCreator={false} {...args} />
);

export const MessageDefault = Template.bind({});
export const MessageCreator = Template.bind({});
export const MessageWatched = Template.bind({});
export const MessageCreatorWatched = Template.bind({});

MessageDefault.args = {
  ...TEST_MESSAGE,
};

MessageCreator.args = {
  ...TEST_MESSAGE,
  isCreator: true,
};

MessageWatched.args = {
  ...TEST_MESSAGE,
  isWatched: true,
};
MessageCreatorWatched.args = {
  ...TEST_MESSAGE,
  isCreator: true,
  isWatched: true,
};
