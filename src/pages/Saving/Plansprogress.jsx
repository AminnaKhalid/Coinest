import React, { useState, } from "react";
import threedots from "./assets/threevertical.png";
import saving2 from "./assets/saving2.png"
import saving3 from "./assets/saving3.png"
import plus from "./assets/plus.png";
const Plansprogress = ({setSelectedPlan}) => {
  const [isOpen, setIsOpen] = useState(false);
const savingdata = [
  {
    savingname: "Emergency Fund",
    amount: "$47,000",
    progress: 90,
    icon: saving2,
  },
  {
    savingname: "Vacation Fund",
    amount: "$56,100",
    progress: 80,
    icon: saving2,
  },
  {
    savingname: "Retirement Fund",
    amount: "$15,000",
    progress: 60,
    icon: saving3,
  },
  {
    savingname: "Home Down Payment",
    amount: "$49,000",
    progress: 55,
    icon: saving2,
  },
  {
    savingname: "Car Replacement Fund",
    amount: "$56,100",
    progress: 86,
    icon: saving2,
  },
  {
    savingname: "Education Fund",
    amount: "$15,000",
    progress: 89,
    icon: saving3,
  },
];

// for makung the cards active when click and display the data
const [activeIndex, setActiveIndex] = useState(null);
 
  return (
    <div className="card flex flex-col p-4">
      <div className="flex justify-between items-center relative">
        <span className="head text-lg font-semibold">Saving Plans</span>
        {/* custom dropdown  */}
        <div className="relative">
          <img
            src={threedots}
            alt="Options"
            className="w-8 h-8 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-4 -mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg z-10">
              <ul className="text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
                  All
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
                  In Progress
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Pending
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* now plans progress here --- the cards */}
      <div className="block">
        {savingdata.map((items, index) => (
          <div
            className={`card mt-4 ${
              activeIndex === index ? "bg-[#ECF4E9]" : "bg-white"
            }`}
            key={items.savingname}
            onClick={() => {
              setActiveIndex(index);
              setSelectedPlan(items);
            }}
          >
            <div className="flex flex-col space-y-6">
              <div className="flex justify-between flex-col md:flex-row">
                <div className="flex items-center space-x-2">
                  <img src={items.icon} alt="" className="h-12 w-12" />
                  <div className="flex flex-col">
                    <span className="text-lg font-medium">
                      {items.savingname}
                    </span>
                    <span className=" font-medium text-2xl">
                      {items.amount}{" "}
                      <span className="text-[16px] text-[#6B7271]">
                        /$5,000
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-row xl:flex-col text-black font-medium text-[16px] mt-5 md:mt-0">
                  {items.progress} %
                  <span className="text-[#1E4841] font-medium text-sm ml-2 xl:ml-0">
                    in progress
                  </span>
                </div>
              </div>
              {/* custom progress bar */}
              <div className="w-full rounded-full bg-[#BBF49C]  rounded-r-full rounded-l-2xl h-3">
                <div
                  className="h-full bg-[#1E4841] transition-all border-r-6 border-white duration-500 ease-in-out rounded-l-full rounded-r-2xl"
                  style={{ width: `${items.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}

        <button className="flex bg-[#1E4841] w-full py-3 px-2 text-white text-center items-center justify-center rounded-xl mt-4 cursor-pointer">
          <img src={plus} alt="" className="h-6 w-6 mr-2 " />
          Add Plan
        </button>
      </div>
    </div>
  );
};

export default Plansprogress;
