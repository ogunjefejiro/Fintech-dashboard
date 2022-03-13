import React from "react";
import Link from "next/link";

const links = [
  {
    icon: "/new-wallet.svg",
    title: "Add new Wallet",
    link: "#",
  },
  {
    icon: "/new-card.svg",
    title: "Add new Card",
    link: "#",
  },
  {
    icon: "/balance-exchange.svg",
    title: "Balance Exchange",
    link: "#",
  },
  {
    icon: "/transfer.svg",
    title: "Transfer to Account",
    link: "#",
  },
  {
    icon: "/voucher.svg",
    title: "Generate Voucher",
    link: "#",
  },
  {
    icon: "/money.svg",
    title: "Mobile Money",
    link: "#",
  },
  {
    icon: "/payment.svg",
    title: "Payment Link",
    link: "#",
  },
];

const QuickLinks = () => {
  return (
    <div className="text-[#001B21]">
      <div className="mb-3">
        <h2 className="font-bold">Quick Links</h2>
        <p className="text-xs text-[#94A3B8]">
          Your frequently used actions for easy access.
        </p>
      </div>

      <div className="flex gap-6">
        {links.map(({ icon, title, link }, i) => (
          <Link href={link} key={i}>
            <a className="flex flex-col gap-2 justify-center px-6 py-4 rounded-md border border-[#F1F5F9] text-center cursor-pointer">
              <div className="flex justify-center">
                <img src={icon} alt="" />
              </div>
              <h2 className="text-xs">{title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
