import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import NavbarLayout from "./NavbarLayout";

const AppBar = ({ page, menuOpen, setMenuOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = () => {};

  return (
    <div className="bg-white border-b border-[#fafafa] px-5 lg:px-10 py-5 w-full flex justify-between items-center">
      <div className="flex items-center gap-4">
        <img
          src="/menu.svg"
          alt=""
          className="lg:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
        <h1 className="hidden lg:block font-semibold text-xl text-[#333333] capitalize">
          {page == "dashboard" ? "Welcome, Fejiro Ogunje" : page}
        </h1>
        <h1 className="font-semibold text-xl lg:hidden text-[#333333] capitalize">
          {page == "dashboard" ? "Welcome" : page}
        </h1>
      </div>
      {/* mobile menu */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 h-screen w-full lg:hidden bg-[#0000003d] cursor-pointer z-[99999]"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="fixed top-0 left-0 bg-black h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <NavbarLayout setMenuOpen={setMenuOpen} page={page} />
          </div>
        </div>
      )}

      <div className="flex gap-6 items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="hidden lg:block">
          <div className="">
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
        <div className="hidden lg:flex gap-4 items-center">
          <div className="flex gap-2  items-center">
            <img src="/tree.svg" alt="" />
            <h2 className=" text-sm text-[#2B4146]">0 planted</h2>
          </div>
          <img src="/notification.svg" alt="" className="cursor-pointer" />
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2 items-center">
            <div>
              <Link href="/">
                <a>
                  <img src="/avatar.png" alt="" />
                </a>
              </Link>
            </div>
            <div className="">
              <h3 className="text-success text-xs">verified</h3>
              <p className="text-[#808080] text-xs lg:text-sm font-bold">
                Fejiro ogunje
              </p>
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
