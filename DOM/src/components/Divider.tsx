import React from "react";

const Divider = () => {
  return (
    <div className="divider mt-0.5 flex items-center justify-evenly">
      <div className="fadePill w-full mx-2.5 h-0.5" />
      <span>OR</span>
      <div className="fadePill right w-full mx-2.5 h-0.5"></div>
    </div>
  );
};

export default Divider;
