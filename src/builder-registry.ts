"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Heading from "./components/Heading/Heading";
import CustomMUIButton from "./components/CustomMUIButton/CustomMUIButton";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "title",
      type: "text",
    },
  ],
});

Builder.registerComponent(CustomMUIButton, {
  name: "CustomMUIButton",
  inputs: [
    {
      name: "title",
      type: "text",
    },
  ],
});