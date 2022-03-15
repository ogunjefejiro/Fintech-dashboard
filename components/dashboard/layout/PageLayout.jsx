import React, { useState } from "react";
import AppBar from "./AppBar";
import NavbarLayout from "./NavbarLayout";
import Meta from "../../Meta";

const PageLayout = ({ children, name }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Meta title={name} />
      <div className="flex w-full h-screen font-nunito">
        <aside className="hidden bg-primary  w-3/10 overflow-y-auto lg:block">
          <NavbarLayout setMenuOpen={setMenuOpen} page={name} />
        </aside>
        <div className="overflow-y-auto w-full">
          <div className="sticky top-0 z-[99999] bg-white">
            <AppBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} page={name} />
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
