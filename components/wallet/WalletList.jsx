import React, { useState } from "react";
import { useForm } from "react-hook-form";
import WalletListTab from "./WalletListTab";

const WalletList = ({
  data,
  activeCard,
  setActiveCard,
  activeTab,
  setActiveTab,
  cards,
}) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {};

  return (
    <div>
      <div className="flex gap-12">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="w-full">
            <div className="relative text-[#333333] w-full">
              <input
                type="search"
                name="search"
                className="py-2 text-xs border w-full border-[#E5E5E5] rounded-xl focus:border-primary pl-3 pr-8 focus:outline-none"
                placeholder="Search..."
                {...register("search", {
                  required: true,
                })}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img
                  src="/search.svg"
                  alt=""
                  className="btn btn-xs border-none hover:bg-transparent"
                />
              </span>
            </div>
          </div>
        </form>
        <div className="flex gap-1 items-center">
          <h2 className="text-xs text-[#017189]">All</h2>
          <img src="/arrow-down-primary.svg" alt="" />
        </div>
      </div>
      <div className="my-5">
        <WalletListTab
          data={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <div className="flex flex-col gap-2">
        {cards().map(({ name, currency, img, amount, def, id }, i) => (
          <div
            key={i}
            className={`p-4 rounded-lg md:w-full cursor-pointer ${
              id == activeCard ? "bg-[#EEF7F9]" : ""
            } `}
            onClick={() => setActiveCard(id)}
          >
            <div className="flex w-full justify-between items-start">
              <div className="flex gap-2">
                <img src={img} alt="" />
                <div className="text-sm">
                  <h3 className="">{name}</h3>
                  <p className="">{currency}</p>
                </div>
              </div>
              <div>
                <h2 className="text-md font-bold">{amount}</h2>
                {def && <h2 className="text-right">Default</h2>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletList;
