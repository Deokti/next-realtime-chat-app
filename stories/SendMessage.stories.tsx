import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SendMessage } from "../components/SendMessage";
import { SendMessageProps } from "../components/SendMessage/SendMessage.props";

//👇 This default export determines where your story goes in the story list
export default {
  title: "SendMessage",
  component: SendMessage,
} as ComponentMeta<typeof SendMessage>;

const Template: ComponentStory<typeof SendMessage> = (
  args: SendMessageProps,
) => (
  <SendMessage
    {...args}
    style={{ position: "absolute", bottom: "0", width: "98%" }}
  />
);

export const SendMessageDefault = Template.bind({});

SendMessageDefault.args = {
  value: "",
};
