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
  {
    name: "Jan",
    total: 4000,
    out: 2400,
    in: 2000,
  },
  {
    name: "Feb",
    total: 3000,
    out: 1398,
    in: 908,
  },
  {
    name: "Mar",
    total: 2000,
    out: 9800,
    in: 4000,
  },
  {
    name: "Apr",
    total: 2780,
    out: 3908,
    in: 7000,
  },
  {
    name: "May",
    total: 1890,
    out: 4800,
    in: 8000,
  },
  {
    name: "Jun",
    total: 2390,
    out: 3800,
    in: 5000,
  },
  {
    name: "Jul",
    total: 3490,
    out: 4300,
    in: 4500,
  },
  {
    name: "Aug",
    total: 3490,
    out: 4300,
    in: 3900,
  },
  {
    name: "Sep",
    total: 3490,
    out: 4300,
    in: 5000,
  },
  {
    name: "Oct",
    total: 3490,
    out: 4300,
    in: 7500,
  },
  {
    name: "Nov",
    total: 3490,
    out: 4300,
    in: 3000,
  },
  {
    name: "Dec",
    total: 3490,
    out: 4300,
    in: 7500,
  },
];

const WalletLineChart = () => {
  return (
    <ResponsiveContainer height={250}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 5,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: "#2B4146", fontSize: 13 }} />
        <YAxis tick={{ fill: "#2B4146", fontSize: 13 }} />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="total"
          stroke="#008AA8"
          strokeWidth="3px"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="out" stroke="red" strokeWidth="3px" />
        <Line type="monotone" dataKey="in" stroke="green" strokeWidth="3px" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WalletLineChart;
