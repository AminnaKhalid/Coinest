import sort from "../Dashboard/assets/Sort.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import badge1 from "./assets/badge1.png";
import badge2 from "./assets/badge2.png";

const Table = () => {
  const data = [
    {
      icon: icon1,
      transactionname: "Bonus Payment",
      income: "Income",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "12345678",
      date: "2024-09-25",
      time: "12:00 PM",
      price: "+$500.00",
      note: "Annual performance bonus",
      badge: badge1,
    },
    {
      icon: icon2,
      transactionname: "Stock Dividends",
      income: "Investments",
      card: card2,
      cardname: "Freedom Unlimited Mastercard",
      cardno: "23456789",
      date: "2024-09-24",
      time: "01:00 PM",
      price: "+$300.00",
      note: "Quarterly stock dividend",
      badge: badge2,
    },
    {
      icon: icon3,
      transactionname: "Comcast Bill Payment",
      income: "Utilities",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "34567890",
      date: "2024-09-24",
      time: "02:00 PM",
      price: "+$300.00",
      note: "Monthly internet and TV bill",
      badge: badge1,
    },
    {
      icon: icon1,
      transactionname: "Bonus Payment",
      income: "Income",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "12345678",
      date: "2024-09-25",
      time: "12:00 PM",
      price: "+$500.00",
      note: "Annual performance bonus",
      badge: badge1,
    },
    {
      icon: icon2,
      transactionname: "Stock Dividends",
      income: "Investments",
      card: card2,
      cardname: "Freedom Unlimited Mastercard",
      cardno: "23456789",
      date: "2024-09-24",
      time: "01:00 PM",
      price: "+$300.00",
      note: "Quarterly stock dividend",
      badge: badge2,
    },
    {
      icon: icon3,
      transactionname: "Comcast Bill Payment",
      income: "Utilities",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "34567890",
      date: "2024-09-24",
      time: "02:00 PM",
      price: "+$300.00",
      note: "Monthly internet and TV bill",
      badge: badge1,
    },
    {
      icon: icon1,
      transactionname: "Bonus Payment",
      income: "Income",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "12345678",
      date: "2024-09-25",
      time: "12:00 PM",
      price: "+$500.00",
      note: "Annual performance bonus",
      badge: badge1,
    },
    {
      icon: icon2,
      transactionname: "Stock Dividends",
      income: "Investments",
      card: card2,
      cardname: "Freedom Unlimited Mastercard",
      cardno: "23456789",
      date: "2024-09-24",
      time: "01:00 PM",
      price: "+$300.00",
      note: "Quarterly stock dividend",
      badge: badge2,
    },
    {
      icon: icon3,
      transactionname: "Comcast Bill Payment",
      income: "Utilities",
      card: card1,
      cardname: "Platinum Plus Visa",
      cardno: "34567890",
      date: "2024-09-24",
      time: "02:00 PM",
      price: "+$300.00",
      note: "Monthly internet and TV bill",
      badge: badge1,
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 w-full">
      <div className="overflow-x-auto w-full pt-3">
        {/* Table Container */}
        <div className="min-w-full">
          {/* Table Header - Hidden on mobile, shown on md and larger */}
          <div className="hidden xl:grid md:grid-cols-10 bg-white rounded-t-lg border-b border-[#E5E6E6] py-3 px-4">
            {/* Checkbox + Transaction Name */}
            <div className="col-span-2 flex items-center">
              <input
                type="checkbox"
                className="cursor-pointer w-4 h-4 border border-[#E4E2DD] mr-3"
              />
              <span className="text-sm font-medium text-[#6B7271]">
                Transaction Name
              </span>
              <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
            </div>

            {/* Account */}
            <div className="col-span-2 flex items-center">
              <span className="text-sm font-medium text-[#6B7271]">
                Account
              </span>
              <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
            </div>

            {/* Transaction ID */}
            <div className="col-span-1 flex items-center">
              <span className="text-sm font-medium text-[#6B7271]">
                Transaction ID
              </span>
              <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
            </div>

            {/* Date & Time */}
            <div className="col-span-1 flex items-center">
              <span className="text-sm font-medium text-[#6B7271]">
                Date & Time
              </span>
              <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
            </div>

            {/* Amount */}
            <div className="col-span-1 flex items-center">
              <span className="text-sm font-medium text-[#6B7271]">Amount</span>
              <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
            </div>

            {/* Note */}
            <div className="col-span-2 flex items-center">
              <span className="text-sm font-medium text-[#6B7271]">Note</span>
              <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
            </div>

            {/* Status */}
            <div className="col-span-1 flex items-center">
              <span className="text-sm font-medium text-[#6B7271]">Status</span>
              <img src={sort} alt="sort" className="w-4 h-4 ml-1" />
            </div>
          </div>

          {/* Table Rows */}
          <div className="space-y-2 md:space-y-0">
            {data.map((data, index) => (
              <div
                key={index}
                className="bg-white rounded-lg md:rounded-none border border-[#E5E6E6] md:border-b xl:border-t-0 p-4 xl:p-0 xl:grid md:grid-cols-10 xl:items-center hover:bg-gray-50 transition-colors"
              >
                {/* Mobile View - Top Row */}
                <div className="xl:hidden flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="cursor-pointer w-4 h-4 border border-[#E4E2DD] mr-3"
                    />
                    <img src={data.icon} alt="" className="w-6 h-6" />
                    <div className="ml-2">
                      <p className="text-sm font-medium">
                        {data.transactionname}
                      </p>
                      <p className="text-xs text-[#6B7271]">{data.income}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium">{data.price}</span>
                </div>

                {/* Mobile View - Middle Row */}
                <div className="xl:hidden flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <img src={data.card} alt="" className="w-9 h-6 mr-2" />
                    <span className="text-xs">
                      •••• {data.cardno.slice(-4)}
                    </span>
                  </div>
                  <img
                    src={data.badge}
                    alt=""
                    className="w-20 h-6 object-cover rounded-md"
                  />
                </div>

                {/* Mobile View - Bottom Row */}
                <div className="xl:hidden">
                  <p className="text-xs text-[#6B7271] mb-1">
                    {data.date} • {data.time}
                  </p>
                  <p className="text-xs">{data.note}</p>
                </div>

                {/* Desktop View */}
                {/* Checkbox + Transaction Name */}
                <div className="hidden xl:flex col-span-2 items-center py-4 px-4">
                  <input
                    type="checkbox"
                    className="cursor-pointer w-4 h-4 border border-[#E4E2DD] mr-3"
                  />
                  <img src={data.icon} alt="" className="w-6 h-6" />
                  <div className="ml-2">
                    <p className="text-sm font-medium">
                      {data.transactionname}
                    </p>
                    <p className="text-xs text-[#6B7271]">{data.income}</p>
                  </div>
                </div>

                {/* Account */}
                <div className="hidden xl:flex col-span-2 items-center py-4 px-4">
                  <img src={data.card} alt="" className="w-9 h-6 mr-2" />
                  <span className="text-sm">{data.cardname}</span>
                </div>

                {/* Transaction ID */}
                <div className="hidden xl:flex col-span-1 items-center py-4 px-4 text-sm">
                  {data.cardno}
                </div>

                {/* Date & Time */}
                <div className="hidden xl:flex flex-col col-span-1 py-4 px-4">
                  <span className="text-sm">{data.date}</span>
                  <span className="text-xs text-[#6B7271]">{data.time}</span>
                </div>

                {/* Amount */}
                <div className="hidden xl:flex col-span-1 items-center py-4 px-4 text-sm font-medium">
                  {data.price}
                </div>

                {/* Note */}
                <div className="hidden xl:flex col-span-2 items-center py-4 px-4 text-sm">
                  {data.note}
                </div>

                {/* Status */}
                <div className="hidden xl:flex col-span-1 items-center py-4 px-4">
                  <img
                    src={data.badge}
                    alt=""
                    className="w-20 h-7 object-cover rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
