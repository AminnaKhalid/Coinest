import { useState } from "react";
import dots from "./assets/DotsThree.png"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Edit", action: () => console.log("Edit clicked") },
    { label: "Delete", action: () => console.log("Delete clicked") },
    { label: "Share", action: () => console.log("Share clicked") },
  ];

  return (
    <div className="relative inline-block">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <img src={dots} alt="Options" className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 border border-gray-200">
          <ul>
            {options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    option.action();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
