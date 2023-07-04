"use server";

import { createPost } from "@/libs/posts";
import { revalidatePath } from "next/cache";

export async function createPostAction(title, body, userId) {
  await createPost(title, body, userId);
  revalidatePath("/");
}
