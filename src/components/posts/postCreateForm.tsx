"use client";
import React from "react";
import { useActionState } from "react";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/formButton";

export default function PostCreateForm() {
  const [formState, action, isPending] = useActionState(actions.createPost, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button>Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>

            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
              name="title"
              placeholder="Title"
              label="Title"
              labelPlacement="outside"
            />

            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
              name="content"
              placeholder="Content"
              label="Content"
              labelPlacement="outside"
            />

            {formState.errors._form && (
              <div className="text-red-500">
                {formState.errors._form.join(", ")}
              </div>
            )}

            <FormButton isLoading={isPending}>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
