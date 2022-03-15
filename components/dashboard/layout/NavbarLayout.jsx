import React from "react";
import Link from "next/link";
import WalletInfo from "./WalletInfo";
import ReferandEarn from "./ReferandEarn";

const NavbarLayout = ({ page, setMenuOpen }) => {
  const navLinks = [
    {
      name: "dashboard",
      path: "/",
      title: "Dashboard",
      icon: "/dashboard-icon.svg",
    },
    {
      name: "wallet",
      path: "/#",
      title: "Wallet",
      icon: "/wallet-icon.svg",
    },
    {
      name: "cards",
      path: "/#",
      title: "Cards",
      icon: "/card.svg",
    },
    {
      name: "fx-center",
      path: "/#",
      title: "FX Centre",
      icon: "/dollar-square.svg",
    },
    {
      name: "beneficiaries",
      path: "/#",
      title: "Beneficiaries",
      icon: "/profile-2user.svg",
    },
    {
      name: "perks",
      path: "/#",
      title: "Perks",
      icon: "/tag.svg",
    },
  ];
  return (
    <div className="bg-primary py-6 h-full px-8 overflow-y-auto">
      <div>
        <div className="flex justify-between lg:px-8">
          <Link href="/">
            <a>
              <img src="/logo-white.png" alt="logo" className="" />
            </a>
          </Link>
          <img
            src="/close-white.svg"
            alt="vasiti logo"
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <div className="mt-4">
          <WalletInfo />
        </div>

        <div className="flex flex-col mt-8">
          {navLinks.map(({ name, path, title, icon }, i) => (
            <Link key={i} href={path}>
              <a
                className={`flex gap-5  items-center text-white rounded-md px-4 py-2 mb-1 w-full hover:bg-white hover:text-primary ${
                  name == page ? "bg-white text-primary font-bold" : ""
                }`}
              >
                <div>
                  <img src={icon} alt="" />
                </div>
                <h2 className="text-sm">{title}</h2>
              </a>
            </Link>
          ))}
          <div className="mt-4 mb-6">
            <ReferandEarn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLayout;
