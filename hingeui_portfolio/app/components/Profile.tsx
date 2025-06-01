import React from "react";
import TextPrompt from "./TextPrompt";
import Photo from "./Photo";

export default function Profile() { 
    {/* TODO (1): work on image component, swiping func */}
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 ">
            <Photo
                photo="https://media.licdn.com/dms/image/D4D03AQH1b2k0a3c5WQ/profile-displayphoto-shrink_800_800/0/1698236262056?e=1701302400&v=beta&t=7d8f9g1jYx2sXy3J4Zl7m8z5n9b6q1kF4u8G5Zt5KpE"         
            />

            <TextPrompt
                question="What if I told you that"
                answer="My name is Jessie Wang, third year CS @ UofT, eager to work @ Hinge"
            />

            <Photo
                photo="/hackathon_winning_proj.jpg"  
                desc="Hackathon winning project: Virtual Clothing Try-On"       
            />

            <TextPrompt
                question="Unusual skills"
                answer="Attending hackathons, startup experience, love for art"
            />
        </div>
    );
}