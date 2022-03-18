import React, { useState, useContext } from "react";
import Link from "next/link";
import PageLayout from "../../components/dashboard/layout/PageLayout";
import WalletList from "../../components/wallet/WalletList";
import WalletDetails from "../../components/wallet/WalletDetails";
import data from "../../data";
import ActiveContext from "../../context/ActiveContext";

const Wallet = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { activeCard, setActiveCard } = useContext(ActiveContext);

  const cards = () => {
    if (activeTab == 0) {
      return data.active;
    } else if (activeTab == 1) {
      return data.inactive;
    } else {
      return data.closed;
    }
  };

  return (
    <PageLayout name="wallet">
      <div className="text-[#001B21] pb-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold">Your Wallet (s)</h2>
          <Link href="#">
            <a className="btn btn-sm lg:btn-md btn-primary gap-2 capitalize">
              <img src="/add.svg" alt="" />
              Create new wallet
            </a>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">
          <div className="w-full lg:w-4/12">
            <WalletList
              data={data}
              cards={cards}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>
          <div className="w-full lg:w-8/12">
            <WalletDetails
              data={data}
              cards={cards}
              activeCard={activeCard}
              setActiveCard={setActiveCard}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Wallet;
