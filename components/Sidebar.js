import {
  BellIcon,
  HeartIcon,
  HomeIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Sidebar() {
  const [button, setButton] = useState("home");

  return (
    <div className=" flex flex-col w-24 bg-slate-700 h-screen items-center justify-around">
      {/* Home button */}
      <div className="homeButtonContainer w-full flex flex-col items-center">
        <HomeIcon
          onClick={() => setButton("home")}
          className="text-slate-100 p-8 glow cursor-pointer"
        />
        <div className="hidden md:inline-flex buttonContainer cursor-default rounded-full my-12">
          <p className="text-slate-100 text-lg font-extrabold -rotate-90 bg-slate-600 py-2 px-5 rounded-full whitespace-nowrap">
            {button === "home" && "Home"}
            {button === "notifications" && "Notifications"}
            {button === "health" && "Calorie Tracking"}
            {button === "messages" && "Messages"}
          </p>
        </div>
      </div>

      {/* Rest of buttons */}
      <div className="buttonsContainer flex flex-col justify-between w-full items-center">
        <div
          className="buttonContainer w-full cursor-pointer -rotate-90 relative glow-parent"
          onClick={() => setButton("notifications")}
        >
          <div className="rotate-90">
            <hr className="w-2 h-2 bg-orange-400 rounded-full absolute top-8 right-9 " />
            <BellIcon className="text-slate-600 p-8 glow-child text-left" />
          </div>
        </div>
        <div
          className="buttonContainer w-full cursor-pointer glow transition-all ease-out duration-100"
          onClick={() => setButton("health")}
        >
          <HeartIcon className="text-slate-600 p-8 glow-child" />
        </div>
        <div
          className="buttonContainer w-full cursor-pointer glow transition-all ease-out duration-100"
          onClick={() => setButton("messages")}
        >
          <ViewGridIcon className="text-slate-600 p-8 glow-child" />
        </div>
      </div>
      <br />
    </div>
  );
}

export default Sidebar;
