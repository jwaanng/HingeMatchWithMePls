import React from "react";

interface TextPromptProps {
    question: string;
    answer: string | React.ReactNode; 
}

export default function TextPrompt({ question, answer }: TextPromptProps) {
    return (
        <div dir="ltr" className="text-prompt space-y-4 bg-white py-10 px-6 rounded-lg width-full my-2">
            <p className="text-sm font-semibold" style={{ fontFamily: "'Roboto', sans-serif" }}>{question}</p>
            <p className="text-2xl font-semibold pe-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                {answer}
            </p>
        </div>
    );
}
