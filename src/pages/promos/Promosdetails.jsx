import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import image from "./assets/image2.jpg";
import fb from "./assets/fb.png"
import insta from "./assets/insta.png"
import x from "./assets/x.png"
import link from "./assets/link.png"
import threedots from "../Saving/assets/threevertical.png";
const Promosdetails = () => {
  const data = [
    {
      name: "Voucher Code",
      code: "TRAVEL2028",
      description: "Valid for Hotels, Flights, and Experiences",
    },
    {
      name: "Voucher Code",
      code: "EXPLORE2028",
      description: "Valid for Airport Transfer and Car Rentals",
    },
  ];


  // data fpr acrds

  const cards = [
    {
      image: image,
      subhead: "Travel Rewards",
      head: "Earn 3x Points on Travel",
    },
    {
      image: image,
      subhead: "Cashback Offers",
      head: "Get 5% Cashback on All Purchases",
    },
    {
      image: image,
      subhead: "Referral Bonus",
      head: "Refer a Friend and Earn $50",
    },
  ];
  return (
    <>
      <div className="flex bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col w-full min-h-screen rounded-tl-4xl bg-white md:p-4 p-0">
          <Heading heading={"Promo Details"} />
          <img
            src={image}
            alt=""
            className="rounded-xl h-96 w-full object-cover p-2 md:p-0"
          />
          <div className="grid grid-cols-12 xl:grid-cols-3 gap-4 mt-4">
            <div className="col-span-12 xl:col-span-2 flex flex-col px-4 ">
              <div className="text-3xl font-bold text-[#1E4841]">
                Travel Rewards Special
              </div>
              <div className="flex flex-col mt-8 space-y-4 border-b border-gray-300 pb-4">
                <div className="flex space-x-4 md:space-x-6 text-[#6B7271] text-sm md:text-lg font-normal">
                  <h2>Promo Period</h2>
                  <span className="text-black">Nov 1 - Nov 30, 2028</span>
                </div>
                <div className="flex space-x-4 md:space-x-6 text-[#6B7271] text-sm md:text-lg font-normal">
                  <h2>Usage Period</h2>
                  <span className="text-black">During the promo period</span>
                </div>
                <div className="flex space-x-4 md:space-x-6 text-[#6B7271] text-sm md:text-lg font-normal">
                  <h2>Minimum Transaction</h2>
                  <span className="text-black">$300</span>
                </div>
              </div>
              {/* about section */}
              <div className="flex flex-col my-5">
                <span className="head">About</span>
                <span className="subhead mt-2">
                  Earn triple points on all travel-related purchases when
                  booking through our exclusive partner portals. Perfect for
                  frequent travelers looking to maximize rewards on their trips.
                  Enjoy the freedom to explore new destinations while
                  accumulating rewards faster, ensuring your travel budget works
                  harder for you.
                </span>
              </div>

              {/* how to */}
              <div className="flex flex-col mb-5">
                <span className="head">How To</span>
                <span className="subhead mt-2">
                  Log into your Coinest account, navigate to the 'Rewards'
                  section, and use the links provided to book your travel.
                  Points automatically triple for all eligible transactions.
                </span>
              </div>

              {/* terms and conditions */}
              <div className="flex flex-col mb-5">
                <span className="head">Terms & Conditions</span>
                <span className="subhead mt-2">
                  <ul className="list-disc pl-5 text-[#6B7271] subhead mask:text-gray-300">
                    <li>
                      Must book travel through designated Coinest partner
                      portals.
                    </li>
                    <li>
                      Triple points apply only to the first $5,000 of travel
                      expenses.
                    </li>
                    <li>Points are awarded after travel is completed.</li>
                    <li>
                      Cancellations may result in forfeiture of bonus points.
                    </li>
                  </ul>
                </span>
              </div>

              {/* partners */}
              <div className="flex flex-col mb-5">
                <div className="head">Partners</div>
                <ul className="list-disc pl-5 text-[#6B7271] subhead mask:text-gray-300">
                  <li>Expedia</li>
                  <li>Booking.com</li>
                  <li>Airbnb</li>
                </ul>
              </div>

              {/* grid for cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.map((item, index) => (
                  <div className="card flex flex-col space-y-3 " key={index}>
                    <span className="head">{item.name}</span>
                    <div className="card p-x-2 py-1 bg-[#ECF4E9] rounded-sm">
                      {item.code}
                    </div>
                    <span className="subhead">{item.description}</span>
                    <button className="text-center font-medium bg-[#1E4841] text-white rounded-lg py-3 w-full">
                      Copy Code
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 xl:col-span-1 flex flex-col px-8">
              <div className="flex flex-col">
                <span className="head pb-2">Share</span>
                <div className="flex space-x-3">
                  <img src={insta} alt=""  className="h-10 w-10 cursor-pointer" />
                  <img src={fb} alt="" className="h-10 w-10 cursor-pointer" />
                  <img src={x} alt=""  className="h-10 w-10 cursor-pointer"/>
                  <img src={link} alt="" className="h-10 w-10 cursor-pointer" />
                </div>
                <div className="flex justify-between py-3">
                <span className="head">Related Promos</span>
                <img src={threedots} alt="" className="w-10 h-10"/>

                </div>
                {/* cards section */}
                <div className="flex flex-col py-2 ">
                  {cards.map((item, index)=>(
                    <div className=" flex flex-col py-4" key={index}>
                    <img src={item.image} alt="" className="w-full h-48 rounded-xl" />
                    <span className="text-sm text-[#1E4841] font-medium mt-4">{item.subhead}</span>
                    <span className="text-xl font-bold">{item.head}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Promosdetails;
