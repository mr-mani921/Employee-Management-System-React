import React from "react";

const Header = () => {
  return (
    <div className="bg-transparent flex justify-between ">
      <div className="greeting">
        <p className="text-3xl">Hello</p>
        <p className="text-4xl font-medium">Usman 👋</p>
      </div>
    <button className="bg-red-500 px-3 py-2 h-fit font-semibold rounded-md">Log Out</button>
    </div>
  );
};

export default Header;
