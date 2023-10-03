"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [dashboardUrl, setDashboardUrl] = useState("/dashboard");

  const toggleDashboardUrl = () => {
    setDashboardUrl((prevUrl) => (prevUrl === "/dashboard" ? "/" : "/dashboard"));
  };

  return (
    <header className="flex items-center w-[100%] justify-between px-[20px] max-w-[1100px] mx-[auto] pt-[10px]">
      <Link href="/">
        <img src="./images/logo-blogger.png" width="200" height="120" alt="logo" />
      </Link>
      <div className="flex items-center gap-[20px]">
        <Link className="bg-[#F2F4FC] rounded-[50px] px-[20px] py-[7px]" href="/register">
          Sign In
        </Link>
        <div onClick={toggleDashboardUrl}>
          <Link href={dashboardUrl}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="4" width="26" height="2" rx="1" fill="#1D1E25" />
              <rect x="2" y="24" width="26" height="2" rx="1" fill="#1D1E25" />
              <rect x="12" y="14" width="16" height="2" rx="1" fill="#1D1E25" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
