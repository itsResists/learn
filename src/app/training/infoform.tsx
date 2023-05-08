import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { showRank } from "../page";
import { prisma } from "../../lib/prisma";

export default async function UserInfo() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const getUser = await prisma.user.findUnique({

        where: {
            id: userId,

        },
        select: {
            username: true,
            stat1: true,
            stat2: true,
            stat3: true,
            stat4: true,
            stat5: true,
            stat6: true,
            stat7: true,
            stat8: true,
            experience: true,
            rank: true,
            level: true,
            village: true,

        },
    });
    return (
        <div>
            <h1>User Info</h1>
            <div className="border-2 border-white p-4 rounded-xl">
                <p>Username: {getUser?.username}</p>
                <p>Rank: {showRank(getUser.rank)}</p>
                <p>Level: {getUser?.level}</p>
                <p>Experience: {getUser?.experience}</p>
                <p>Village: {getUser?.village}</p>

            </div>
            <h1>Current Stats (This does not currently update without page refresh)</h1>
            <div className="grid grid-cols-2 border-2 border-white rounded-xl">
                <div className="p-4">
                    <p className="px-1">Stat1: {getUser?.stat1}</p>
                    <p className="px-1">Stat3: {getUser?.stat3}</p>
                    <p className="px-1">Stat2: {getUser?.stat2}</p>
                    <p className="px-1">Stat4: {getUser?.stat4}</p>

                </div>
                <div className="border-l-2 border-white p-4">
                    <p className="px-1">Stat5: {getUser?.stat5}</p>
                    <p className="px-1">Stat6: {getUser?.stat6}</p>
                    <p className="px-1">Stat7: {getUser?.stat7}</p>
                    <p className="px-1">Stat8: {getUser?.stat8}</p>


                </div>

            </div>
        </div>
    )
}
