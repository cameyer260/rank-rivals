"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );

    // return (
    //     <div className="flex min-h-screen justify-center items-center">
    //         <h1 className="font-bold text-xl">HOME PAGE</h1>
    //     </div>
    // );
}
