import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import plus from "../Dashboard/assets/Plus.png";
import topup from "../Dashboard/assets/topup.png";
import transfer from "../Dashboard/assets/transfer.png";
import threedot from "../Dashboard/assets/threedot.png";
import Dropdown from "../components/Dropdown";
import Barchart from "./Barchart";
import sort from "../Dashboard/assets/Sort.png";
import icon1 from "../Transaction/assets/icon1.png";
import icon2 from "../Transaction/assets/icon2.png";
import icon3 from "../Transaction/assets/icon3.png";
import badge1 from "../Transaction/assets/badge1.png";
import badge2 from "../Transaction/assets/badge2.png";
const Cards = () => {
  const data = [
    { icon: topup, name: "Top Up" },
    { icon: transfer, name: "Transfer" },
    { icon: transfer, name: "Request" },
  ]
  const datas = [
    {
      icon: icon1,
      transactionname: "Bonus Payment",
      income: "Income",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "12345678",
      date: "2024-09-25",
      time: "12:00 PM",
      price: "+$500.00",
      note: "Annual performance bonus",
      badge: badge1,
    },
    {
      icon: icon2,
      transactionname: "Stock Dividends",
      income: "Investments",
      card: card2,
      cardname: "Freedom Unlimited Mastercard",
      cardno: "23456789",
      date: "2024-09-24",
      time: "01:00 PM",
      price: "+$300.00",
      note: "Quarterly stock dividend",
      badge: badge2,
    },
    {
      icon: icon3,
      transactionname: "Comcast Bill Payment",
      income: "Utilities",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "34567890",
      date: "2024-09-24",
      time: "02:00 PM",
      price: "+$300.00",
      note: "Monthly internet and TV bill",
      badge: badge1,
    },
   
    {
      icon: icon1,
      transactionname: "Bonus Payment",
      income: "Income",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "12345678",
      date: "2024-09-25",
      time: "12:00 PM",
      price: "+$500.00",
      note: "Annual performance bonus",
      badge: badge1,
    },
    {
      icon: icon2,
      transactionname: "Stock Dividends",
      income: "Investments",
      card: card2,
      cardname: "Freedom Unlimited Mastercard",
      cardno: "23456789",
      date: "2024-09-24",
      time: "01:00 PM",
      price: "+$300.00",
      note: "Quarterly stock dividend",
      badge: badge2,
    },
    {
      icon: icon3,
      transactionname: "Comcast Bill Payment",
      income: "Utilities",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "34567890",
      date: "2024-09-24",
      time: "02:00 PM",
      price: "+$300.00",
      note: "Monthly internet and TV bill",
      badge: badge1,
    },
  ];
  return (
    <>
      <div className="flex bg-[#ECF4E9] min-h-screen">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen bg-white rounded-tl-4xl p-2 md:p-4 lg:p-6">
          <Heading heading={"Cards"} />
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
            {/* My Cards Section - Left Side */}
            <div className="col-span-1 xl:col-span-2 flex flex-col bg-[#ECF4E9] p-3 md:p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg md:text-xl font-bold">My Cards</span>
                <button className="flex items-center space-x-1">
                  <img
                    src={plus}
                    alt="Add Icon"
                    className="w-3 h-3 md:w-4 md:h-4"
                  />
                  <span className="text-sm md:text-base font-medium text-[#1E4841]">
                    Add
                  </span>
                </button>
              </div>
              <div className="flex flex-col space-y-3 py-4 md:py-6">
                <img
                  src={card1}
                  alt="Card 1"
                  className="w-full h-auto object-cover"
                />
                <img
                  src={card2}
                  alt="Card 2"
                  className="w-full h-auto object-cover"
                />
                <img
                  src={card3}
                  alt="Card 3"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Main Content Section - Right Side */}
            <div className="col-span-1 xl:col-span-10 p-2 md:p-4 rounded-lg">
              <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                {/* Card Actions and Info Section */}
                <div className="lg:col-span-2 flex flex-col space-y-4">
                  {/* Card Actions */}
                  <div className="bg-[#ECF4E9] rounded-xl p-3 md:p-4">
                    <div className="flex justify-between items-center mb-4">
                      {data.map((item, index) => (
                        <div
                          key={index}
                          className={`flex flex-col items-center justify-center px-2 ${
                            index !== data.length - 1
                              ? "border-r-2 border-white mx-5"
                              : ""
                          }`}
                        >
                          <img
                            src={item.icon}
                            alt={item.name}
                            className="h-6 w-6 md:h-7 md:w-7"
                          />
                          <span className="text-xs md:text-sm font-medium text-[#1E4841] mt-1">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Card Info */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs md:text-sm text-[#6B7271]">
                          Card Number
                        </span>
                        <p className="text-sm md:text-base font-medium text-[#242E2C]">
                          5582 5574 8376 5487
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-between gap-2">
                        <div>
                          <span className="text-xs md:text-sm text-[#6B7271]">
                            Expiry Date
                          </span>
                          <p className="text-sm md:text-base font-medium">
                            05/25
                          </p>
                        </div>
                        <div>
                          <span className="text-xs md:text-sm text-[#6B7271]">
                            CVC
                          </span>
                          <p className="text-sm md:text-base font-medium">
                            811
                          </p>
                        </div>
                        <div>
                          <span className="text-xs md:text-sm text-[#6B7271]">
                            Status
                          </span>
                          <p className="text-xs md:text-sm font-medium bg-[#1E4841] text-gray-300 py-1 px-2 rounded-lg">
                            Active
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spending Limits */}
                  <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base font-bold">
                        Spending Limits
                      </span>
                      <img
                        src={threedot}
                        alt="Options"
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </div>

                    <div className="mt-3">
                      <div className="bg-[#BBF49C] h-4 md:h-6 w-full rounded-sm">
                        <div className="bg-[#1E4841] h-full w-1/2 rounded-sm border-r-4 md:border-r-8 border-white"></div>
                      </div>

                      <div className="flex justify-between mt-2">
                        <span className="text-xs md:text-sm font-medium">
                          $4,500.00{" "}
                          <span className="text-gray-400 font-normal">
                            spent of $10,000.00
                          </span>
                        </span>
                        <span className="text-xs md:text-sm font-medium">
                          45%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cashflow Chart */}
                <div className="lg:col-span-4 bg-white p-3 md:p-4 rounded-lg shadow-sm">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm md:text-base font-bold">
                        Cashflow
                      </span>
                      <Dropdown
                        options={[
                          "Last 6 Months",
                          "Last 8 Months",
                          "Last Year",
                        ]}
                        defaultOption="Last Year"
                        className="text-xs md:text-sm"
                      />
                    </div>

                    <div className="flex-grow">
                      <Barchart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-between mt-4">
                <div className="head">Transaction</div>
              </div>
              <div className="overflow-x-auto pt-3">
                <div className="min-w-full inline-block ">
                  {/* Table Header */}
                  <div className="grid grid-cols-9 lg:grid-cols-10 min-w-[800px] space-x-1  ">
                    {/* Checkbox + Transaction Name */}
                    <div className="col-span-2 lg:col-span-2 tablehead tabledata">
                      <input
                        type="checkbox"
                        className="cursor-pointer w-4 h-4 border border-[#E4E2DD] mr-3"
                      />
                      <span>Transaction Name</span>
                      <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
                    </div>

                    {/* Account */}
                    <div className="col-span-1 lg:col-span-2 tablehead tabledata ">
                      <span>Account</span>
                      <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
                    </div>

                    {/* Transaction ID */}
                    <div className="col-span-2 lg:col-span-1 tablehead tabledata">
                      <span>Transaction ID</span>
                      <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
                    </div>

                    {/* Date & Time */}
                    <div className="col-span-1 lg:col-span-1 tablehead tabledata">
                      <span>Date & Time</span>
                      <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
                    </div>

                    {/* Amount */}
                    <div className="col-span-1 lg:col-span-1 tablehead tabledata">
                      <span>Amount</span>
                      <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
                    </div>

                    {/* Note */}
                    <div className="col-span-1 lg:col-span-2 tablehead tabledata">
                      <span>Note</span>
                      <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
                    </div>

                    {/* Status */}
                    <div className="col-span-1 lg:col-span-1 tablehead tabledata">
                      <span>Status</span>
                      <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
                    </div>
                  </div>

                  {/* for the table part */}
                  {datas.map((data, index) => (
                    <div
                      className="grid grid-cols-9 lg:grid-cols-10 min-w-[800px] border-b py-4 border-[#E5E6E6] space-x-1"
                      key={index}
                    >
                      <div className="col-span-2 lg:col-span-2 flex items-center mt-2">
                        <input
                          type="checkbox"
                          className="cursor-pointer w-4 h-4 border border-[#E4E2DD] mx-1 mr-2"
                        />
                        <img src={data.icon} alt="" className="h-8 w-8" />
                        <div className="flex flex-col ml-2">
                          <span className="text-xs lg:text-sm font-medium">
                            {data.transactionname}
                          </span>
                          <span className="text-[11px] font-normal text-[#6B7271]">
                            {data.income}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-1 lg:col-span-2 flex items-center mt-2 space-x-2">
                        <img src={data.card} alt="" className="w-9 h-6" />
                        <span className="text-xs lg:text-sm">
                          {data.cardname}
                        </span>
                      </div>
                      <div className="col-span-2 lg:col-span-1 flex items-center mt-2 text-xs md:text-sm">
                        {data.cardno}
                      </div>
                      <div className="col-span-1 lg:col-span-1 flex flex-col justify-center mt-2">
                        <span className="text-xs lg:text-sm">{data.date}</span>
                        <span className="text-xs text-[#6B7271]">
                          {data.time}
                        </span>
                      </div>
                      <div className="col-span-1 lg:col-span-1 flex items-center mt-2 text-xs lg:text-sm">
                        {data.price}
                      </div>
                      <div className="col-span-1 lg:col-span-2 flex items-center mt-2 text-xs lg:text-sm">
                        {data.note}
                      </div>
                      <div className="col-span-1 lg:col-span-1 flex items-center mt-2">
                        <img
                          src={data.badge}
                          alt=""
                          className="w-20 h-7 object-cover rounded-md"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
