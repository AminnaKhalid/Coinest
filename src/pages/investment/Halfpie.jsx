import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Stocks", value: 275000 },
  { name: "Bonds", value: 100000 },
  { name: "Real Estate", value: 75000 },
  { name: "Mutual Funds", value: 50000 },
];

const COLORS = ["#143A2B", "#B8F2C9", "#E7F5E8", "#E6E6E6"];

const HalfPie = () => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="max-w-md mx-auto">
      {/* Header */}
      <div className="text-center my-2">
        <div className="text-gray-600 text-sm">Total Assets</div>
        <div className="text-3xl font-bold">${total.toLocaleString()}</div>
        <div className="text-green-500 text-sm mt-1">
          +5% compared to last year
        </div>
      </div>

      {/* Responsive Half Pie Chart */}
      <ResponsiveContainer width="100%" height={220} className={"-mt-30"}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%" // Keep it at bottom center to make it half
            startAngle={180} // Draw from bottom left
            endAngle={0} // to bottom right
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5} // More gap between segments
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="space-y-2 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between items-center space-y-3">
            <div className="flex items-center space-x-2">
              <div
                className="w-4 h-8 rounded"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-gray-800 text-[16px] font-medium">
                {item.name}
              </span>
            </div>
            <div className="text-sm text-right">
              <div className="text-gray-700 font-semibold">
                {((item.value / total) * 100).toFixed(0)}%
              </div>
              <div className="text-gray-500 font-normal">
                ${item.value.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HalfPie;
