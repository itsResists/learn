import Image from "next/image";
import { showRank } from "../utils/user";
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

// This function can be named anything
async function getUserInfo() {
    const res = await fetch(`...`, { cache: 'no-store' })
    const userInfo = await res.json()

    return userInfo
}



export default async function Profile() {
    const userInfo = await getUserInfo()


    const session = await getServerSession(authOptions)
    const rankDisplay = showRank(session.user.rank);
    const maxLevel = 25 * (session.user.rank + 1);
    const currentLevel = session.user.experience / (25 * 100);

    return (
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <h1 className="text-3xl font-extrabold">Profile {userInfo.username}</h1>

            <div>
                <div
                    className="grid grid-cols-2">
                    <div
                        className="border-y-2 border-l-2 border-white p-2 grid grid-cols-2">
                        <div className="flex flex-col">

                            <p className="p-1">


                                Username: {session.user.username}
                            </p>
                            <p className="p-1">
                                Email: {session.user.email}
                            </p>
                            <p className="p-1">
                                Gender: {session.user.gender}
                            </p>
                            <p className="p-1">
                                Rank: {rankDisplay}
                            </p>
                            <p className="p-1">
                                Village: {session.user.village}
                            </p>
                            <p className="p-1">
                                Level: {session.user.level}
                            </p>
                            <p className="p-1">
                                Experience:  {session.user.experience}
                            </p>
                            <p className="p-1">
                                Yen: {session.user.yen} Y
                            </p>
                            <p className="p-1">
                                Max Level: {maxLevel}
                            </p>
                            <p className="p-1">
                                Current Level: {currentLevel}
                            </p>
                        </div>
                        <div>
                            <Image
                                src={session.user.avatar}
                                alt="User Avatar"
                                width={250}
                                height={250}
                            />
                        </div>


                    </div>
                    <div className="border-y-2 border-white border-r-2 p-2">
                        <h1>Placeholder</h1>
                        <p className="p-1">
                            Health: {session.user.health} / {session.user.maxHealth}
                        </p>
                        <p className="p-1">
                            Energy: {session.user.energy} / {session.user.maxEnergy}
                        </p>
                        <p className="p-1">Regeneration Rate: TBI</p>



                    </div>
                    <div className="border-white border-2">
                        <h3 className="underline">Missions</h3>
                        <p className="p-1">
                            A Rank: 0
                        </p>
                        <p className="p-1">
                            B Rank: 0
                        </p>
                        <p className="p-1">
                            C Rank: 0
                        </p>
                        <p className="p-1">
                            D Rank: 0
                        </p>

                        <div className="grid grid-cols-2">
                            <div className="py-2">
                                <h3 className="underline">PvP</h3>
                                <p className="p-1">
                                    Wins: 0
                                </p>
                                <p className="p-1">
                                    Losses: 0
                                </p>
                            </div>
                            <div className="py-2">
                                <h3 className="underline">Arena</h3>
                                <p className="p-1">
                                    Wins: 0
                                </p>

                                <p className="p-1">
                                    Losses: 0
                                </p></div>
                        </div>


                    </div>
                    <div className="border-y-2 border-white border-r-2 p-2">
                        <h1>Placeholder</h1>
                        <p className="p-1">
                            stat1: {session.user.stat1}

                        </p>
                        <p className="p-1">
                            stat2: {session.user.stat2}
                        </p>
                        <p className="p-1">
                            stat3: {session.user.stat3}
                        </p>
                        <p className="p-1">
                            stat4:  {session.user.stat4}
                        </p>
                        <p className="p-1">
                            stat5:  {session.user.stat5}
                        </p>
                        <p className="p-1">
                            stat6:  {session.user.stat6}
                        </p>
                        <p className="p-1">
                            stat7:  {session.user.stat7}
                        </p>
                        <p className="p-1">
                            stat8:  {session.user.stat8}
                        </p>


                    </div>

                </div>
            </div>
            <pre>{JSON.stringify(session)}</pre>
        </main>

    );
}

