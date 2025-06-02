import { useState } from "react";
import dropdownIcon from "./assets/dropdown.png"; // adjust path as needed

const Dropdown = ({ options, defaultOption = "Select", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultOption);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-between items-center px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {selected}
        <img src={dropdownIcon} alt="dropdown" className="ml-2 w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white border-1 border-gray-300 z-10">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleSelect(option)}
                className="block w-full px-4 py-2 text-left text-xs md:text-sm text-gray-700 hover:bg-gray-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
