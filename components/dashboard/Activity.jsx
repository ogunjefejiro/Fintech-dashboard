import React from "react";
import Link from "next/link";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const legend = [
  {
    icon: "/status-up.svg",
    title: "Total transactions",
    amount: "$88,600.00",
  },
  {
    icon: "/received.svg",
    title: "Pay-In",
    amount: "$4,600.00",
  },
  {
    icon: "/send.svg",
    title: "Pay-Out",
    amount: "$72,600.00",
  },
];

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

const Activity = () => {
  return (
    <div className="text-[#001B21]">
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-5 items-center">
          <h2 className="font-bold">Activity</h2>
          <div className="flex gap-1 items-center">
            <h2 className="text-xs text-[#017189]">Month</h2>
            <img src="/arrow-down-primary.svg" alt="" />
          </div>
        </div>

        <Link href="#">
          <a className="text-xs text-[#017189]">View transaction history</a>
        </Link>
      </div>
      <div className="flex justify-center lg:justify-end w-full mb-5">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-2 justify-between">
            {legend.map(({ icon, title, amount }, i) => (
              <div key={i} className="flex gap-2 lggap-4 items-center">
                <img src={icon} alt="" />

                <div className="">
                  <h3 className="text-[#2B4146] text-xs">{title}</h3>
                  <p className="text-[#001B21] text-xs font-bold">{amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mb-5">
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
            <Line
              type="monotone"
              dataKey="out"
              stroke="red"
              strokeWidth="3px"
            />
            <Line
              type="monotone"
              dataKey="in"
              stroke="green"
              strokeWidth="3px"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Activity;
