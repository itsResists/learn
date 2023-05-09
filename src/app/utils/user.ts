// 'use server'

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function getUserInfo() {
    const session = await getServerSession(authOptions);
    const userID = session?.user?.id;
    const getUser = await prisma.user.findUnique({
        where: {
            id: userID,

        },
        select: {
            id: true,
            email: true,
            username: true,
            gender: true,
            village: true,
            rank: true,
            experience: true,
            level: true,
            stat1: true,
            stat2: true,
            stat3: true,
            stat4: true,
            stat5: true,
            stat6: true,
            stat7: true,
            stat8: true,
            avatar: true,
            yen: true,

        }
    });
    return (
        [getUser?.id, getUser?.avatar, getUser?.username, getUser?.rank, getUser?.village, getUser?.experience, getUser?.level, getUser?.stat1, getUser?.stat2, getUser?.stat3, getUser?.stat4, getUser?.stat5, getUser?.stat6, getUser?.stat7, getUser?.stat8, getUser?.yen, getUser?.email, getUser?.gender
        ]

    )

}

let userObject = {
    id: getUserInfo()[0],
    avatar: getUserInfo()[1],
    username: getUserInfo()[2],
    rank: getUserInfo()[3],
    village: getUserInfo()[4],
    experience: getUserInfo()[5],
    level: getUserInfo()[6],
    stat1: getUserInfo()[7],
    stat2: getUserInfo()[8],
    stat3: getUserInfo()[9],
    stat4: getUserInfo()[10],
    stat5: getUserInfo()[11],
    stat6: getUserInfo()[12],
    stat7: getUserInfo()[13],
    stat8: getUserInfo()[14],
    yen: getUserInfo()[15],
    email: getUserInfo()[16],
    gender: getUserInfo()[17],

}

export { userObject };



