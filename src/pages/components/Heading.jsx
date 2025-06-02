import React from "react";
import notification from "./assets/notificationhead.png";
import chat from "./assets/chathead.png";
import search from "./assets/search.png";
import smalllogo from "./assets/iconsmallmedium.png";
import { Menu } from "lucide-react";

const Heading = ({heading}) => {
  return (
    <>
      {/* For large and medium screens */}
      <div className="md:block hidden p-3 ">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-[#1E4841]">{heading}</div>

          {/* Search and icons */}
          <div className="flex items-center space-x-6">
            <div className="relative hidden lg:block">
              <img
                src={search}
                alt="search"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
              <input
                type="text"
                placeholder="Search Placeholder"
                className=" py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E4841] pr-15 px-5 bg-[#EFF0F0] "
              />
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={notification}
                alt="notification"
                className="w-10 h-10"
              />
              <img src={chat} alt="chat" className="w-10 h-10" />
            </div>

            <div className="flex items-center space-x-2 justify-center">
              <span className="text-[#1E4841] font-medium">Amna Khalid</span>
              <div className="w-8 h-8 rounded-full bg-[#BBF49C]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* For small screens */}
      <div className="md:hidden flex p-4 bg-green-100">
        <img src={smalllogo} alt="logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-[#1E4841] flex justify-center items-center">{heading}</h1>
      </div>
    </>
  );
};

export default Heading;
