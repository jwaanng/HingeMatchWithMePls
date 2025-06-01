"use client";

import React from "react";

export default function LikeButton() {
    const handleClick = () => {
        window.open("https://www.linkedin.com/in/jwanng/", "_blank");
    };

    return (
        <div className="relative">
            <button
                onClick={handleClick}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 hover:scale-90"
            >
                <img src="/chat_icon.png" alt="Chat Icon" className="w-7 h-7" />
            </button>
        </div>
    );
}
