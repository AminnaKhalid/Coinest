// components/BarChart.jsx
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data similar to your screenshot
const data = [
  { month: "Jan", value: 10000 },
  { month: "Feb", value: 15000 },
  { month: "Mar", value: 15000 },
  { month: "Apr", value: 25000 },
  { month: "May", value: 8000 },
  { month: "Jun", value: 31675.05 },
  { month: "Jul", value: 25000 },
  { month: "Aug", value: 28000 },
  { month: "Sep", value: 31000 },
  { month: "Oct", value: 40000 },
];

const BarChart = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#A6E49F" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#A6E49F" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 40000]} tickFormatter={(v) => `${v / 1000}K`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Area
            type="stepAfter"
            dataKey="value"
            stroke="#205C38"
            fillOpacity={1}
            fill="url(#colorValue)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChart;
