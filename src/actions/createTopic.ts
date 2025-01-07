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

export async function createTopic(formState: number, formData: FormData) {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors); //this makes the error message more readable
  } else {
    console.log(result.data);
  }

  return 10; //matching the useActionState hook in the topicCreateForm component
  //TODO: revalidate the homepage after creating a topic
}
