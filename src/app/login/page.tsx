"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const submit = async () => {};

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={submit} className="flex flex-col items-center h-3/4">
                <h1 className="text-4xl font-bold mb-2">Login</h1>
                <input
                    type="email"
                    value={email}
                    className="border-2 mb-2 rounded-full text-black px-2 outline-none"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email"
                />
                <input
                    type="password"
                    value={password}
                    className="border-2 mb-2 rounded-full text-black px-2 outline-none"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                />
                <button
                    type="submit"
                    className="border-2 border-white rounded-full px-2 font-semibold text-white"
                >
                    Submit
                </button>
                <p>Don&apos;t have an account? <Link href={"/signup"} className="text-sky-400 underline font-semibold">Sign up.</Link></p>
            </form>
        </div>
    );
}
