import React from "react";
import TextPrompt from "./TextPrompt";
import Photo from "./Photo";
import InfoOverview from "./InfoOverview";

export default function Profile() { 
    {/* TODO (1): work on image component, swiping func */}
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 ">

            <Photo
                photo="/with_cat.jpg"  
                desc="i love cats! but im allergic>"       
            />

            <TextPrompt
                question="What if I told you that"
                answer="I'm Jessie Wang, third year CS @ UofT, prev fullstack @ Vosyn, eager to work @ Hinge"
            />

            <InfoOverview
                items={[
                    { icon: "💼", text: "Previous Fullstack @ Vosyn" },
                    { icon: "🎓", text: "University of Toronto" },
                    {icon: "🔍", text: "Interested in Mobile Dev"}
                ]}
            />

            <Photo
                photo="/hackathon_winning_proj.JPG"  
                desc="Hackathon winning project: Virtual Clothing Try-On"       
            />

            <TextPrompt
                question="Unusual skills"
                answer="Attending (now planning) hackathons, using documentations, React(??)"
            />

            <Photo
                photo="/outdoor.jpg"       
            />

            <TextPrompt
                question="My greatest strength"
                answer={<> Collaborative, sometimes creative, kind. <br /> <br />
                Matchmaker (3 successful couples so far!) <br /> <br />
                Chat with me to learn more !
              </>}
            />

            <Photo
                photo="/boardgames.jpg"  
                desc="Love socializing through boardgames!"       
            />

            <Photo
                photo="/rotman_case.png"  
                desc="Finalist for a Rotman Fintech Case Competition"       
            />
        </div>
    );
}