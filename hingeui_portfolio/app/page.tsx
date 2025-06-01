import Profile from "./components/Profile";
import LikeButton from "./components/LikeButton";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-8 sm:p-20">
      {/* phone frame following my iphone 12! */}
      <div className="relative w-[90vw] max-w-[350px] aspect-[390/844] bg-gray-100 rounded-[40px] shadow-lg border-8 border-black overflow-hidden">
        {/* top notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-[30px] bg-black rounded-b-[20px]"></div>
        {/* phone content/hing3e */}
        <div className="absolute top-[30px] bottom-0 left-0 right-0 p-4 bg-gray-100 overflow-y-scroll no-scrollbar">
          <Profile />
        </div>
        {/* chat button */}
        <div className="absolute bottom-5 right-5">
          <LikeButton />
        </div>
      </div>
    </div>
  );
}
