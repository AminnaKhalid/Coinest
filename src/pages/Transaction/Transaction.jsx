import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import search from "../components/assets/search.png";
import Dropdown from "../components/Dropdown"
import CustomDropdown from "./CustomDropdown";
import Table from "./Table";
const Transaction = () => {
  
  return (
    <>
      <div className="flex bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col min-h-screen w-full bg-white rounded-tl-4xl">
          <Heading heading={"Transactions"} />
          <div className="card p-3 m-3">
            {/* items in the start */}
            <div className="flex xl:justify-between justify-center flex-col space-y-3 md:flex-row space-x-2">
              <div className="flex flex-row space-x-4 justify-center md:justify-start items-center mt-3 ">
                {/* serach bar */}
                <div className="flex items-center">
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
                </div>
                {/* dropdown of all category */}
                <Dropdown
                  defaultOption="All Category"
                  options={[
                    "All Category",
                    "Pending Category",
                    "Completed Category",
                  ]}
                />
                <Dropdown
                  defaultOption="All Account"
                  options={[
                    "All Account",
                    "Pending Account",
                    "Completed Account",
                  ]}
                />
              </div>
              <div className="flex flex-row items-center space-x-4 justify-center md:justify-start">
                <CustomDropdown />
                {/* button */}
                <button className="text-sm text-white font-medium px-2 py-2 bg-[#1E4841] rounded-lg">
                  Download
                </button>
              </div>
            </div>
            {/* table */}
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
