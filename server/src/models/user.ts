import prisma from "../../prisma";

export const createUser = async (name: string, email: string) => {
  return await prisma.user.create({
    data: {
      name,
      email
    }
  })
}

export const getUsers = async () => {
  return await prisma.user.findMany();
}

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ 
    where: {
      id
    }
  });
}
