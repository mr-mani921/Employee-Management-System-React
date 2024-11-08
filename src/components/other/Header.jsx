import React from "react";

const Header = ({ setUser, userData }) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    setUser("");
  };
  return (
    <div className="bg-transparent flex justify-between ">
      <div className="greeting">
        <p className="text-3xl">Hello</p>
        <p className="text-4xl font-medium">
          {userData ? userData.name : "Admin"} 👋
        </p>
      </div>
      <button
        onClick={logOutUser}
        className="bg-red-500 px-3 py-2 h-fit font-semibold rounded-md"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
