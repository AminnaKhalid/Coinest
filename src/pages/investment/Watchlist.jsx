import React from "react";
import badge from "../Dashboard/assets/Badge.png";
import icon1 from "./assets/watchlist1.png";
import icon2 from "./assets/watchlist.png";
import badge1 from "../Dashboard/assets/badge1.png";
import Dropdown from "../components/Dropdown"
import HalfPie from "./Halfpie";
const Watchlist = () => {

  const watchlist = [
    {
      icon: icon1,
      company: "AMAZON",
      email: "Amazon.com Inc.",
      amount: "$3,204.50",
      badge: badge,
    },
    {
      icon: icon2,
      company: "AMAZON",
      email: "Amazon.com Inc.",
      amount: "$3,204.50",
      badge: badge1,
    },
    {
      icon: icon1,
      company: "AMAZON",
      email: "Amazon.com Inc.",
      amount: "$3,204.50",
      badge: badge,
    },
    {
      icon: icon2,
      company: "AMAZON",
      email: "Amazon.com Inc.",
      amount: "$3,204.50",
      badge: badge1,
    },
    {
      icon: icon1,
      company: "AMAZON",
      email: "Amazon.com Inc.",
      amount: "$3,204.50",
      badge: badge,
    },
    {
      icon: icon2,
      company: "AMAZON",
      email: "Amazon.com Inc.",
      amount: "$3,204.50",
      badge: badge1,
    },
 
  ];

  // options for the dropdown
  const options =["Today", "Last 7 Days", "Last 90 Days"]
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* first watchlist section is here  */}
        <div className="card flex flex-col ">
          <div className="flex items-center justify-between">
            <span className="head">Watchlist</span>
            <span className="text-[#1E4841] font-normal text-lg cursor-pointer">
              View All
            </span>
          </div>

          <div className="flex flex-col justify-center py-4 ">
            {watchlist.map((data) => (
              <div className="flex justify-between items-center space-y-5 ">
                <div className="flex space-x-1 items-center">
                  <img
                    src={data.icon}
                    alt=""
                    className="md:h-12 md:w-12 h-10 w-10"
                  />
                  <div className="flex flex-col justify-center ml-1">
                    <span className="text-sm md:text-lg font-medium">
                      {data.company}
                    </span>
                    <span className="text-[#6B7271] font-normal">
                      {data.email}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center space-y-1">
                  <span className="text-sm md:text-[16] font-bold">
                    {data.amount}
                  </span>
                  <img
                    src={data.badge}
                    alt=""
                    className="w-16 md:w-18 md:h-5 h-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* second section assets */}
        <div className="card flex flex-col">
          <div className="flex justify-between z-50">
            <span className="head">Assets</span>
            <Dropdown options={options} defaultOption="Last 10 Months" />
          </div>
          <div>
            <HalfPie />
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchlist;
