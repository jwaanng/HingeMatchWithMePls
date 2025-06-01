import React from "react";

interface PhotoProp {
    photo: string;
    desc?: string; // OPTIONAL DESCRIPTIONNNNNN
}

export default function Photo({ photo, desc }: PhotoProp) {
    return (
        <div className="relative bg-white rounded-lg width-full my-2 w-full aspect-square group">
            {/* pictures of me hinge style lol */}
            <img
                src={photo}
                alt="Photo"
                className="rounded-lg w-full h-full object-cover aspect-square"
            />
            {desc && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-60 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
                    <p className="text-white text-sm font-sanserif text-center px-4 py-2 opacity-100">{desc}</p>
                </div>
            )}
        </div>
    );
}
