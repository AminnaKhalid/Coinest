import { useState } from "react";
import calendar from "./assets/calendar.png"; 
import dropdown from "./assets/dropdown.png"; 

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("1-30 September 2028");

  const dateRanges = [
    "1-30 September 2028",
    "1-31 October 2028",
    "1-30 November 2028",
  ];

  const handleSelect = (range) => {
    setSelectedRange(range);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center space-x-2 cursor-pointer border border-gray-300 p-2 rounded-md hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={calendar} alt="calendar" className="h-5 w-5" />
        <span className="text-xs md:text-sm">{selectedRange}</span>
        <img src={dropdown} alt="dropdown" className="h-5 w-5" />
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white border rounded-md shadow-lg border-gray-300 text-xs md:text-sm">
          {dateRanges.map((range, index) => (
            <div
              key={index}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${
                selectedRange === range ? "bg-gray-100 font-semibold" : ""
              }`}
              onClick={() => handleSelect(range)}
            >
              {range}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
