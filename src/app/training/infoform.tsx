import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../../lib/prisma";
import Image from "next/image";
import { showRank } from "../utils/rank";
import getUserInfo from "../utils/user"

export default async function UserInfo() {
    const rankDisplay = showRank((await getUserInfo()).slice(3, 4).toString());
    const src = (await getUserInfo()).slice(1, 2).toString();
    return (
        <div>
            <h1>User Info</h1>
            <div className="border-2 border-white p-4 rounded-xl grid grid-cols-2">
                <div>
                    <p> Username: {(await getUserInfo()).slice(2, 3)}</p>
                    <p>Rank: {rankDisplay}</p>
                    <p> Level: {(await getUserInfo()).slice(6, 7)}</p>
                    <p>   Experience: {(await getUserInfo()).slice(5, 6)}</p>
                    <p>Village: {(await getUserInfo()).slice(4, 5)}</p>
                </div>
                <div>
                    <div>
                        <Image
                            src={src}
                            alt="test"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>

            </div>
            <h1>Current Stats (This does not currently update without page refresh)</h1>
            <div className="grid grid-cols-2 border-2 border-white rounded-xl">
                <div className="p-4">
                    <p className="px-1">Stat1: {(await getUserInfo()).slice(7, 8)}</p>
                    <p className="px-1">Stat3: {(await getUserInfo()).slice(8, 9)}</p>
                    <p className="px-1">Stat2: {(await getUserInfo()).slice(9, 10)}</p>
                    <p className="px-1">Stat4: {(await getUserInfo()).slice(10, 11)}</p>

                </div>
                <div className="border-l-2 border-white p-4">
                    <p className="px-1">Stat5: {(await getUserInfo()).slice(11, 12)}</p>
                    <p className="px-1">Stat6: {(await getUserInfo()).slice(12, 13)}</p>
                    <p className="px-1">Stat7: {(await getUserInfo()).slice(13, 14)} </p>
                    <p className="px-1">Stat8: {(await getUserInfo()).slice(14, 15)} </p>


                </div>

            </div>
        </div>
    )
}
