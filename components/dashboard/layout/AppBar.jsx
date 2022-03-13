import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const AppBar = ({ page }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {};

  return (
    <div className="bg-white border-b border-[#fafafa] px-5 lg:px-10 py-5 w-full flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img src="/menu.svg" alt="" className="lg:hidden" />
        <h1 className="font-semibold text-xl text-[#333333] capitalize">
          {page == "dashboard" ? "Welcome, Fejiro Ogunje" : page}
        </h1>
      </div>

      <div className="flex gap-6 items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="">
            <div className="relative text-[#333333] w-full">
              <input
                type="email"
                name="email"
                className="py-2 text-xs border w-full border-[#E5E5E5] rounded-xl focus:border-primary pl-3 pr-8 focus:outline-none"
                placeholder="Search..."
                {...register("email", {
                  required: true,
                })}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <img src="/search.svg" alt="" />
              </span>
            </div>
          </div>
        </form>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2  items-center">
            <img src="/tree.svg" alt="" />
            <h2 className=" text-sm text-[#2B4146]">0 planted</h2>
          </div>
          <img src="/notification.svg" alt="" className="cursor-pointer" />
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <div>
              <Link href="/profile">
                <a>
                  <img src="/avatar.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="">
              <h3 className="text-success text-xs">verified</h3>
              <p className="text-[#808080] text-sm font-bold">Fejiro ogunje</p>
            </div>
          </div>
          <div className="">
            <img src="/arrow-down.svg" alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
