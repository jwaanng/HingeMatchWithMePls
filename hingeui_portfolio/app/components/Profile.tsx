import React from "react";
import TextPrompt from "./TextPrompt";

export default function Profile() { 
    {/* TODO (1): work on image component, swiping func*/}
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 ">
            <TextPrompt
                question="What if I told you that"
                answer="My name is Jessie Wang, third year CS @ UofT, eager to work @ Hinge"
            />

            <TextPrompt
                question="My greatest strength"
                answer="My positivity, eagerness to learn, creativity, matchmaking"
            />
        </div>
    );
    }