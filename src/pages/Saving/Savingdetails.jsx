import React from "react";
import saving1 from "./assets/saving1.png";
import Dropdown from "../components/Dropdown";
import Linechart from "./Linechart";
import sort from "../Dashboard/assets/sort.png";
import transaction from "./assets/transaction.png";
const Savingdetails = ({ plan }) => {
  if (!plan) {
    return (
      <div className="p-4 text-gray-500">
        Please select a saving plan to view its details.
      </div>
    );
  }

  const members = [
    { name: "Amna Khalid" },
    { name: "Ali Khan" },
    { name: "Sara Ali" },
  ];

  //   dropdown options
  const options = ["This Year", "Next Month", "This Days"];
//   data for table
const data = [
  { name: "Income", note: "Monthly contribution to fund" },
  { name: "Expense", note: "Used for urgent travel booking" },
  { name: "Income", note: "Monthly contribution to fund" },
  { name: "Expense", note: "Monthly contribution to fund" },
  { name: "Income", note: "Used for urgent travel booking" },
];

  return (
    <div className="card flex flex-col">
      {/* Details of savings */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 gap-0 md:p-3 p-0">
        <div className="col-span-1 bg-[#ECF4E9] flex flex-col p-4 rounded-lg">
          <div className="flex space-x-3 items-center justify-start">
            <img src={saving1} alt="" className="h-10 w-10" />
            <span className="font-semibold text-lg">{plan.savingname}</span>
          </div>
          <span className="text-2xl font-medium mt-2">
            {plan.amount}
            <span className="text-[16px] text-[#6B7271]">/$5,000</span>
          </span>
          <div className="w-full rounded-full bg-[#BBF49C]  rounded-r-xl rounded-l-xl h-12 my-3">
            <div
              className="h-full bg-[#1E4841] transition-all duration-500 ease-in-out rounded-l-xl"
              style={{ width: `${plan.progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between text-[#1E4841] text-lg font-medium border-b-[1px] border-[#BCBEBD] pb-3">
            <span>In Progress</span>
            <span> {plan.progress}%</span>
          </div>

          {/* data of members */}
          <div className=" py-2 flex flex-col">
            <div className="flex justify-between">
              <span className="font-normal text-sm text-[#6B7271] ">
                Member
              </span>
              <div className="flex flex-col">
                {members.map((member) => (
                  <div
                    key={member}
                    className="flex items-center space-x-2 py-1 lg:mr-3 mr-0"
                  >
                    <span className="h-4 w-4 bg-[#BBF49C] rounded-full"></span>
                    <span className="font-normal text-sm">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex mt-3">
              <span className="mr-6 text-[#6B7271] text-sm font-normal ">
                Due Date
              </span>
              <span className="font-normal text-sm text-black">
                31 December, 2028
              </span>
            </div>
            <div className="flex mt-3">
              <span className="mr-6 text-[#6B7271] text-sm font-normal ">
                Remaining
              </span>
              <span className="font-normal text-sm text-black">95 Days</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col space-y-2">
          <div>
            {" "}
            <div className="card mb-2 mt-2 md:mt-0">
              <span className="head">Saving Tips</span>
              <ul className="px-4 pt-3 list-disc marker:text-gray-500 space-y-2 text-[#6B7271] font-[400]">
                <li className="text-black font-medium">
                  Mission: Save $21 per day for 95 days to meet goal.
                </li>
                <li className="...">
                  Cut unnecessary subscriptions, save more.
                </li>
                <li className="...">Skip eating out twice a week.</li>
                <li className="...">Automate savings from paycheck.</li>
              </ul>
            </div>
            <div className="card mt-2">
              <div className="flex justify-between">
                <span className="head">Balance</span>
                <Dropdown options={options} defaultOption="This Year" />
              </div>
              <div className="w-full h-[200px]">
                <Linechart />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tranactions table here */}
      <div className="card flex flex-col mt-4">
        <div className="flex justify-between">
          <span className="head">Transaction</span>
          <Dropdown options={options} defaultOption="This Month" />
        </div>

        {/* table */}
        <div className="overflow-x-auto pt-3">
          <div className="w-full min-w-[600px]">
            {/* Header */}
            <div className="grid grid-cols-7 bg-[#ECF4E9] py-3 px-2 text-xs xl:text-sm font-normal text-[#636767] rounded-lg items-center">
              <div className="col-span-2 flex items-center gap-x-2">
                Transaction type
                <img src={sort} alt="sort icon" className="h-4 w-4" />
              </div>
              <div className="col-span-2 flex items-center gap-x-2">
                Date & Time
                <img src={sort} alt="sort icon" className="h-4 w-4" />
              </div>
              <div className="col-span-1 flex items-center gap-x-2">
                Amount
                <img src={sort} alt="sort icon" className="h-4 w-4" />
              </div>
              <div className="col-span-2 flex items-center gap-x-2">
                Brief Note
                <img src={sort} alt="sort icon" className="h-4 w-4" />
              </div>
            </div>

            {/* Body Row */}
            {data.map((items) => (
                <div className="grid grid-cols-7 py-5 px-2 text-xs xl:text-sm font-normal items-center border-b border-[#E5E6E6]">
              <div className="col-span-2 flex items-center gap-x-2">
                <img
                  src={transaction}
                  alt="transaction icon"
                  className="h-6 w-6 hidden xl:block"
                />
                <span className="text-black">Income</span>
                <span className="text-[#6B7271]">- {items.name}</span>
              </div>
              <div className="col-span-2 flex items-center gap-x-1">
                <span className="text-black">2028-09-01</span>
                <span className="text-[#6B7271]">- 09:00 AM</span>
              </div>
              <div className="col-span-1 flex items-center">
                <span className="text-black">+$500</span>
              </div>
              <div className="col-span-2 flex items-center text-black">
{items.note}              </div>
            </div>
            ))}
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Savingdetails;
