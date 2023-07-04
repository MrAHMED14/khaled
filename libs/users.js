import prisma from "./prisma";

export default async function getAllUser() {
  try {
    const users = await prisma.user.findMany();
    return { users };
  } catch (err) {
    return { err };
  }
}
export async function findUserById(id) {
  try {
    const users = await prisma.user.findMany({
      where: { id },
    });
    return { users };
  } catch (err) {
    return { err };
  }
}
