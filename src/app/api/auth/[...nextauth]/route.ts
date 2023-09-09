import { prisma } from "@/lib/prisma";
import { compare } from "bcryptjs";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "Username",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                });

                if (!user || !(await compare(credentials.password, user.password))) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    username: user.username,
                    village: user.village,
                    gender: user.gender,
                    avatar: user.avatar,
                    rank: user.rank,
                    level: user.level,
                    experience: user.experience,
                    yen: user.yen,
                    health: user.health,
                    maxHealth: user.maxHealth,
                    energy: user.energy,
                    maxEnergy: user.maxEnergy,
                    stat1: user.stat1,
                    stat2: user.stat2,
                    stat3: user.stat3,
                    stat4: user.stat4,
                    stat5: user.stat5,
                    stat6: user.stat6,
                    stat7: user.stat7,
                    stat8: user.stat8,



                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                    village: token.village,
                    gender: token.gender,
                    avatar: token.avatar,
                    rank: token.rank,
                    level: token.level,
                    experience: token.experience,
                    yen: token.yen,
                    health: token.health,
                    maxHealth: token.maxHealth,
                    energy: token.energy,
                    maxEnergy: token.maxEnergy,
                    stat1: token.stat1,
                    stat2: token.stat2,
                    stat3: token.stat3,
                    stat4: token.stat4,
                    stat5: token.stat5,
                    stat6: token.stat6,
                    stat7: token.stat7,
                    stat8: token.stat8,


                },
            };
        },
        jwt: ({ token, user }) => {
            // console.log("JWT Callback", { token, user });
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    username: u.username,
                    village: u.village,
                    gender: u.gender,
                    avatar: u.avatar,
                    rank: u.rank,
                    level: u.level,
                    experience: u.experience,
                    yen: u.yen,
                    health: u.health,
                    maxHealth: u.maxHealth,
                    energy: u.energy,
                    maxEnergy: u.maxEnergy,
                    stat1: u.stat1,
                    stat2: u.stat2,
                    stat3: u.stat3,
                    stat4: u.stat4,
                    stat5: u.stat5,
                    stat6: u.stat6,
                    stat7: u.stat7,
                    stat8: u.stat8,

                };
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
