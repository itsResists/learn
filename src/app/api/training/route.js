import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export async function POST(req) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const getUser = await prisma.user.findUnique({

        where: {
            id: userId,

        },
        select: {
            stat1: true,
            stat2: true,
            stat3: true,
            stat4: true,
            experience: true,
            energy: true,

        },
    });
    try {
        const currentEnergy = session.user.energy
        if (currentEnergy < 10) {

            return (
                new NextResponse(
                    JSON.stringify({
                        status: "error",
                        message: "You do not have enough energy to train dumbass.",
                    }),
                    { status: 500 }
                )
            );

        } else {
            const { training } = (await req.json())
            const oldExperience = getUser.experience
            const newTrain = parseInt(training)
            let energyCost = 10 //! Adjust energy cost at a later time
            {
                const user = await prisma.user.update({
                    where: {
                        id: userId,
                    },
                    data: {
                        stat1: getUser.stat1 + newTrain,
                        experience: session.user.experience,
                        energy: session.user.energy - energyCost,
                    },
                });


                return NextResponse.json({
                    user: {
                        stat1: user.stat1,
                        experience: user.experience,
                        oldExperience: oldExperience,
                        energy: user.energy,
                    },
                });
            }
        }
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
}
