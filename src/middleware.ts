export { default } from "next-auth/middleware";
export const config = {
    matcher: ["/games", "/leaderboard", "/profile", "/settings"],
};
