"use server";

import { z } from "zod";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .max(200)
    .regex(/^[a-zA-Z0-9-]+$/, {
      message: "Must be lowercase, alphanumeric, and dash only",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors, //this makes the error message more readable
    };
  }

  return {
    errors: {},
  }; //matching the useActionState hook in the topicCreateForm component
  //TODO: revalidate the homepage after creating a topic
}
