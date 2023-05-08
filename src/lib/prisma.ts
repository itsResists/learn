import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        // log: ["query"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
// const getUser = async () => {
//     const session = await getServerSession(authOptions);
//     const src = session?.user?.avatar;

//     const userID = session?.user?.id;
//     const getUser = await prisma.user.findUnique({
//         where: {
//             id: userID,

//         },
//         select: {
//             id: true,
//             email: true,
//             username: true,
//             gender: true,
//             village: true,
//             stat1: true,
//             stat2: true,
//             stat3: true,
//             stat4: true,
//             rank: true,
//             experience: true,
//             level: true,
//             // avatar: true,
//             // yen: true,


//         }
//     });
//     return getUser?.experience;
// }

// export { getUser };



