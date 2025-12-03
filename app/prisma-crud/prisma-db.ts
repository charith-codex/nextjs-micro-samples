import { prisma } from "@/lib/prisma";

// seed
const seedPosts = async () => {
  const count = await prisma.post.count();
  if (count === 0) {
    await prisma.post.createMany({
      data: [
        {
          title: "First Post",
          content: "This is the content of the first post.",
        },
        {
          title: "Second Post",
          content: "This is the content of the second post.",
        },
      ],
    });
  }
};

seedPosts();

// get all posts
export const getPosts = async () => {
  return prisma.post.findMany();
};

// get single post by id
export const getPostById = async (id: number) => {
  return prisma.post.findUnique({
    where: { id },
  });
};

// create
export const createPost = async (title: string, content: string) => {
  return prisma.post.create({
    data: { title, content },
  });
};

// update
export const updatePost = async (
  id: number,
  title: string,
  content: string
) => {
  return prisma.post.update({
    where: { id },
    data: { title, content },
  });
};

// delete
export const deletePost = async (id: number) => {
  return prisma.post.delete({
    where: { id },
  });
};
