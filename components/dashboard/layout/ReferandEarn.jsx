import React from "react";
import Link from "next/link";

const ReferandEarn = () => {
  return (
    <div className="p-4 bg-white rounded-md ">
      <div className="flex gap-4 items-center">
        <img src="/refer.png" alt="" />
        <div>
          <h2 className="text-[#001B21] text-sm font-bold">Refer and earn</h2>
          <p className="text-[#2B4146] text-xs">
            Use the below link to invite friends
          </p>
        </div>
      </div>

      <Link href="#">
        <a className="btn btn-primary capitalize w-full mt-5">Invite Friends</a>
      </Link>
    </div>
  );
};

export default ReferandEarn;
