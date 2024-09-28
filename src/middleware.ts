import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
        const token = req.nextauth.token; // Get the token
        if (!token) {
            // Redirect to sign in if no token
            return NextResponse.redirect(new URL("/api/auth/signin", req.url));
        }
        return NextResponse.next(); // Continue if authenticated
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token, // Check if the token exists
        },
    }
);

export const config = {
    matcher: ["/games", "/leaderboard", "/profile", "/settings"],
};
