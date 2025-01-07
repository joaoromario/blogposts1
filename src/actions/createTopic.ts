"use server";

export async function createTopic(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;

  console.log(name, description);
  //TODO: revalidate the homepage after creating a topic
}
