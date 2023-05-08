import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "../../lib/prisma";
import { showRank } from "../page";
import Image from "next/image";


export default async function Profile() {
    const session = await getServerSession(authOptions);
    const userID = session?.user?.id;
    const getUser: any = await prisma.user.findUnique({
        where: {
            id: userID,

        },
        select: {
            id: true,
            email: true,
            username: true,
            gender: true,
            village: true,
            stat1: true,
            stat2: true,
            stat3: true,
            stat4: true,
            rank: true,
            experience: true,
            level: true,
            stat5: true,
            stat6: true,
            stat7: true,
            stat8: true,
            avatar: true,
            yen: true,

        }

    });
    const src = getUser?.avatar;
    const maxLevel = 25 * (getUser?.rank + 1);
    const currentLevel = getUser?.experience / (maxLevel * 100);

    return (    
        <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
            <h1 className="text-3xl font-extrabold">Profile</h1>
            <div>
                <div
                    className="grid grid-cols-2">
                    <div 
                        className="border-y-2 border-l-2 border-white p-2 grid grid-cols-2">
                        <div className="flex flex-col">

                            <p className="p-1">
                                Username: {getUser?.username}
                            </p>
                            <p className="p-1">
                                Email: {getUser?.email}
                            </p>
                            <p className="p-1">
                                Gender: {getUser?.gender}
                            </p>
                            <p className="p-1">
                                Rank: {showRank(getUser?.rank)}
                            </p>
                            <p className="p-1">
                                Village: {getUser?.village}
                            </p>
                            <p className="p-1">
                                Level: {getUser?.level}
                            </p>
                            <p className="p-1">
                                Experience: {getUser?.experience}
                            </p>
                            <p className="p-1">
                                Yen: {getUser?.yen}
                            </p>
                            <p className="p-1">
                                Rank Number: {getUser?.rank}
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
                                src={src}
                                alt="test"
                                width={250}
                                height={250}
                        />
                        </div>


                    </div>
                    <div className="border-y-2 border-white border-r-2 p-2">
                        <h1>Placeholder</h1>
                        <p className="p-1">
                            stat1: {getUser?.stat1}
                        </p>
                        <p className="p-1">
                            stat2: {getUser?.stat2}
                        </p>
                        <p className="p-1">
                            stat3: {getUser?.stat3}
                        </p>
                        <p className="p-1">
                            stat4: {getUser?.stat4}
                        </p>
                        <p className="p-1">
                            stat5: {getUser?.stat5}
                        </p>
                        <p className="p-1">
                            stat6: {getUser?.stat6}
                        </p>
                        <p className="p-1">
                            stat7: {getUser?.stat7}
                        </p>
                        <p className="p-1">
                            stat8: {getUser?.stat8}
                        </p>

                    </div>
                    <div className="border-white border-2">
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                        <p className="p-1">
                            Placeholder: {showRank(getUser?.rank)}
                        </p>
                    </div>
                    <div className="p-2 border-white border-b-2 border-r-2">
                        <div>
                            <h1>Offense Stats</h1>
                            <p className="p-1">
                                stat1: {getUser?.stat1}
                            </p>
                            <p className="p-1">
                                stat2: {getUser?.stat2}
                            </p>
                            <p className="p-1">
                                stat3: {getUser?.stat3}
                            </p>
                            <p className="p-1">
                                stat4: {getUser?.stat4}
                            </p>
                        </div>

                        <p className="p-1">
                            stat5: {getUser?.stat5}
                        </p>
                        <p className="p-1">
                            stat6: {getUser?.stat6}
                        </p>
                        <p className="p-1">
                            stat7: {getUser?.stat7}
                        </p>
                        <p className="p-1">
                            stat8: {getUser?.stat8}
                        </p>
                    </div>

                </div>
            </div>
        </main>
    );
}
