import React from "react";
import Dropdown from "./Dropdown";
const Trending = () => {
  const data = [
    {
      tagname: "#Crypto",
      market: "Crypto Market",
      article: "20 articles",
    },
    {
      tagname: "#Stocks",
      market: "Stock Market",
      article: "80 articles",
    },
    {
      tagname: "#Real Estate",
      market: "Real Estate Market",
      article: "40 articles",
    },

    {
      tagname: "#Bonds",
      market: "Bond Market",
      article: "10 articles",
    },
    {
      tagname: "#Bonds",
      market: "Bond Market",
      article: "10 articles",
    },
 
  ];

  const author = [
    { authorname: "Emily Watson", followers: "5K Followers" },
    { authorname: "Emily Watson", followers: "5K Followers" },
    { authorname: "Emily Watson", followers: "5K Followers" },
    { authorname: "Emily Watson", followers: "5K Followers" },
    { authorname: "Emily Watson", followers: "5K Followers" },
    { authorname: "Emily Watson", followers: "5K Followers" },
  ];


  return (
    <>
      <div className="flex flex-col px-4 py-2 w-full md:w-65 bg-white border-l min-h-screen border-[#E5E6E6] ">
        {/* pehla section */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span className="head text-lg ">Trending Tags</span>
            <Dropdown />
          </div>
          {/* yahan tags ana hai */}
          <div className="flex flex-col">
            {data.map((item, index) => (
              <div
                className="space-y-2 p-3 border-b border-gray-200"
                key={index}
              >
                <span className="text-[16px] font-bold">{item.tagname}</span>
                <div className="flex space-x-3 text-xs font-normal">
                  <span className="text-[#1E4841]">{item.market}</span>
                  <span className="text-[#8A8C90]">{item.article}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="text-[#1E4841] text-sm py-2 px-2 border-2 border-gray-200 rounded-lg w-25 my-4 h-10 font-mediun">
            Show More
          </button>
        </div>

        {/* dosra wala section */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="head text-lg">Top Author</span>
<Dropdown />
          </div>
          <div className="flex flex-col justify-center my-3 space-y-3">
            {author.map((items) => (
              <div className=" flex space-x-3 items-center border-b py-3 border-[#E1E1E2]">
                <div className="w-12 h-12 rounded-full bg-[#BBF49C]"></div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-medium">
                    {items.authorname}
                  </span>
                  <span className="text-sm text-[#8A8C90] font-normal">
                    {items.followers}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="text-[#1E4841] text-sm py-2 px-2 border-2 border-gray-200 rounded-lg w-25 my-4 h-10 font-mediun">
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default Trending;
