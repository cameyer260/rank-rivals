"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
    const [toggle, setToggle] = useState<boolean>(false);
    const { data } = useSession();
    
    return (
        <div className="flex items-center p-4 text-2xl font-bold border-b-2 border-white">
            <div className="flex space-x-6">
                <Link href={"/"}>Home</Link>
                <Link href={"/profile"}>Profile</Link>
                <Link href={"/leaderboard"}>Leaderboard</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/games"}>Games</Link>
            </div>
            <div className="ml-auto flex items-center space-x-6">
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
                        transition={{
                            type: "spring",
                            stiffness: 700,
                            damping: 30,
                        }}
                    />
                </div>
                <h1>{data?.user?.name}</h1>
                {data?.user?.image && (
                    <Image src={data.user.image} alt="profile picture" width={50} height={50} className="rounded-full"/>
                )}
            </div>
        </div>
    );
}
