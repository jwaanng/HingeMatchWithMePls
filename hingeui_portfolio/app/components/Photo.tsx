import React from "react";

interface PhotoProp {
    photo: string;
}

export default function Photo({ photo }: PhotoProp) {
    return (
        <div className="bg-white rounded-lg width-full my-2 w-full aspect-square">
            {/* picturs of me hinge style lol */}
            <img src={photo} alt="Photo" className="rounded-lg w-full object-cover" />
        </div>
    );
}
