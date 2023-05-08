import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";



export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const getUser: any = await prisma.user.findUnique({

        where: {
            id: userId,

        },
        select: {
            stat1: true,
            stat2: true,
            stat3: true,
            stat4: true,
            experience: true,

        },
    });
    try {
        const { training } = (await req.json())
        const oldExperience = getUser.experience
        const newTrain: number = parseInt(training)
        {
            const user = await prisma.user.update({
                where: {
                    id: userId,
                },
                data: {
                    stat1: getUser.stat1 + newTrain,
                    experience: parseInt(getUser.experience + (newTrain * 10)),
                },
            });

            return NextResponse.json({
                user: {
                    stat1: user.stat1,
                    experience: user.experience,
                    oldExperience: oldExperience,
                },
            });
        }
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({
                status: "error",
                message: error.message,
            }),
            { status: 500 }
        );
    }
}