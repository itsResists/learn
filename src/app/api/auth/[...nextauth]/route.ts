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
            name: "Sign in",
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
                    // avatar: "https://i.imgur.com/pBAPPAd.gif",
                    // rank: "4",
                    // gender: user.gender,
                    // village: user.village,
                    // stat1: user.stat1,
                    // stat2: user.stat2,
                    // stat3: user.stat3,
                    // stat4: user.stat4,

                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            // console.log("Session Callback", { session, token });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    username: token.username,
                    // avatar: token.avatar,
                    // randomKey: token.randomKey,
                    // gender: token.gender,
                    // rank: token.rank,
                    // village: token.village,
                    // stat1: token.stat1,
                    // stat2: token.stat2,
                    // stat3: token.stat3,
                    // stat4: token.stat4,


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
                    // randomKey: u.randomKey,
                    // gender: u.gender,
                    // rank: u.rank,
                    // avatar: u.avatar,
                    // village: u.village,
                    // stat1: u.stat1,
                    // stat2: u.stat2,
                    // stat3: u.stat3,
                    // stat4: u.stat4,

                };
            }
            return token;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
