import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.person.firstName(),
      posts: {
        createMany: {
          data: [
            {
              title: faker.lorem.sentence(),
              content: faker.lorem.paragraph(),
              published: faker.datatype.boolean(),
            },
            {
              title: faker.lorem.sentence(),
              content: faker.lorem.paragraph(),
              published: faker.datatype.boolean(),
            },
            {
              title: faker.lorem.sentence(),
              content: faker.lorem.paragraph(),
              published: faker.datatype.boolean(),
            },
          ],
        },
      },
    },
  });
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
