import React, { useContext } from "react";
import Link from "next/link";
import data from "../../data";
import ActiveContext from "../../context/ActiveContext";

const cards = [
  {
    name: "Personal account",
    currency: "USD",
    img: "/usa.svg",
    amount: "$10,250.00",
    color: "#FFF6E6",
  },
  {
    name: "EUR Wallet",
    currency: "EUR",
    img: "/europe.svg",
    amount: "€4000.53",
    color: "#FBF1F0",
  },
  {
    name: "School fees",
    currency: "GBP",
    img: "/england.svg",
    amount: "£50.00",
    color: "#DDECEF",
  },
];

const WalletCards = () => {
  const { setActiveCard } = useContext(ActiveContext);
  return (
    <div className="text-[#001B21]">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-bold">Wallet ({data.active.length})</h2>
        <Link href="/wallet">
          <a className="text-xs text-[#017189]">View all wallets</a>
        </Link>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-2 lg:pb-0">
        {data.active.map(({ name, currency, img, amount, color, id }, i) => (
          <Link href="/wallet" key={i}>
            <a
              className="p-4 rounded-lg md:w-full  cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => setActiveCard(id)}
            >
              <div className="flex min-w-[200px] justify-between items-center mb-6">
                <div className="text-sm">
                  <h3 className="">{name}</h3>
                  <p className="">{currency}</p>
                </div>
                <div>
                  <img src={img} alt="" />
                </div>
              </div>
              <h2 className="text-md font-bold">{amount}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WalletCards;
