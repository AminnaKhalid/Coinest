import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Heading from '../components/Heading'
import Plansprogress from './Plansprogress'
import Savingdetails from './Savingdetails'
import saving from "./assets/saving.png"
import badge from "../Dashboard/assets/Badge.png"
import badge1 from "../Dashboard/assets/badge1.png"
const Savingplans = () => {

    const [selectedPlan, setSelectedPlan] = useState(null)

    const savingdata = [
        {
            name: "Savings",
            amount: "$47,000",
            icon: badge
        },
        {
            name: "Target",
            amount: "$56,100",
            icon: badge1
        },
        {
            name: "Plans",
            amount: "15",
            icon: badge
        }
    ]
  return (
    <>
      <div className="flex bg-[#ECF4E9]">
        <Navbar />
        <div className="flex flex-col min-h-screen w-full rounded-tl-4xl bg-white md:p-4 p-0">
          <Heading heading={"Savings Plans"} />
          {/* flex for three boxes here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 p-4 border-b-[1px] border-[#E5E6E6]">
            {savingdata.map((items) => (
              <div className="flex justify-between bg-[#ECF4E9] px-3 py-5 rounded-xl hover:shadow-md">
                <div className="flex flex-col space-y-2">
                  <span className="text-sm md:text-[16px] font-medium mb-4 xl:mb-0">
                    Total {items.name}
                  </span>
                  <div className="flex items-center space-x-2 ">
                    <span className="text-lg xl:text-3xl font-bold text-[#1E4841]">
                      {items.amount}
                    </span>
                    <img
                      src={items.icon}
                      alt=""
                      className="xl:w-22 h-5 w-18 xl:object-cover"
                    />
                  </div>
                </div>
                <img
                  src={saving}
                  alt=""
                  className="h-10 w-10 xl:w-17 xl:h-17"
                />{" "}
              </div>
            ))}
          </div>

          {/* grid section for two coloumns sides */}
          <div className="grid grid-cols-12 md:grid-cols-12 gap-4 p-4">
            <div className="col-span-12 xl:col-span-4">
              <Plansprogress setSelectedPlan={setSelectedPlan} />
            </div>
            <div className="col-span-12 xl:col-span-8">
              <Savingdetails plan={selectedPlan} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Savingplans