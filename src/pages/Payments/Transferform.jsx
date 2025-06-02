import React, { useState } from "react";
import Dropdown from "../Insights/Dropdown";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import visa from "./assets/visa.png";
import { ChevronDown } from "lucide-react";
const Transferform = () => {
  // state managemnt for the custok dropdowns in the below form
  const [recipientOpen, setRecipientOpen] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);
  const [selectedRecipient, setSelectedRecipient] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("");
  // custom dropdown ka data ha
  const recipients = [
    "Jade Brown - 120987654325",
    "Amna Khalid - 123456789012",
    "John Doe - 987654321098",
  ];

  const methods = ["Instant Transfer", "Scheduled Transfer", "Manual Transfer"];

  // adding effects in form button
  const [status, setStatus] = useState("");

  const handleClick = (type) => {
    setStatus(type);
    setTimeout(() => {
      setStatus(""); 
    }, 2000);
  };
  const [active, setActive] = useState("Local");
  return (
    <>
      <div className="card mt-4">
        <div className="flex justify-between">
          <span className="head">Transfer Form</span>
          <Dropdown />
        </div>
        <div className="rounded-xl bg-[#ECF4E9] p-4 mt-4">
          <div className="flex  text-center text-xs md:text-sm xl:text-[16px]">
            <button
              onClick={() => setActive("Local")}
              className={`w-1/2 py-2 rounded-l-lg ${
                active === "Local"
                  ? "bg-[#1E4841] text-white"
                  : "bg-white text-black"
              }`}
            >
              Local
            </button>
            <button
              onClick={() => setActive("International")}
              className={`w-1/2 py-2 rounded-r-lg ${
                active === "International"
                  ? "bg-[#1E4841] text-white"
                  : "bg-white text-black"
              }`}
            >
              International
            </button>
          </div>

          {/* for cards and form */}
          <div className="flex head text-lg font-medium mt-4">
            Payment Account
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 bg-white rounded-lg p-3 gap-4">
            <img src={card1} alt="" className="object-cover"/> 
            <img src={card2} alt="" className="object-cover" />{" "}
          </div>
          {/* form with two custom dropdowns  */}
          <form className="flex flex-col mt-4 space-y-4">
            {/* Recipient Dropdown */}
            <div className="relative">
              <label className="mb-1 block">Select Recipient</label>
              <div
                onClick={() => setRecipientOpen(!recipientOpen)}
                className="border border-gray-400 bg-white text-black py-2 px-3 rounded-lg flex items-center justify-between cursor-pointer relative"
              >
                <div className="flex items-center gap-2">
                  <img src={visa} alt="visa" className="h-5 w-6" />
                  <span>{selectedRecipient || "Select recipient"}</span>
                </div>
                <ChevronDown className="h-4 w-4" />
              </div>
              {recipientOpen && (
                <ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-md shadow">
                  {recipients.map((item, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setSelectedRecipient(item);
                        setRecipientOpen(false);
                      }}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Amount  Transfer Method */}
            <div className="flex flex-col xl:flex-row xl:space-x-4 space-x-0">
              <div className="flex flex-col xl:w-3/12">
                <label className="mb-1">Amount</label>
                <input
                  type="text"
                  placeholder="$250.00"
                  className="border bg-white text-black border-gray-400 rounded-lg py-2 px-3"
                />
              </div>

              {/* Method Dropdown */}
              <div className="relative xl:w-3/4">
                <label className="mb-1 block">Transfer Method</label>
                <div
                  onClick={() => setMethodOpen(!methodOpen)}
                  className="border border-gray-400 bg-white text-black py-2 px-3 rounded-lg flex justify-between items-center cursor-pointer"
                >
                  <span>{selectedMethod || "Select method"}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                {methodOpen && (
                  <ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full rounded-md shadow">
                    {methods.map((item, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setSelectedMethod(item);
                          setMethodOpen(false);
                        }}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Note Field */}
            <div className="flex flex-col">
              <label className="mb-1">Note</label>
              <input
                type="text"
                placeholder="Add a note"
                className="border border-gray-400 rounded-lg py-2 px-3 bg-white text-black"
              />
            </div>
          </form>

          <div className="flex justify-end space-x-5 mt-4 font-medium text-xs xl:text-[16px] ">
            <button
              onClick={() => handleClick("cancel")}
              className="text-[#1E4841] border border-[#1E4841] px-3 py-2 xl:px-4 xl:py-2 rounded-lg"
            >
              {status === "cancel" ? "Cancelled..." : "Cancel"}
            </button>

            <button
              onClick={() => handleClick("send")}
              className="bg-[#1E4841] text-white py-2 px-3 xl:px-4 xl:py-2 rounded-lg"
            >
              {status === "send" ? "Money Sent..." : "Send Money"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transferform;
