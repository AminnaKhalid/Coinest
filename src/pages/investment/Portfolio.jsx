import React from 'react'
import sort from "../Dashboard/assets/Sort.png";
import transaction from "../Saving/assets/transaction.png";
import Dropdown from "../components/Dropdown";
import filter from "./assets/filter.png"

const Portfolio = () => {
  const options = ["This Year", "Next Month", "This Days"];

  const data = [
    { name: "Income", note: "Monthly contribution to fund" },
    { name: "Expense", note: "Used for urgent travel booking" },
    { name: "Income", note: "Monthly contribution to fund" },
    { name: "Expense", note: "Monthly contribution to fund" },
    { name: "Income", note: "Used for urgent travel booking" },
  ];
  
  return (
    <>
      <div className="flex justify-between">
        <span className="head">My Portfolio</span>
        <div className='flex'>
          <Dropdown options={options} defaultOption="This Month" />
          <img src={filter} alt="" className='md:h-8 md:w-8 xl:h-10 xl:w-10 h-8 w-8 cursor-pointer ml-2'/>
        </div>
      </div>
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
                {items.note}{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio