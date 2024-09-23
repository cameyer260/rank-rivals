"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-96 flex items-center justify-center flex-col font-bold text-xl">
                <h1 className="text-white text-center">
                    Oops! The page you&apos;re looking for doesn&apos;t exist.
                </h1>
                <DotLottieReact
                    src="/assets/not-found-animation.json"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
}
