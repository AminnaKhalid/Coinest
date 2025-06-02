import { useState, React } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import card from "./assets/card.png";
import topup from "./assets/topup.png";
import history from "./assets/history.png";
import transfer from "./assets/transfer.png";
import threedot from "./assets/threedot.png";
import percent from "./assets/percentbar.png";
import add from "./assets/Plus.png";
import saving1 from "./assets/saving1.png";
import saving2 from "./assets/saving2.png";
import saving3 from "./assets/saving3.png";
import badge1 from "./assets/badge1.png";
import Badge from "./assets/Badge.png";
import income from "./assets/income1.png";
import income1 from "./assets/income2.png";
import income3 from "./assets/income3.png";
import filter from "./assets/filter.png";
import dropdown from "../components/assets/dropdown.png";
import sort from "./assets/Sort.png";
import failed from "./assets/failed.png";
import pending from "./assets/pending.png";
import completed from "./assets/completed.png";
import Stackedbar from "./Stackedbar";
import Piechart from "./Piechart";
const Dashboard = () => {
  const data = [
    { icon: topup, name: "Top Up" },
    { icon: transfer, name: "Transfer" },
    { icon: transfer, name: "Request" },
    { icon: history, name: "History" },
  ];

  // data for saving plans
  const savingplan = [
    { icon: saving1, name: "Emergency Fund", amount: "$5,000" },
    { icon: saving2, name: "Vacation Fund", amount: "$6,000" },
    { icon: saving3, name: "Home Payment", amount: "$6,000" },
  ];

  // income data
  const incomedata = [
    { icon: income, badge: badge1, amount: "$78,000", total: "Total Income" },
    { icon: income1, badge: Badge, amount: "$43,000", total: "Total Expense" },
    { icon: income3, badge: badge1, amount: "$56,000", total: "Total Savings" },
  ];

  // dropdown for cashflow
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("This Year");

  // dropdown for transactions
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState("This Month");
  const options = ["This Year", "This Month", "This Day"];

  // data for transactions
  const transactions = [
    {
      id: 1,
      name: "Grocery Shopping",
      bill: "Payments",
      date: "2023-10-05 ",
      time: "09:30",
      amount: "$120.50",
      note: "Weekly groceries",
      status: failed,
    },
    {
      id: 2,
      name: "Electric Bill",
      bill: "Payments",
      time: "09:30",

      date: "2023-10-06",
      amount: "$85.20",
      note: "October bill",
      status: pending,
    },
    {
      id: 3,
      name: "Medical Check-up",
      bill: "Health care",
      time: "09:30",

      date: "2023-10-07",
      amount: "$45.75",
      note: "Restaurant meal",
      status: completed,
    },
  ];

  // dropdown for statistics
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("This Month");

  // for statistics
  const [activeTab, setActiveTab] = useState("income");
  return (
    <>
      <div className="flex bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col min-h-screen w-full bg-white rounded-tl-4xl">
          <Heading />
          <div className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 gap-4 p-4">
            <div className="xl:col-span-3 md:col-span-6 col-span-12 bg-white space-y-2 order-1 xl:order-1">
              {/* the image of card */}
              <img src={card} alt="" className=" object-cover rounded-lg" />

              {/* the list of 4 icons */}
              <div className="flex flex-row bg-[#ECF4E9] rounded-xl mt-6 justify-center">
                {data.map((items, index) => (
                  <div
                    key={index}
                    className={`flex flex-col py-3 px-3 items-center justify-center ${
                      index !== data.length - 1 ? "border-r-2 border-white" : ""
                    }`}
                  >
                    <img src={items.icon} alt="" className="h-6 w-6" />
                    <span className="text-[#1E4841] text-xs md:text-sm font-medium">
                      {items.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* daily limit wala box */}
              <div className="card flex flex-col mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="head">Daily Limit</span>
                  <img
                    src={threedot}
                    alt=""
                    className="h-6 w-6 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">
                    <b className="mr-1">$2,500.00</b>
                    spent of $20,000.00
                  </span>
                  <b className="text-sm">12.5%</b>
                </div>
                <img src={percent} alt="" />
              </div>

              {/* saving plans */}
              <div className="card flex flex-col">
                <div className="flex justify-between">
                  <span className="head">Saving Plans</span>
                  <div className="flex items-center justify-center gap-2">
                    <img src={add} alt="" className="h-5 w-5" />
                    <span className="font-normal text-sm">Add Plan</span>
                  </div>
                </div>

                {/* main heading */}
                <div className="flex flex-col items-start py-4">
                  <span className="text-sm font-normal">Total Savings</span>
                  <span className="text-[#1E4841] text-2xl font-bold">
                    $84,500
                  </span>
                </div>

                {/* cards section inside it */}
                <div className="flex flex-col gap-5">
                  {savingplan.map((items) => (
                    <div className="card flex flex-col">
                      <div className="flex justify-between items-center mb-3">
                        <span className="flex items-center justify-center gap-3 ">
                          <img src={items.icon} alt="" className="h-7 w-7" />
                          <h2 className="text-lg font-medium ">{items.name}</h2>
                        </span>
                        <img src={threedot} alt="" className="h-6 w-6" />
                      </div>
                      <img src={percent} alt="" className="py-3" />
                      <div className="flex justify-between ">
                        <div className="text-xs md:text-sm tetx-[#6B7271]">
                          <b className="text-black mr-2">{items.amount}</b>
                          <span>50%</span>
                        </div>
                        <div className="text-[#6B7271] text-xs md:text-sm mr-2">
                          Target:
                          <span className="text-black ">Target: $10,000</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="xl:col-span-6 md:col-span-12 col-span-12  rounded-xl order-3 xl:order-2">
              {/* income cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {incomedata.map((items) => (
                  <div className="card flex flex-col ">
                    <div className="flex justify-between">
                      <img src={items.icon} alt="" className="h-10 w-10" />
                      <img src={threedot} alt="" className="h-5 w-5" />
                    </div>
                    <img
                      src={items.badge}
                      alt=""
                      className="w-17 h-4 object-cover mt-4 mb-5"
                    />
                    <span className="text-2xl font-bold">{items.amount}</span>
                    <span className="text-[#242E2C] text-lg font-normal">
                      {items.total}
                    </span>
                  </div>
                ))}
              </div>

              {/* chart wala section */}
              <div className="flex flex-col relative card mt-6">
                <div className="flex justify-between ">
                  <span className="head">CashFlow</span>

                  {/* Custom Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-[#E5E6E6]"
                    >
                      <span className="text-sm font-medium">
                        {selectedOption}
                      </span>
                      <img src={dropdown} alt="dropdown" className="w-4 h-4" />
                    </button>

                    {isOpen && (
                      <div className="absolute right-0 mt-1 w-full bg-white rounded-lg shadow-md z-10 border border-[#E5E6E6]">
                        {options.map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              setSelectedOption(option);
                              setIsOpen(false);
                            }}
                            className={`px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                              selectedOption === option
                                ? "bg-[#ECF4E9] text-[#1E4841]"
                                : ""
                            }`}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {/* heading wala data */}
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col ">
                    <span className="text-sm font-normal">Total Balance</span>
                    <span className="text-xl lg:text-3xl font-bold">
                      $562,000
                    </span>
                  </div>
                  <div className="flex items-center justify-center md:space-x-6 space-x-1">
                    <div className="flex items-center justify-center">
                      <div className="p-2 bg-[#1E4841] h-1 w-1 mr-2 rounded-sm"></div>

                      <span className="text-xs md:text-sm font-normal">
                        Income
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="p-2 h-1 w-1 bg-[#BBF49C] mr-2 rounded-sm"></div>
                      <span className="text-xs md:text-sm font-normal">
                        Expense
                      </span>
                    </div>
                  </div>
                </div>

                {/* chart or tooltip */}
                <div className="flex md:py-4 p-0">
                  <Stackedbar />
                </div>
              </div>

              {/* table of transactions */}
              <div className="flex flex-col card mt-6 p-2">
                {/* Header with dropdown and filter */}
                <div className="flex justify-between p-2">
                  <span className="head">Recent Transactions</span>
                  <div className="flex justify-center items-center">
                    {/* Custom Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsOpen1(!isOpen1)}
                        className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-[#E5E6E6]"
                      >
                        <span className="text-sm font-medium">
                          {selectedOption1}
                        </span>
                        <img
                          src={dropdown}
                          alt="dropdown"
                          className="w-4 h-4"
                        />
                      </button>

                      {isOpen1 && (
                        <div className="absolute right-0 mt-1 w-full bg-white rounded-lg shadow-md z-10 border border-[#E5E6E6]">
                          {options.map((option) => (
                            <div
                              key={option}
                              onClick={() => {
                                setSelectedOption1(option);
                                setIsOpen1(false);
                              }}
                              className={`px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                                selectedOption1 === option
                                  ? "bg-[#ECF4E9] text-[#1E4841]"
                                  : ""
                              }`}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* filter icon */}
                    <img
                      src={filter}
                      alt=""
                      className="h-10 w-10 ml-2 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Grid Table */}
                <div className="overflow-x-auto pt-3">
                  <div className="w-full  min-w-[600px]">
                    {/* Table Header */}
                    <div className="grid grid-cols-7">
                      <div className="p-3 bg-[#ECF4E9] tabledata col-span-2">
                        <div className="flex  items-center">
                          <span>Transaction Name</span>
                          <img src={sort} className="h-4 w-4" alt="Sort" />
                        </div>
                      </div>
                      <div className="p-3 bg-[#ECF4E9] tabledata col-span-2">
                        <div className="flex  items-center">
                          <span>Date & Time</span>
                          <img src={sort} className="h-4 w-4" alt="Sort" />
                        </div>
                      </div>
                      <div className="p-3 bg-[#ECF4E9] tabledata sticky col-span-1">
                        <div className="flex items-center">
                          <span>Amount</span>
                          <img src={sort} className="h-4 w-4" alt="Sort" />
                        </div>
                      </div>
                      <div className="p-3 bg-[#ECF4E9] tabledata col-span-1">
                        <div className="flex  items-center">
                          <span>Note</span>
                          <img src={sort} className="h-4 w-4" alt="Sort" />
                        </div>
                      </div>
                      <div className="p-3 bg-[#ECF4E9] tabledata col-span-1">
                        <div className="flex  items-center">
                          <span>Status</span>
                          <img src={sort} className="h-4 w-4" alt="Sort" />
                        </div>
                      </div>
                    </div>

                    {/* Table Rows */}
                    {transactions.map((item) => (
                      <div
                        key={item.id}
                        className="grid grid-cols-7 group hover:bg-gray-50"
                      >
                        <div className="p-3 border-b truncate col-span-2 flex flex-col">
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>
                          <span className="text-[#6B7271] text-xs font-normal">
                            {item.bill}
                          </span>
                        </div>
                        <div className="p-3 border-b col-span-2 flex flex-col">
                          <span className="text-sm font-medium">
                            {item.date}
                          </span>
                          <span className="text-[#6B7271] text-xs font-normal">
                            {item.time}
                          </span>
                        </div>
                        <div className="p-3 border-b font-medium col-span-1 text-[#6B7271] text-sm">
                          {item.amount}
                        </div>
                        <div className="p-3 border-b truncate col-span-1">
                          {item.note}
                        </div>
                        <div className="p-3 border-b col-span-1 ">
                          <img
                            src={item.status}
                            alt=""
                            className="h-5 w-15 object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-3 md:col-span-6 col-span-12  rounded-xl order-2 xl:order-3">
              <div className="flex flex-col">
                {/* for statistics */}
                <div className="card flex flex-col">
                  <div className="flex justify-between">
                    <span className="head">Statistic</span>
                    {/* dropdown for statistics */}
                    {/* Custom Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsOpen2(!isOpen2)}
                        className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg border border-[#E5E6E6]"
                      >
                        <span className="text-sm font-medium">
                          {selectedOption2}
                        </span>
                        <img
                          src={dropdown}
                          alt="dropdown"
                          className="w-4 h-4"
                        />
                      </button>

                      {isOpen2 && (
                        <div className="absolute right-0 mt-1 w-full bg-white rounded-lg shadow-md z-10 border border-[#E5E6E6]">
                          {options.map((option) => (
                            <div
                              key={option}
                              onClick={() => {
                                setSelectedOption2(option);
                                setIsOpen2(false);
                              }}
                              className={`px-3 py-2 text-sm hover:bg-gray-50 cursor-pointer ${
                                selectedOption2 === option
                                  ? "bg-[#ECF4E9] text-[#1E4841]"
                                  : ""
                              }`}
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* section for two buttons */}
                  <div className="flex justify-center items-center space-x-5 pt-3 border-b-2 border-gray-200">
                    <button
                      className={`flex  items-center p-3 pb-2 border-b-5 ${
                        activeTab === "income"
                          ? "text-[#1E4841] border-[#BBF49C]"
                          : "text-[#6B7271] border-transparent"
                      }`}
                      onClick={() => setActiveTab("income")}
                    >
                      <span className="font-medium text-lg">Income</span>
                      <span className="text-xs font-normal ">($4,800)</span>
                    </button>

                    <button
                      className={`flex  items-center pb-2 p-3 border-b-5  ${
                        activeTab === "expense"
                          ? "text-[#1E4841] border-[#BBF49C]"
                          : "text-[#6B7271] border-transparent"
                      }`}
                      onClick={() => setActiveTab("expense")}
                    >
                      <span className="font-[400] text-lg">Expense</span>
                      <span className="text-xs font-normal ">($3,500)</span>
                    </button>
                  </div>

                  {/* statistics chart */}
                  <div className="">
                    <Piechart />
                  </div>
                </div>
                {/* saving plans */}
                <div className="flex flex-col card my-3">
                  <div className="flex justify-between">
                    <div className="head">Recent Activity</div>
                    <img src={threedot} alt="" className="h-5 w-5" />
                  </div>

                  <div className="flex flex-col ">
                    <span className="text-[16px] font-normal text-gray-700">
                      Today
                    </span>
                    <div className="relative ml-6 mt-4">
                      {/* Vertical Line */}
                      <div className="absolute top-2 left-4 w-0.5 h-full bg-gray-300"></div>

                      {/* Event 1 */}
                      <div className="relative flex gap-3 mb-6">
                        {/* Circle */}
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-[#BBF49C] z-10"></div>
                        </div>
                        {/* Content */}
                        <div>
                          <p>
                            <span className="font-semibold">Jamie Smith</span>{" "}
                            updated account settings
                          </p>
                          <p className="text-sm text-gray-500">16:05</p>
                        </div>
                      </div>

                      {/* Event 2 */}
                      <div className="relative flex gap-3 mb-6">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-[#BBF49C] z-10"></div>
                        </div>
                        <div>
                          <p>
                            <span className="font-semibold">Alex Johnson</span>{" "}
                            logged in
                          </p>
                          <p className="text-sm text-gray-500">13:05</p>
                        </div>
                      </div>

                      {/* Event 3 */}
                      <div className=" flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-[#BBF49C] z-10"></div>
                        </div>
                        <div>
                          <p>
                            <span className="font-semibold">Morgan Lee</span>{" "}
                            added a new savings goal for vacation
                          </p>
                          <p className="text-sm text-gray-500">11:30</p>
                        </div>
                      </div>
                    </div>
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

export default Dashboard;
