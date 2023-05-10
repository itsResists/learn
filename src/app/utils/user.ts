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
            health: true,
            maxHealth: true,
            energy: true,
            maxEnergy: true,
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
        [getUser?.id, getUser?.avatar, getUser?.username, getUser?.rank, getUser?.village, getUser?.experience, getUser?.level, getUser?.health, getUser?.maxHealth, getUser?.energy, getUser?.maxEnergy, getUser?.stat1, getUser?.stat2, getUser?.stat3, getUser?.stat4, getUser?.stat5, getUser?.stat6, getUser?.stat7, getUser?.stat8, getUser?.yen, getUser?.email, getUser?.gender
        ]

    )

}




setInterval(function () {
    // your code goes here...
    userRegen()

}, 60 * 1000);

export async function userRegen() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const energy = parseInt((await getUserInfo()).slice(9, 10))
    const maxEnergy = parseInt((await getUserInfo()).slice(10, 11))
    if (energy < maxEnergy) {
        await prisma.user.update({
            where: {
                id: userId,
            },
            data: {

                energy: parseInt((await getUserInfo()).slice(9, 10)) + 5,
            },
        });
    } else {
        return
    }
}




// let userObject = {
//     id: getUserInfo()[0],
//     avatar: getUserInfo()[1],
//     username: getUserInfo()[2],
//     rank: getUserInfo()[3],
//     village: getUserInfo()[4],
//     experience: getUserInfo()[5],
//     level: getUserInfo()[6],
//     health: getUserInfo()[7],
//     maxHealth: getUserInfo()[8],
//     energy: getUserInfo()[9],
//     maxEnergy: getUserInfo()[10],
//     stat1: getUserInfo()[11],
//     stat2: getUserInfo()[12],
//     stat3: getUserInfo()[13],
//     stat4: getUserInfo()[14],
//     stat5: getUserInfo()[15],
//     stat6: getUserInfo()[16],
//     stat7: getUserInfo()[17],
//     stat8: getUserInfo()[18],
//     yen: getUserInfo()[19],
//     email: getUserInfo()[20],





