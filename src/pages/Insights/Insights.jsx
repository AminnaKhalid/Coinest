import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import image1 from "./assets/image1.jpg";
import image2 from "./assets/image2.jpg";
import Trending from "./Trending";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
const Insights = () => {
  const data = [
    {
      image: image1,
      company: "Bonds",
      date: "Sep 23, 2028",
      mainhead: "Understanding Bond Markets",
    },
    {
      image: image2,
      company: "Personal Finance",
      date: "Sep 19, 2028",
      mainhead: "Personal Finance Management Tips",
    },
    {
      image: image1,
      company: "Fintech",
      date: "Sep 5, 2028",
      mainhead: "Innovations in Banking Technology",
    },
    {
      image: image2,
      company: "Mutual Funds",
      date: "Mutual Funds",
      mainhead: "The Rise of Index Funds",
    },
  ];

  const popular = [
    {
      image: image1,
      business: "Real Estate ",
      time: "Aug 15, 2028",
      head: "Maximizing Returns from Real Estate",
      desc: "Learn how to identify lucrative opportunities in the ever-evolving real estate sector.",
      name: "John Doe",
    },
    {
      image: image2,
      business: "Tax Planning",
      time: "Aug 22, 2028",
      head: "Effective Tax Strategies for Investors",
      desc: "Practical advice on optimizing your investment returns through strategic tax planning.",
      name: "Jane Smith",
    },
  ];

  const featured = [
    {
      image: image1,
      company: "Investment Strategies",
      date: "Sep 25, 2028",
      head: "Navigating Market Volatility in 2028",
      desc: "Explore expert strategies for safe guarding your portfolio against sudden market shifts.",
    },
    {
      image: image2,
      company: "Investment Strategies",
      date: "Sep 25, 2028",
      head: "The Future of Crypto currency Investments",
      desc: "Explore expert strategies for safe guarding your portfolio against sudden market shifts.",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col min-h-screen w-full bg-white rounded-tl-4xl order-1">
          <Heading heading={"Insights"} />

          {/* for articles section */}
          <div className="grid grid-cols-1  xl:grid-cols-3 p-4 gap-4">
            {/* Featured Articles */}
            <div className="flex flex-col lg:col-span-2">
              <div className="flex justify-between">
                <span className="head">Featured Articles</span>
                <Dropdown />
              </div>

              {/* do cards ana han yahan */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                {featured.map((data) => (
                  <Link className="flex flex-col" to={"/insight/details"}>
                    <img src={data.image} alt="" className="h-40 rounded-lg" />
                    <div className="space-x-3 text-sm font-normal">
                      <span className="text-[#1E4841] ">{data.company}</span>
                      <span className="text-[#6B7271] ">{data.date}</span>
                    </div>
                    <span className="text-xl lg:text-2xl font-semibold">
                      {data.head}
                    </span>
                    <span className="text-sm text-gray-500">{data.desc}</span>
                    <div className="my-2 flex items-center">
                      <div className="h-8 w-8 bg-[#BBF49C] mr-2 rounded-full"></div>
                      <span className="font-medium text-sm ">Elon Musk</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="xl:col-span-1">
              <div className="justify-between flex">
                <span className="head">Recent Articles</span>
                <Dropdown />
              </div>
              <div className="flex flex-col mt-3 space-y-3">
                <div className="flex space-x-2">
                  <img src={image1} alt="" className="h-30 w-36 rounded-lg" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <div className="h-6 w-6 bg-[#BBF49C] rounded-full"></div>
                      <span className="font-medium">Jessica Green</span>
                    </div>
                    <span className="head">The Impact of Global Events</span>
                    <div className="flex text-sm">
                      <span className="text-green-900 font-normal mr-3">
                        Stock Market
                      </span>
                      <span className="text-gray-400 font-normal">Sep 22</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <img src={image1} alt="" className="h-30 w-36 rounded-lg" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <div className="h-6 w-6 bg-[#BBF49C] rounded-full"></div>
                      <span className="font-medium">Jessica Green</span>
                    </div>
                    <span className="head">The Impact of Global Events</span>
                    <div className="flex text-sm">
                      <span className="text-green-900 font-normal mr-3">
                        Stock Market
                      </span>
                      <span className="text-gray-400 font-normal">Sep 22</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <img src={image1} alt="" className="h-30 w-36 rounded-lg" />
                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <div className="h-6 w-6 bg-[#BBF49C] rounded-full"></div>
                      <span className="font-medium">Jessica Green</span>
                    </div>
                    <span className="head">The Impact of Global Events</span>
                    <div className="flex text-sm">
                      <span className="text-green-900 font-normal mr-3">
                        Stock Market
                      </span>
                      <span className="text-gray-400 font-normal">Sep 22</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* popular insights */}
          <div className="flex flex-col p-4">
            <div className="flex justify-between">
              <span className="head">Popular Insights</span>
              <span>yahan image ani</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 pt-4">
              {popular.map((item, index) => (
                <div
                  className="flex flex-col sm:flex-row bg-[#ECF4E9] p-4 rounded-md hover:shadow-md transition-shadow"
                  key={index}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-full sm:w-20 h-20 object-cover rounded-lg mb-3 sm:mb-0 sm:mr-3"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm text-[#1E4841] font-medium">
                        {item.business}
                      </span>
                      <span className="text-sm text-[#6B7271] font-medium">
                        {item.time}
                      </span>
                    </div>
                    <span className="text-lg font-bold line-clamp-1">
                      {item.head}
                    </span>
                    <span className="text-sm text-[#6B7271] font-normal line-clamp-2">
                      {item.desc}
                    </span>
                    <div className="flex items-center mt-2">
                      <div className="h-6 w-6 rounded-full bg-[#BBF49C] mr-2"></div>
                      <span className="text-sm font-medium truncate">
                        {item.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* recommendations */}
          <div className="flex flex-col p-4">
            <span className="head">Recommendations</span>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {data.map((item, index) => (
                <div className="flex flex-col space-y-1 py-3" key={index}>
                  <img
                    src={item.image}
                    alt=""
                    className="h-40 rounded-lg object-cover"
                  />
                  <span className="flex items-center font-medium">
                    <span className="mr-4 text-[#1E4841] text-sm ">
                      {item.company}
                    </span>
                    <span className="text-sm text-[#6B7271] ">{item.date}</span>
                  </span>
                  <h2 className="text-xl md:text-xl font-bold">
                    {item.mainhead}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-2 w-full lg:w-80 xl:w-96 xl:block hidden">
          <Trending />
        </div>
      </div>
    </>
  );
};

export default Insights;
