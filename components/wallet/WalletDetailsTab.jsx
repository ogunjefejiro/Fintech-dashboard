import React from "react";

const WalletDetailsTab = ({ activeGraph, setActiveGraph }) => {
  const items = ["Activity", "Transactions", "Invoices"];

  return (
    <nav className="flex flex-wrap tabs overflow-hidden">
      {items.map((item, i) => (
        <p
          className={`${
            i === activeGraph ? "tab-active font-bold border-primary" : " "
          } text-xs md:text-sm tab tab-bordered cursor-pointer text-[#2B4146] `}
          onClick={() => setActiveGraph(i)}
          key={i}
        >
          {item}
        </p>
      ))}
    </nav>
  );
};

export default WalletDetailsTab;
