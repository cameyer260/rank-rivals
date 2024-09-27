import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import GitHubProvider from "next-auth/providers/github";

export const options: NextAuthOptions = {
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
    // callbacks: {
    //     async signIn() {

    //     }
    // }
};
