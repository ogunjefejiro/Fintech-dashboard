import React from "react";

const WalletListTab = ({ data, activeTab, setActiveTab }) => {
  const items = Object.keys(data);

  return (
    <nav className="flex justify-center tabs overflow-hidden">
      {items.map((item, i) => (
        <p
          className={`${
            i === activeTab ? "tab-active font-bold border-primary" : " "
          } text-xs md:text-sm tab tab-bordered capitalize cursor-pointer text-[#2B4146] `}
          onClick={() => setActiveTab(i)}
          key={i}
        >
          {item} ({data[item].length})
        </p>
      ))}
    </nav>
  );
};

export default WalletListTab;
