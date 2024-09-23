"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="w-96 flex items-center justify-center flex-col font-bold text-xl">
                <h1>
                    Please wait while we load the content...
                </h1>
                <DotLottieReact
                    src="/assets/loading-animation.json"
                    loop
                    autoplay
                />
            </div>
        </div>
    );
}
