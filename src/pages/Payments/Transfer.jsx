import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import topup from "../Dashboard/assets/topup.png";
import history from "../Dashboard/assets/history.png";
import transfer from "../Dashboard/assets/transfer.png";
import search from "../components/assets/search.png";
import filter from "./assets/filter.png";
import Transferform from "./Transferform";
const Transfer = () => {
  const data = [
    { icon: topup, name: "Top Up" },
    { icon: transfer, name: "Transfer" },
    { icon: transfer, name: "Request" },
    { icon: history, name: "History" },
  ];


//   transfer wala data
const transfered = [
  {
    name: "Amna Khalid",
    number: "1234567889",
    price: "$560",
    status: "Pending",
  },
  {
    name: "Amna Khalid",
    number: "1234567889",
    price: "$560",
    status: "Pending",
  },
  {
    name: "Amna Khalid",
    number: "1234567889",
    price: "$560",
    status: "successful",
  },
  {
    name: "Amna Khalid",
    number: "1234567889",
    price: "$560",
    status: "Pending",
  },
  {
    name: "Amna Khalid",
    number: "1234567889",
    price: "$560",
    status: "successful",
  },
];

  return (
    <>
      <div className="flex  bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen rounded-tl-4xl bg-white md:p-4 p-0 ">
          <Heading heading={"Transfer"} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* pehla section */}
            <div className="md:col-span-2 xl:col-span-1 px-4 md:px-0">
              {/* the list of 4 icons */}
              <div className="flex flex-row bg-[#ECF4E9] rounded-xl mt-4 overflow-hidden">
                {data.map((items, index) => (
                  <div
                    key={index}
                    className={`flex-1 flex flex-col py-2 md:py-3 px-2 md:px-3 justify-center items-center min-w-0 ${
                      index !== data.length - 1 ? "border-r-2 border-white" : ""
                    }`}
                  >
                    <img
                      src={items.icon}
                      alt={items.name}
                      className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0"
                    />
                    <span className="text-[#1E4841] text-[10px] xs:text-xs md:text-sm font-medium whitespace-nowrap overflow-hidden overflow-ellipsis text-center w-full">
                      {items.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* filter and search bar */}
              <div className="flex justify-between mt-4 items-center">
                {/* serach bar */}
                <div className="relative lg:block">
                  <img
                    src={search}
                    alt="search"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
                  />
                  <input
                    type="text"
                    placeholder="Search account"
                    className=" py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E4841] pr-8 px-5 bg-[#EFF0F0] "
                  />
                </div>
                <img src={filter} alt="" className="w-10 h-10 cursor-pointer" />
              </div>
              {[
                { name: "John Doe", number: "1234 5678 9012 3456" },
                { name: "Jane Smith", number: "9876 5432 1098 7654" },
                { name: "Jane Smith", number: "9876 5432 1098 7654" },
                { name: "Jane Smith", number: "9876 5432 1098 7654" },
                { name: "Jane Smith", number: "9876 5432 1098 7654" },
                { name: "Jane Smith", number: "9876 5432 1098 7654" },

                { name: "Jane Smith", number: "9876 5432 1098 7654" },
              ].map((items, index) => (
                <div className="flex flex-col gap-4 mt-4" key={index}>
                  <div className="card flex flex-row items-center space-x-2">
                    <div className="h-11 w-11 bg-[#BBF49C] rounded-full"></div>
                    <div className="flex flex-col space-y-1">
                      <span className="font-semibold text-[16px]">
                        {items.name}
                      </span>
                      <span className="text-gray-400 text-sm font-medium">
                        {items.number}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* dosra section */}
            <div className="md:col-span-2 xl:col-span-3 mt-4 card">
              <div className="flex card flex-col">
                <div className="flex justify-between">
                  <span className="head">Recent Transfer</span>
                  <span className="cursor-pointer text-[16px] text-[#1E4841]">
                    Show More
                  </span>
                </div>

                {/* cards ana han yahan  */}
                <div className="flex overflow-x-auto gap-4 mt-4 px-1 scroll-smooth scrollbar-hide">
                  {transfered.map((items, index) => (
                    <div
                      key={index}
                      className="min-w-[250px] card flex justify-between  px-2 bg-white rounded-lg shadow"
                    >
                      <div className="flex space-x-2">
                        <div className="h-11 w-11 bg-[#BBF49C] rounded-full"></div>
                        <div className="flex flex-col space-y-1">
                          <span className="font-semibold text-[14px]">
                            {items.name}
                          </span>
                          <span className="text-gray-400 text-sm font-medium">
                            {items.number}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col text-right">
                        <div>{items.price}</div>
                        <div>
                          {items.status === "successful" ? (
                            <span className="text-green-600 text-sm font-medium">
                              Successful
                            </span>
                          ) : (
                            <span className="text-yellow-500 text-sm font-medium">
                              Pending
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Transferform />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transfer;
