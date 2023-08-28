import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const includePosts = true;

  const userWithOptionalPosts = prisma.user.findMany({
    include: includePosts ? { posts: true } : undefined,
  });

  // infered type of userWithOptionalPosts
  // const userWithOptionalPosts: Prisma.PrismaPromise<{
  //  id: number;
  //  email: string;
  //  name: string | null;
  // }[]>
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
