import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import jwt from "jsonwebtoken";
import { Session, User } from "next-auth";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId:
                process.env.GOOGLE_CLIENT_ID ||
                (() => {
                    throw new Error(
                        "GOOGLE_CLIENT_ID .env variable is undefined."
                    );
                })(),
            clientSecret:
                process.env.GOOGLE_CLIENT_SECRET ||
                (() => {
                    throw new Error(
                        "GOOGLE_CLIENT_SECRET .env variable is undefined."
                    );
                })(),
        }),
        DiscordProvider({
            clientId:
                process.env.DISCORD_CLIENT_ID ||
                (() => {
                    throw new Error(
                        "DISCORD_CLIENT_ID .env variable is undefined."
                    );
                })(),
            clientSecret:
                process.env.DISCORD_CLIENT_SECRET ||
                (() => {
                    throw new Error(
                        "DISCORD_CLIENT_SECRET .env variable is undefined>"
                    );
                })(),
        }),
        GitHubProvider({
            clientId:
                process.env.GITHUB_CLIENT_ID ||
                (() => {
                    throw new Error(
                        "GITHUB_CLIENT_ID .env variable is undefined."
                    );
                })(),
            clientSecret:
                process.env.GITHUB_CLIENT_SECRET ||
                (() => {
                    throw new Error(
                        "GITHUB_CLIENT_SECRET .env variable is undefined>"
                    );
                })(),
        }),
    ],
    adapter: SupabaseAdapter({
        url: process.env.SUPABASE_URL
            ? process.env.SUPABASE_URL
            : (() => {
                  throw new Error("not working");
              })(),
        secret: process.env.SUPABASE_SERVICE_ROLE_KEY
            ? process.env.SUPABASE_SERVICE_ROLE_KEY
            : (() => {
                  throw new Error("not working");
              })(),
    }),
    callbacks: {
        async session({ session, user }: { session: Session; user: User }) {
            const signingSecret = process.env.SUPABASE_JWT_SECRET;
            if (signingSecret) {
                const payload = {
                    aud: "authenticated",
                    exp: Math.floor(new Date(session.expires).getTime() / 1000),
                    sub: user.id,
                    email: user.email,
                    role: "authenticated",
                };
                session.supabaseAccessToken = jwt.sign(payload, signingSecret);
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
