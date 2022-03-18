import React from "react";
import Link from "next/link";
import LineChart from "../WalletLineChart";

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
        <LineChart />
      </div>
    </div>
  );
};

export default Activity;
