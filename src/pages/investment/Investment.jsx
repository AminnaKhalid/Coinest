import React from 'react'
import Navbar from "../components/Navbar"
import Heading from "../components/Heading"
import Profits from './Profits';
import Watchlist from './Watchlist';
import Portfolio from './Portfolio';
import Portfoliovalue from './Portfoliovalue';
const Investment = () => {
  return (
    <>
      <div className="flex bg-[#ECF4E9]">
        <Navbar />

        <div className="flex flex-col min-h-screen w-full rounded-tl-4xl bg-white md:p-4 p-0  ">
          <Heading heading={"Investment"} />
          <div className="grid grid-cols-12 md:grid-cols-8 gap-4 mt-4 p-2">
            <div className="col-span-12 md:col-span-4 ">
                <Portfoliovalue />
            </div>
            <div className="col-span-12 md:col-span-4">
                <Profits />
            </div>
            <div className="col-span-12 md:col-span-4">
                <Watchlist />
            </div>
            <div className="col-span-12 md:col-span-4 ">
                <Portfolio />
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Investment