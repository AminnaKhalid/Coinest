import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import icon1 from "./assets/icon1.png";

const Dropdown = ({ icon = icon1, title = "Healthcare", items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full">
      {/* Header card */}
      <div
        className={`card relative p-3 rounded-lg border cursor-pointer flex items-center justify-between bg-white hover:bg-gray-100 ${
          isOpen ? "border-[#C2F1A5] bg-[#F6FBF1]" : "border-gray-300"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <img src={icon} alt="icon" className="h-6 w-6" />
          <span className="ml-3 font-normal text-black">{title}</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown list */}
      {isOpen && (
        <div className="mt-1">
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`flex items-center px-4 py-2 cursor-pointer rounded-md ml-6 relative ${
                  isActive ? "bg-[#F0FAE6]" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {/* Left border indicator */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${
                    isActive ? "bg-[#C2F1A5]" : "bg-gray-300"
                  }`}
                ></div>

                {/* Icon and label */}
                <img src={item.icon} alt="icon" className="h-6 w-6 z-10 ml-2" />
                <span className="ml-3  text-black font-normal z-10 py-1">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
