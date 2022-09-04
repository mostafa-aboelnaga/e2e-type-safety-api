import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // Delete all `User` and `Message` records
    await prisma.message.deleteMany({});
    await prisma.user.deleteMany({});
    // (Re-)Create dummy `User` and `Message` records
    await prisma.user.create({
        data: {
            name: "Mostafa",
            messages: {
                create: [
                    {
                        body: "A Note for Mostafa",
                    },
                    {
                        body: "Another note for Mostafa",
                    },
                ],
            },
        },
    });
    await prisma.user.create({
        data: {
            name: "Ram",
            messages: {
                create: [
                    {
                        body: "A Note for Ram",
                    },
                    {
                        body: "Another note for Ram",
                    },
                ],
            },
        },
    });
    await prisma.user.create({
        data: {
            name: "Ahmed",
            messages: {
                create: [
                    {
                        body: "A Note for Ahmed",
                    },
                    {
                        body: "Another note for Ahmed",
                    },
                ],
            },
        },
    });
};

main();
