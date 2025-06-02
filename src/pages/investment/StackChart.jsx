// components/StackChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    year: "2021",
    fund: 2000,
    interest: 1500,
    bonus: 1000,
    total: 5888.55,
  },
  {
    year: "2022",
    fund: 2500,
    interest: 1800,
    bonus: 1200,
    total: 6511.5,
  },
  {
    year: "2023",
    fund: 1800,
    interest: 1700,
    bonus: 1000,
    total: 5308.45,
  },
  {
    year: "2024",
    fund: 3000,
    interest: 2200,
    bonus: 1232,
    total: 7432.15,
  },
  {
    year: "2025",
    fund: 3200,
    interest: 2400,
    bonus: 1083,
    total: 7683.3,
  },
  {
    year: "2026",
    fund: 4000,
    interest: 2700,
    bonus: 1224,
    total: 8924,
  },
  {
    year: "2027",
    fund: 3600,
    interest: 2800,
    bonus: 1160,
    total: 8016.3,
  },
  {
    year: "2028",
    fund: 4200,
    interest: 3000,
    bonus: 1580,
    total: 10780.4,
  },
];

const StackChart = () => {
  return (
    <div className="w-full h-68">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => `$${v / 1000}K`} />
          <Tooltip formatter={(val) => `$${val.toFixed(2)}`} />
          <Legend />
          <Bar dataKey="fund" stackId="a" fill="#D5EED1" />
          <Bar dataKey="interest" stackId="a" fill="#A6E49F" />
          <Bar dataKey="bonus" stackId="a" fill="#205C38" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StackChart;
