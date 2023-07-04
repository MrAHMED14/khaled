import prisma from "./prisma";
export default async function getAllPost() {
  try {
    const posts = await prisma.post.findMany();
    return { posts };
  } catch (err) {
    return { err };
  }
}
export async function createPost(title, body, userId) {
  try {
    const posts = await prisma.post.create({
      data: { title, body, userId },
    });
    return { posts };
  } catch (err) {
    return { err };
  }
}
