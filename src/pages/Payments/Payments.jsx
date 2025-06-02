import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import topup from "../Dashboard/assets/topup.png";
import history from "../Dashboard/assets/history.png";
import transfer from "../Dashboard/assets/transfer.png";
import search from "../components/assets/search.png";
import filter from "./assets/filter.png";
import icon1 from "./assets/icon1.png";
// import { ChevronDown } from "lucide-react";
import CustomDropdown from "./CustomDropdown";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import Dropdown from "../Insights/Dropdown";
import { ChevronDown } from "lucide-react";
const Payments = () => {
  const data = [
    { icon: topup, name: "Top Up" },
    { icon: transfer, name: "Transfer" },
    { icon: transfer, name: "Request" },
    { icon: history, name: "History" },
  ];

  // data
  const internetOptions = [
    { label: "Comcast Xfinity", icon: icon2 },
    { label: "AT&T Internet and Cable", icon: icon2 },
    { label: "Spectrum Cable Services", icon: icon2 },
    { label: "Verizon Fios", icon: icon2 },
  ];

  // data for the cards on rights for recent payemnts
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
  const [status, setStatus] = useState("");

  const handleClick = (type) => {
    setStatus(type);
    setTimeout(() => {
      setStatus("");
    }, 2000);
  };

  // for customs dropdowns
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  const providerOptions1 = ["Comcast Xfinity", "AT&T Internet", "Spectrum"];
  const providerOptions2 = ["Verizon Fios", "T-Mobile", "Xfinity"];
  return (
    <>
      <div className="flex  bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen rounded-tl-4xl bg-white md:p-4 p-0 ">
          <Heading heading={"Payment"} />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              {/* serach */}
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

              <div className="flex flex-col space-y-3 mt-4">
                <CustomDropdown
                  icon={icon1}
                  title="Internet & Cable TV"
                  items={internetOptions}
                />

                <CustomDropdown
                  icon={icon3}
                  title="E-commerce"
                  items={internetOptions}
                />
                <CustomDropdown
                  icon={icon4}
                  title="Healthcare"
                  items={internetOptions}
                />
                <CustomDropdown
                  icon={icon1}
                  title="Insurance"
                  items={internetOptions}
                />
              </div>
            </div>

            {/* dosra section ha */}
            <div className="md:col-span-2 xl:col-span-3 mt-4 card">
              <div className="flex justify-between">
                <span className="head">Recent Payments</span>
                <span className="cursor-pointer text-[16px] text-[#1E4841]">
                  Show More
                </span>
              </div>
              <div className="flex overflow-x-auto gap-4 mt-4 px-1 scroll-smooth scrollbar-hide card">
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

              {/* neecha wala form and card */}
              <div className="card mt-4">
                <div className="flex justify-between">
                  <span className="head">Make a Payment</span>
                  <Dropdown />
                </div>

                <div className="flex flex-col bg-[#ECF4E9] rounded-lg p-3 mt-4">
                  <div className="font-semibold">Payment Account</div>
                  <div className="grid grid-cols-1 xl:grid-cols-2 bg-white rounded-lg p-3 gap-4 mt-4">
                    <img src={card1} alt="" className="object-cover" />
                    <img src={card2} alt="" className="object-cover" />{" "}
                  </div>
                  <form className="flex flex-col space-y-4">
                    <div>
                      <span className="font-medium text-black mb-1 block">
                        Service Provider
                      </span>

                      <div className="flex flex-col xl:flex-row gap-4">
                        {/* Dropdown 1 */}
                        <div className="relative w-full xl:w-1/2">
                          <div
                            onClick={() => {
                              setOpen1(!open1);
                              setOpen2(false);
                            }}
                            className="flex items-center justify-between px-3 py-2 border border-gray-400 rounded-lg bg-white text-black cursor-pointer"
                          >
                            <div className="flex items-center">
                              <img
                                src={icon1}
                                alt="icon"
                                className="h-5 w-5 mr-2"
                              />
                              <span>{selected1 || "Select Provider 1"}</span>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                open1 ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          {open1 && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow">
                              {providerOptions1.map((opt, index) => (
                                <div
                                  key={index}
                                  onClick={() => {
                                    setSelected1(opt);
                                    setOpen1(false);
                                  }}
                                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                  {opt}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Dropdown 2 */}
                        <div className="relative w-full xl:w-1/2">
                          <div
                            onClick={() => {
                              setOpen2(!open2);
                              setOpen1(false);
                            }}
                            className="flex items-center justify-between px-3 py-2 border border-gray-400 rounded-lg bg-white text-black cursor-pointer"
                          >
                            <div className="flex items-center">
                              <img
                                src={icon1}
                                alt="icon"
                                className="h-5 w-5 mr-2"
                              />
                              <span>{selected2 || "Select Provider 2"}</span>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 transition-transform ${
                                open2 ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          {open2 && (
                            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow">
                              {providerOptions2.map((opt, index) => (
                                <div
                                  key={index}
                                  onClick={() => {
                                    setSelected2(opt);
                                    setOpen2(false);
                                  }}
                                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                >
                                  {opt}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Virtual Account */}
                    <div className="flex flex-col">
                      <span className="font-medium text-black mb-1">
                        Virtual Account
                      </span>
                      <input
                        type="text"
                        placeholder="9876543210"
                        className="py-1 px-2 rounded-lg border border-gray-300 bg-white text-black"
                      />
                    </div>

                    {/* Amount */}
                    <div className="flex flex-col">
                      <span className="font-medium text-black mb-1">
                        Amount
                      </span>
                      <input
                        type="text"
                        placeholder="$150.00"
                        className="py-1 px-2 rounded-lg border border-gray-300 bg-white text-black"
                      />
                    </div>
                  </form>

                  {/* buttons */}
                  <div className="flex justify-end space-x-5 mt-4 font-medium text-xs xl:text-[16px] ">
                    <button
                      onClick={() => handleClick("cancel")}
                      className="text-[#1E4841] border  px-3 py-2 xl:px-4 xl:py-2 rounded-lg"
                    >
                      {status === "cancel" ? "Cancelled..." : "Cancel"}
                    </button>

                    <button
                      onClick={() => handleClick("send")}
                      className="bg-[#1E4841] text-white py-2 px-3 xl:px-4 xl:py-2 rounded-lg"
                    >
                      {status === "send" ? "Proceeding..." : "Payment Send"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
