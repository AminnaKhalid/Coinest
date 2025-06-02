import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import image from "./assets/image1.jpg";
import image1 from "./assets/image2.jpg";
import search from "../components/assets/search.png";
import Funnel from "./assets/Funnel.png";
import Sliders from "./assets/Sliders.png";
import dropdown from "./assets/dropdown.png";
import { Link } from "react-router-dom";

const Promos = () => {
  // State for dropdowns
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest");

  // Filter options
  const filterOptions = ["All", "Active", "Expired", "Upcoming"];

  // Sort options
  const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];

  // data for the cards
  const data = [
    {
      name: "Exclusive Credit Card Offer",
      desc: "Apply for our new Platinum Rewards Card and enjoy a 0% introductory APR for the first 18 months, plus no annual fee.",
      date: "Oct 1, 2028",
      image: image,
      valid: "from",
    },
    {
      name: "Referral Bonus Boost",
      desc: "Refer a friend to join Coinest and both receive a $50 bonus when they sign up and make their first transaction.",
      date: "Nov 24, 2028",
      image: image1,
      valid: "through",
    },
    {
      name: "Investment Account Bonus",
      desc: "Open an investment account with us and get a $100 bonus when you deposit $5,000 within the first 60 days.",
      date: "Oct 10, 2028",
      image: image,
      valid: "Date",
    },
    {
      name: "Mortgage Refinancing Deal",
      desc: "Refinance your mortgage with us and get $500 off closing costs plus an exclusive low rate.",
      date: "Dec 31, 2028",
      valid: "Date",
      image: image,
    },
    {
      name: "Exclusive Credit Card Offer",
      desc: "Apply for our new Platinum Rewards Card and enjoy a 0% introductory APR for the first 18 months, plus no annual fee.",
      date: "Oct 1, 2028",
      image: image,
      valid: "Date",
    },
    {
      name: "Referral Bonus Boost",
      desc: "Refer a friend to join Coinest and both receive a $50 bonus when they sign up and make their first transaction.",
      date: "Nov 24, 2028",
      image: image1,
      valid: "Date",
    },
    {
      name: "Investment Account Bonus",
      desc: "Open an investment account with us and get a $100 bonus when you deposit $5,000 within the first 60 days.",
      date: "Oct 10, 2028",
      image: image,
      valid: "Date",
    },
    {
      name: "Mortgage Refinancing Deal",
      desc: "Refinance your mortgage with us and get $500 off closing costs plus an exclusive low rate.",
      date: "Dec 31, 2028",
      image: image,
      valid: "Date",
    },
    {
      name: "Exclusive Credit Card Offer",
      desc: "Apply for our new Platinum Rewards Card and enjoy a 0% introductory APR for the first 18 months, plus no annual fee.",
      date: "Oct 1, 2028",
      image: image,
      valid: "Date",
    },
    {
      name: "Referral Bonus Boost",
      desc: "Refer a friend to join Coinest and both receive a $50 bonus when they sign up and make their first transaction.",
      date: "Nov 24, 2028",
      image: image1,
      valid: "Date",
    },
    {
      name: "Investment Account Bonus",
      desc: "Open an investment account with us and get a $100 bonus when you deposit $5,000 within the first 60 days.",
      date: "Oct 10, 2028",
      image: image,
      valid: "Date",
    },
    {
      name: "Mortgage Refinancing Deal",
      desc: "Refinance your mortgage with us and get $500 off closing costs plus an exclusive low rate.",
      date: "Dec 31, 2028",
      image: image1,
      valid: "Date",
    },
  ];

  return (
    <>
      <div className="flex  bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen rounded-tl-4xl bg-white md:p-4 p-0 ">
          <Heading heading={"Promos"} />

          {/* heading  */}
          <div className="flex justify-between flex-col md:flex-row p-4">
            <div className="flex space-x-3 justify-center items-center py-3 md:py-0">
              <div className="relative hidden lg:block">
                <img
                  src={search}
                  alt="search"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
                <input
                  type="text"
                  placeholder="Search Placeholder"
                  className=" py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#1E4841] pr-15 px-5 bg-[#EFF0F0] "
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <div
                  className="flex space-x-1 p-2 justify-center items-center border border-gray-300 rounded-lg cursor-pointer"
                  onClick={() => setFilterOpen(!filterOpen)}
                >
                  <img src={Sliders} alt="" className="h-4 w-4" />
                  <span className="font-medium">Filter</span>
                  <img src={dropdown} alt="" className="h-4 w-4" />
                </div>
                {filterOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    {filterOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                          selectedFilter === option ? "bg-gray-100" : ""
                        }`}
                        onClick={() => {
                          setSelectedFilter(option);
                          setFilterOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <div
                  className="flex space-x-1 p-2 justify-center items-center border border-gray-300 rounded-lg cursor-pointer"
                  onClick={() => setSortOpen(!sortOpen)}
                >
                  <img src={Funnel} alt="" className="h-4 w-4" />
                  <span className="font-medium">Sort By</span>
                  <img src={dropdown} alt="" className="h-4 w-4" />
                </div>
                {sortOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    {sortOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                          selectedSort === option ? "bg-gray-100" : ""
                        }`}
                        onClick={() => {
                          setSelectedSort(option);
                          setSortOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* button */}
            <div className="px-4 py-2 rounded-xl text-white bg-[#1E4841] text-[16px] font-normal cursor-pointer text-center">
              Add Promo
            </div>
          </div>

          {/* grid for cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2">
            {data.map((data, index) => (
              <Link className="card flex flex-col space-y-2 cursor-pointer" key={index} to={'/promos/details'}>
                <img
                  src={data.image}
                  alt=""
                  className="h-48  w-full rounded-xl object-cover"
                />
                <h2 className="text-xl font-medium ">{data.name}</h2>
                <span className="text-[#6B7271] text-sm font-normal">
                  {data.desc}
                </span>
                <span className="font-normal text-[#6B7271] text-sm flex ">
                  Valid {data.valid} :{" "}
                  <h2 className="text-black ml-2">{data.date}</h2>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Promos;
