import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { username, email, password, gender, village, } = (await req.json()) as {
            username: string;
            email: string;
            password: string;
            gender: string;
            village: string

        };
        const hashed_password = await hash(password, 12);

        if (!username || !password) {
            return new NextResponse(
                JSON.stringify({
                    status: "error",
                    message: "Please fill out all fields",
                }),
                { status: 400 }
            );
        }
        const exist = await prisma.user.findUnique({
            where: {
                username
            }
        });


        if (exist) {
            throw new Error('User already exists')
        }

        const user = await prisma.user.create({
            data: {
                username,
                email: email.toLowerCase(),
                password: hashed_password,
                gender,
                village,
                stat1: 10,
                stat2: 10,
                stat3: 10,
                stat4: 10,
                stat5: 10,
                stat6: 10,
                stat7: 10,
                stat8: 10,
                level: 1,
                rank: "0",
                experience: 0,
                yen: 1000,
                avatar: "https://i.imgur.com/pBAPPAd.gif",
                health: 100,
                maxHealth: 100,
                energy: 100,
                maxEnergy: 100,
            },
        });

        return NextResponse.json({
            user: {
                username: user.username,
                email: user.email,
            },
        });
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
