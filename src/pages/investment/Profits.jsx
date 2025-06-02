import React from "react";
import Dropdown from "../components/Dropdown";
import badge from "../Dashboard/assets/badge1.png"
import StackChart from "./StackChart"
const Profits = () => {
  const options =["Last 8 Years", "Last 5 Years", "Last 9 Years"]
  return (
    <>
      <div className="card">
        <div className="flex justify-between items-center">
          <span className="head">Profits</span>
          <Dropdown options={options} defaultOption="This Year" />
        </div>
         <div className="flex flex-col space-y-1">
                  <span className="text-sm font-normal">Total Profits</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl text-[#1E4841] font-bold">
                      $349,256 <b className="text-[#6B7271] text-xl">.45</b>
                    </span>
                    <img src={badge} alt="" className="w-20 h-6" />
                  </div>
                  <div className="space-x-2">
                    <span className="text-[#1E4841] font-medium">+$19,698.06</span>
                    <span className="font-normal text-sm text-[#6B7271]">
                      from last year
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <StackChart />
                </div>
      </div>
    </>
  );
};

export default Profits;
