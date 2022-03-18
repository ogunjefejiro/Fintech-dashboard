import React from "react";

const Spinner = () => {
  return (
    <div className="w-full h-full flex loading justify-center items-center">
      <button className="btn btn-large text-primary loading border-none bg-transparent"></button>
    </div>
  );
};

export default Spinner;
