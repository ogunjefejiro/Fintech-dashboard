import React, { useEffect } from "react";
import AppBar from "./AppBar";
import NavbarLayout from "./NavbarLayout";

const PageLayout = ({ children, name }) => {
  return (
    <>
      <div className="flex w-full h-screen font-nunito">
        <aside className="hidden bg-primary py-6 w-3/10 overflow-y-auto lg:block">
          <NavbarLayout page={name} />
        </aside>
        <div className="overflow-y-auto w-full">
          <div className="sticky top-0 z-[99999] bg-white">
            <AppBar page={name} />
          </div>
          <div className="p-5 lg:px-10 lg:py-8  bg-white max-h-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
