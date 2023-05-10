import Image from "next/image";
import { showRank } from "../utils/rank";
import getUserInfo from "../utils/user"



export default async function Profile() {
    let experience = parseInt((await getUserInfo()).slice(5, 6));
    let rank = parseInt((await getUserInfo()).slice(3, 4));
    const rankDisplay = showRank((await getUserInfo()).slice(3, 4).toString());
    const src = (await getUserInfo()).slice(1, 2).toString();
    const maxLevel = 25 * (rank + 1);
    const currentLevel = experience / (25 * 100);

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
                                Username: {(await getUserInfo()).slice(2, 3)}
                            </p>
                            <p className="p-1">
                                Email: {(await getUserInfo()).slice(20, 21)}
                            </p>
                            <p className="p-1">
                                Gender: {(await getUserInfo()).slice(21, 22)}
                            </p>
                            <p className="p-1">
                                Rank: {rankDisplay}
                            </p>
                            <p className="p-1">
                                Village: {(await getUserInfo()).slice(4, 5)}
                            </p>
                            <p className="p-1">
                                Level: {(await getUserInfo()).slice(6, 7)}
                            </p>
                            <p className="p-1">
                                Experience: {(await getUserInfo()).slice(5, 6)}
                            </p>
                            <p className="p-1">
                                Yen: {(await getUserInfo()).slice(19, 20)} Y
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
                                alt="User Avatar"
                                width={250}
                                height={250}
                        />
                        </div>


                    </div>
                    <div className="border-y-2 border-white border-r-2 p-2">
                        <h1>Placeholder</h1>
                        <p className="p-1">
                            Health: {(await getUserInfo()).slice(7, 8)} /  {(await getUserInfo()).slice(8, 9)}
                        </p>
                        <p className="p-1">
                            Energy: {(await getUserInfo()).slice(9, 10)} / {(await getUserInfo()).slice(10, 11)}
                        </p>
                        <p className="p-1">Regeneration Rate: TBI</p>



                    </div>
                    <div className="border-white border-2">
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                        <p className="p-1">
                            Rank: {rankDisplay}
                        </p>
                    </div>
                    <div className="border-y-2 border-white border-r-2 p-2">
                        <h1>Placeholder</h1>
                        <p className="p-1">
                            stat1: {(await getUserInfo()).slice(11, 12)}
                        </p>
                        <p className="p-1">
                            stat2: {(await getUserInfo()).slice(12, 13)}
                        </p>
                        <p className="p-1">
                            stat3: {(await getUserInfo()).slice(13, 14)} 
                        </p>
                        <p className="p-1">
                            stat4: {(await getUserInfo()).slice(14, 15)} 
                        </p>
                        <p className="p-1">
                            stat5: {(await getUserInfo()).slice(15, 16)}
                        </p>
                        <p className="p-1">
                            stat6: {(await getUserInfo()).slice(16, 17)}
                        </p>
                        <p className="p-1">
                            stat7: {(await getUserInfo()).slice(17, 18)}
                        </p>
                        <p className="p-1">
                            stat8: {(await getUserInfo()).slice(18, 19)}
                        </p>


                    </div>

                </div>
            </div>
        </main>
    );
}
