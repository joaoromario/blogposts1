"use client";

import React from "react";
import { useActionState, startTransition } from "react";
import {
  Button,
  Input,
  Textarea,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import * as actions from "@/actions";

export default function TopicCreateForm() {
  const [formState, action] = useActionState(actions.createTopic, {
    errors: {},
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => {
      action(formData);
    });
  }

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              name="name"
              label="Name"
              labelPlacement="outside"
              placeholder="Name"
              isInvalid={!!formState.errors.name} //if there is an error, the input field will be highlighted
              errorMessage={formState.errors.name?.join(", ")} //if there is an error, the error message will be displayed
            />
            <Textarea
              name="description"
              label="Description"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description} //if there is an error, the input field will be highlighted
              errorMessage={formState.errors.description?.join(", ")} //if there is an error, the error message will be displayed
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
