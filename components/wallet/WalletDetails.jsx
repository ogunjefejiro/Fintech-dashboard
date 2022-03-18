import React, { useState, useEffect } from "react";
import Link from "next/link";
import WalletDetailsTab from "./WalletDetailsTab";
import WalletLineChart from "../WalletLineChart";
import Spinner from "../Spinner";

const btnLinks = [
  {
    title: "Payment",
    link: "#",
    icon: "/send-2.svg",
  },
  {
    title: "Pay In",
    link: "#",
    icon: "/received-2.svg",
  },
  {
    title: "Exchange",
    link: "#",
    icon: "/exchange.svg",
  },
];
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

const WalletDetails = ({ cards, activeCard }) => {
  const [data, setData] = useState();
  const [activeGraph, setActiveGraph] = useState(0);

  const cardDetails = cards().filter((item) => item.id === activeCard);

  useEffect(() => {
    if (cardDetails.length > 0) {
      setData(cardDetails[0]);
    }
  }, [cardDetails]);

  return (
    <>
      {!data ? (
        <Spinner />
      ) : (
        <div className="text-[#2B4146]">
          <div className="flex justify-between items-center border border-[#F3F4F6] rounded-lg p-4">
            <div className="text-sm">
              <div className="flex gap-1 items-center">
                {data.status == "active" && <img src="/active.svg" alt="" />}
                <p
                  className={`text-xs ${
                    data.status == "active"
                      ? "text-[#22C55E]"
                      : data.status == "inactive"
                      ? "text-yellow-500"
                      : "text-[red]"
                  } capitalize`}
                >
                  {data.status}
                </p>
              </div>
              <h2>{data.name}</h2>
              <h2 className="text-primary">{data.currency}</h2>
            </div>
            <div>
              <h2 className="font-bold text-2xl lg:text-3xl">{data.amount}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-1 lg:flex-row lg:justify-between text-sm items-center w-full my-3">
            <div className="w-full lg:w-1/2">
              <h2 className="mb-1">Ledger Balance: {data.ledgerBal}</h2>
              <h2>Blocked Balance: {data.blockedBal}</h2>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="mb-1">Total Incoming: {data.totalInc}</h2>
              <h2>Total Outgoing: {data.totalOut}</h2>
            </div>
          </div>
          <div className="flex justify-between gap-2 lg:gap-6 items-center w-full">
            {btnLinks.map(({ title, icon, link }, i) => (
              <div key={i} className="w-full">
                <Link href={link}>
                  <a className="btn btn-outline btn-xs lg:btn-md gap-2 capitalize text-primary hover:bg-white hover:text-primary hover:border-primary w-full">
                    <img src={icon} alt="" />
                    {title}
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-1 items-center mt-3">
            <h2 className="text-xs font-bold text-[#017189]">More Options</h2>
            <img src="/arrow-down-primary.svg" alt="" />
          </div>
          <div className="my-5">
            <WalletDetailsTab
              activeGraph={activeGraph}
              setActiveGraph={setActiveGraph}
            />
          </div>
          {activeGraph == 0 && (
            <div>
              <div className="flex justify-end">
                <div className="flex gap-1 items-center">
                  <h2 className="text-xs text-[#017189]">Month</h2>
                  <img src="/arrow-down-primary.svg" alt="" />
                </div>
              </div>
              <div className="flex gap-2 justify-around my-5">
                {data?.activityLegend.map(({ icon, title, amount }, i) => (
                  <div key={i} className="flex gap-2 lggap-4 items-center">
                    <img src={icon} alt="" />

                    <div className="">
                      <h3 className="text-[#2B4146] text-xs">{title}</h3>
                      <p className="text-[#001B21] text-xs font-bold">
                        {amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <WalletLineChart />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default WalletDetails;
