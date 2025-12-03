"use server";

import { redirect } from "next/navigation";
import { createPost } from "./prisma-db";

export async function addPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await createPost(title, content);
  redirect("/prisma-crud");
}
