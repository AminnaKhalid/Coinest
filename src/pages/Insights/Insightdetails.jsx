import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import image from "./assets/image1.jpg";
import fb from "../promos/assets/fb.png";
import insta from "../promos/assets/insta.png";
import x from "../promos/assets/x.png";
import link from "../promos/assets/link.png";
import Dropdown from "./Dropdown";

const Insightdetails = () => {
  const articleData = {
    title: "The Rise of Index Funds",
    subtitle:
      "An exploration of how index funds have become a dominant investment choice for both novice and experienced investors due to their simplicity, lower costs, and competitive returns.",
    author: "Alex Reed",
    category: "Mutual Funds",
    date: "September 14, 2028",
    sections: [
      {
        type: "paragraph",
        content:
          "Index funds have gained immense popularity as investment vehicles over the past two decades. Their appeal lies in the simplicity and effectiveness they offer, making them a favored choice among both new and seasoned investors.",
      },
      {
        type: "heading",
        content: "The Appeal of Index Funds",
      },
      {
        type: "paragraph",
        content:
          "Unlike actively managed funds that attempt to beat the market by selecting a variety of stocks, index funds follow a passive investment strategy. They simply track a predefined basket of stocks that represent a particular market index, such as the S&P 500 or the NASDAQ. This method offers several inherent advantages:",
      },
      {
        type: "list",
        items: [
          {
            title: "LowCost:",
            content:
              "Index funds typically have lower expense ratios than actively managed funds because they require less management effort. The reduced cost is a critical factor that directly improves investor returns over time.",
          },
          {
            title: "Transparency:",
            content:
              "Investors know exactly which assets are held by an index fund, providing greater transparency compared to the often opaque strategies employed by active fund managers.",
          },
          {
            title: "Tax Efficiency:",
            content:
              "By trading less frequently, index funds generate fewer capital gains distributions, which can be advantageous from a tax perspective.",
          },
        ],
      },
      {
        type: "heading",
        content: "Performance Comparison",
      },
      {
        type: "paragraph",
        content:
          "Numerous studies have shown that index funds consistently outperform a large portion of actively managed funds over long periods. According to the S&P Indices Versus Active (SPIVA) reports, over the last 15 years, more than 80% of active fund managers have failed to beat their respective benchmarks. This has progressively driven investors toward the more predictable performance of index funds.",
      },
      {
        type: "heading",
        content: "Investor Behavior and Market Trends",
      },
      {
        type: "paragraph",
        content:
          "The rise of index funds also reflects a broader shift in investor behavior, where there is an increasing preference for investment options that are easy to understand and manage. This trend is coupled with the growing availability of financial information and online trading platforms that encourage a more hands-off approach to investing.",
      },
      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "As the financial landscape continues to evolve, the simplicity and effectiveness of index funds make them a compelling choice for those looking to build long-term wealth. Their ability to offer market-matching performance at a fraction of the cost of actively managed funds ensures they will remain a significant part of the investment conversation for years to come.",
      },
    ],
  };

  const tag = [
    { name: "IndexFunds" },
    { name: "MutualFunds" },
    { name: "investing" },
  ];

  const socialIcons = [
    { src: insta, alt: "Instagram" },
    { src: fb, alt: "Facebook" },
    { src: x, alt: "Twitter" },
    { src: link, alt: "LinkedIn" },
  ];

  const tableOfContents = [
    "The Appeal of Index Funds",
    "Performance Comparison",
    "Investor Behavior and Market Trends",
    "Conclusion",
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col min-h-screen w-full bg-white rounded-tl-4xl">
          <Heading heading={"Insights Details"} />

          {/* Article header section */}
          <div className="flex flex-col justify-center items-center space-y-2 p-4">
            <span className="head text-center px-4">{articleData.title}</span>
            <div className="text-sm text-[#6B7271] font-normal text-center px-4 md:px-8 lg:px-20">
              {articleData.subtitle}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="h-5 w-5 rounded-full bg-[#BBF49C]"></span>
                <span className="text-xs font-medium">
                  {articleData.author}
                </span>
              </div>
              <span className="text-[#1E4841] text-xs font-normal">
                {articleData.category}
              </span>
              <span className="text-[#6B7271] text-xs font-normal">
                {articleData.date}
              </span>
            </div>
          </div>

          {/* Article image */}
          <img
            src={image}
            alt="Article visual"
            className="h-auto md:h-1/5 object-cover rounded-2xl p-4 w-full"
          />

          {/* Article content */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 my-4">
            {/* Main content */}
            <div className="flex flex-col space-y-3 px-4 sm:px-6 md:pl-10 justify-center xl:col-span-2">
              {articleData.sections.map((section, index) => (
                <React.Fragment key={index}>
                  {section.type === "heading" && (
                    <span className="head mt-3">{section.content}</span>
                  )}
                  {section.type === "paragraph" && (
                    <span className="subhead">{section.content}</span>
                  )}
                  {section.type === "list" &&
                    section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex space-x-2">
                        <span className="h-1 mt-3 w-1 rounded-full bg-gray-700 flex-shrink-0"></span>
                        <div>
                          <span className="subhead text-black font-medium">
                            {item.title}
                          </span>
                          <span className="subhead">{item.content}</span>
                        </div>
                      </div>
                    ))}
                </React.Fragment>
              ))}

              <div className="bg-[#ECF4E9] p-4 rounded-lg text-black font-medium text-[16px] my-4">
                "Index funds are the most sensible equity investment for the
                great majority of investors"
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col px-4 sm:px-6 md:pl-10 xl:pl-0 xl:pr-6 xl:col-span-1">
              {/* Table of Contents */}
              <div className="flex flex-col space-y-2 border-b border-gray-200 pb-4">
                <span className="head">Introduction</span>
                {tableOfContents.map((item, index) => (
                  <span key={index} className="subhead font-normal">
                    {item}
                  </span>
                ))}
              </div>

              {/* Share section */}
              <div className="flex flex-col my-3">
                <span className="head pb-2">Share</span>
                <div className="flex space-x-3">
                  {socialIcons.map((icon, index) => (
                    <img
                      key={index}
                      src={icon.src}
                      alt={icon.alt}
                      className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              {/* Tags section */}
              <div className="flex flex-col my-3">
                <span className="head pb-2">Tags</span>
                <div className="flex flex-wrap gap-2">
                  {tag.map((tagItem, index) => (
                    <div
                      key={index}
                      className="bg-[#ECF4E9] px-2 py-2 flex rounded-lg"
                    >
                      <span className="subhead">#</span>
                      <span className="subhead text-black">{tagItem.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related content section */}
          <div className="border-t border-gray-200 pt-4 p-4 sm:px-6 md:px-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="head mb-2 sm:mb-0">Related Contents</div>
              <Dropdown />
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full ">
                {/* Card 1 */}
                <div className="flex flex-col gap-2">
                  <img
                    src={image}
                    alt="Investment strategy"
                    className="h-48 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-green-800">
                      Investment Strategies
                    </span>
                    <span className="text-sm font-semibold mt-1">
                      Diversification Techniques for 2023
                    </span>
                
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

export default Insightdetails;
