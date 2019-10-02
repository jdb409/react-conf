import React from "react";
import List from "../List";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, object } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("List", module);

stories.addDecorator(withKnobs);

stories.add("Empty list", () => <List items={[]} />);

