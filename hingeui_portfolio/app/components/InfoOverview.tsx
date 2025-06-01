import React from "react";

interface InfoItem {
    icon: string;
    text: string;
}

interface InfoOverviewProps {
    items: InfoItem[];
}

export default function InfoOverview({ items }: InfoOverviewProps) {
    return (
        <div className="bg-white rounded-lg p-4 space-y-2 w-full my-2">
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div className="flex items-center space-x-2">
                        <span className="text-xl">{item.icon}</span>
                        <p className="text-sm font-medium">{item.text}</p>
                    </div>
                    {index < items.length - 1 && (
                        <div className="border-t border-gray-300 my-2"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
