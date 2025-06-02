import React from "react";
import Dropdown from "../components/Dropdown";
import badge from "../Dashboard/assets/badge1.png";
import BarChart from "./BarChart";
const Portfoliovalue = () => {
  const options = ["Last 10 Months", "Last 12 Month", "Last 6 Month"];

  return (
    <>
      <div className="card">
        <div className="flex justify-between">
          <span className="head">Portfolio Value</span>
          <Dropdown options={options} defaultOption="Last 10 Months" />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-normal">Total Value</span>
          <div className="flex items-center space-x-2">
            <span className="text-2xl text-[#1E4841] font-bold">
              $349,256 <b className="text-[#6B7271] text-xl">.45</b>
            </span>
            <img src={badge} alt="" className="w-20 h-6" />
          </div>
          <div className="space-x-2">
            <span className="text-[#1E4841] font-medium">+$19,698.06</span>
            <span className="font-normal text-sm text-[#6B7271]">
              from last 10 months
            </span>
          </div>
        </div>
        <div className="py-4">
            <BarChart />
        </div>
      </div>
    </>
  );
};

export default Portfoliovalue;
