"use client"

import { useState } from "react";
import Link from "next/link";

export default function Signup() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    const submit = async () => {};

    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={submit} className="flex flex-col items-center h-3/4">
                <h1 className="text-4xl font-bold mb-2">Sign Up</h1>
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
                <input
                    type="text"
                    value={username}
                    className="border-2 mb-2 rounded-full text-black px-2 outline-none"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="username"
                />
                <button
                    type="submit"
                    className="border-2 border-white rounded-full px-2 font-semibold text-white"
                >
                    Submit
                </button>
                <p>Already have an account? <Link href={"/login"} className="text-sky-400 underline font-semibold">Login.</Link></p>
            </form>
        </div>
    );
}