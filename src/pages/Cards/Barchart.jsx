import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mar", income: 8000, expense: 6000 },
  { name: "Apr", income: 7000, expense: 5500 },
  { name: "May", income: 10000, expense: 5000 },
  { name: "Jun", income: 6000, expense: 7000 },
  { name: "Jul", income: 9000, expense: 4000 },
  { name: "Aug", income: 8500, expense: 6500 },
];

const Barchart = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            <span className="text-sm flex items-center">
              <span className="w-3 h-3 bg-[#1E4841] rounded-sm mr-1"></span>
              Income
            </span>
            <span className="text-sm flex items-center">
              <span className="w-3 h-3 bg-[#D9D9D9] rounded-sm mr-1"></span>
              Expense
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[-5000, 0, 5000, 10000]}
            domain={[-5000, 10000]}
          />
          <Tooltip />
          <Bar dataKey="income" fill="#BBF49C" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" fill="#1E4841" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
