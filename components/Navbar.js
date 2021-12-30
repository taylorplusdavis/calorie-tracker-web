import {
  BellIcon,
  HeartIcon,
  HomeIcon,
  UserCircleIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [button, setButton] = useState("home");

  const navText = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="flex flex-col w-24 bg-slate-700 h-screen items-center">
      {/* Home button */}
      <div className="homeButtonContainer w-full h-1/3 flex flex-col">
        <HomeIcon
          onClick={() => setButton("home")}
          className="text-slate-100 p-8 glow cursor-pointer mb-20"
        />
        <div className="buttonContainer -rotate-90 bg-slate-600 text-center p-2 cursor-default rounded-full w-[12rem] self-center">
          <AnimatePresence exitBeforeEnter>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="text-slate-100 text-lg font-extrabold rounded-full whitespace-nowrap"
            >
              {button === "home" && "Home"}
              {button === "notifications" && "Notifications"}
              {button === "health" && "Calorie Tracking"}
              {button === "messages" && "Messages"}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Rest of buttons */}
      <div className="buttonsContainer flex flex-col space-y-28 w-full items-center">
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
    </div>
  );
}

export default Navbar;
