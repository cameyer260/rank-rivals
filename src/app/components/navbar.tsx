"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <div className="flex space-x-6 p-4 text-2xl font-bold border-b-2 border-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/leaderboard"}>Leaderboard</Link>
            <Link href={"/settings"}>Settings</Link>
            <div
                className={`flex h-6 w-12 cursor-pointer rounded-full border border-black ${
                    toggle
                        ? "justify-start bg-white"
                        : "justify-end bg-slate-600"
                } p-[1px] mt-1`}
                onClick={() => setToggle(!toggle)}
            >
                <motion.div
                    className={`h-5 w-5 rounded-full ${
                        toggle ? "bg-black" : "bg-white"
                    }`}
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                />
            </div>
        </div>
    );
}
