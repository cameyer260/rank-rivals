"use client"

import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import Navbar from "./navbar";

export default function ClientWrapper({
    children, session,
}: {
    children: React.ReactNode,
    session?: Session | null,
}) {
    return (
        <SessionProvider session={session}>
            <Navbar />
            {children}
        </SessionProvider>
    );
}