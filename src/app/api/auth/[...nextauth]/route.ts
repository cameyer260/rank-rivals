import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";
import { SupabaseAdapter } from "@auth/supabase-adapter";

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
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
