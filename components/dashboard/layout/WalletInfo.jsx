import React, { useState } from "react";
import Link from "next/link";

const overview = [
  {
    name: "Wallet Balance",
    amount: "$15,001.00",
    icon: "/wallet-card.svg",
    toggle: true,
  },
  {
    name: "Awarded Points",
    amount: "35",
    icon: "/star.svg",
    toggle: false,
  },
];

const WalletInfo = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="p-4 bg-secondary rounded-md ">
      {overview.map(({ name, amount, icon, toggle }, i) => (
        <div
          key={i}
          className="flex justify-between items-center border-b border-[#EAFBFF] pb-3 mb-3"
        >
          <div className="flex gap-2 text-white items-center">
            <img src={icon} alt="" />
            <div>
              <h2 className=" text-sm font-bold">{name}</h2>
              <p className=" text-xs">
                {!toggle ? amount : show && toggle ? amount : "$*****"}
              </p>
            </div>
          </div>
          {toggle && (
            <img
              src="/eye.svg"
              alt=""
              className="btn btn-circle btn-xs hover:bg-secondary border-none"
              onClick={() => setShow(!show)}
            />
          )}
        </div>
      ))}
      <div className="grid grid-cols-2 gap-2 w-full text-white">
        <Link href="#">
          <a className="btn btn-sm btn-accent rounded capitalize w-full border-none">
            Pay in
          </a>
        </Link>
        <Link href="#">
          <a className="btn btn-sm bg-white hover:bg-white text-primary rounded capitalize w-full border-none">
            pay Out
          </a>
        </Link>
      </div>
    </div>
  );
};

export default WalletInfo;
