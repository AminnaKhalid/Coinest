import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Dollars: 900, pv: 2400, amt: 2400 },
  { name: "Feb", Dollars: 1800, pv: 1398, amt: 2210 },
  { name: "Mar", Dollars: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", Dollars: 2780, pv: 3908, amt: 2000 },
  { name: "May", Dollars: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", Dollars: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", Dollars: 3490, pv: 4300, amt: 2100 },
];

export default function App() {
  return (
    <div className="w-full py-3 bg-white rounded-lg ">
      <div className="w-full h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            syncId="anyId"
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Dollars"
              stroke="#1E4841"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
