import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const password = await hash("password123", 12);
    const user = await prisma.user.upsert({
        where: { email: "admin@admin.com" },
        update: {},
        create: {
            email: "admin@admin.com",
            username: "Admin",
            password,
            gender: "Male",
            village: "Sand",
            stat1: 10,
            stat2: 10,
            stat3: 10,
            stat4: 10,
            stat5: 10,
            stat6: 10,
            stat7: 10,
            stat8: 10,
            level: 1,
            rank: "2",
            experience: 0,
            avatar: "https://i.imgur.com/pBAPPAd.gif",
            yen: 1000,


        },
    });
    console.log({ user });
}
main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
