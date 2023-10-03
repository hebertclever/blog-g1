import React from "react";
import LatestPost from "../components/LatestPost";
import TopPost from "../components/TopPost";
import SideBar from "../components/SideBar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-100">
      <div className="w-[55%] h-20 mb-10 self-center flex justify-start items-end">
        <h2 className="font-semibold text-xl">Dashboard</h2>
      </div>
      <div className="w-full h-full flex justify-center gap-5 mb-5">
        <div className="h-full w-[20%] max-w-[250px] ">
          <SideBar />
        </div>
        <div className="h-full w-[55%] max-w-[800px]  flex flex-col gap-5">
          <div className="w-full h-[60%] bg-white rounded-md flex flex-col items-center relative">
            <div className="w-full p-3">
              {" "}
              <span className="font-semibold">Visitors</span>
            </div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30 "></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <div className="w-[90%] h-[1px] bg-zinc-300 mb-10 z-30"></div>

            <svg
              className="w-full h-full absolute top-0 left-0 z-50 "
              width="729"
              height="232"
              viewBox="0 0 729 232"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.25"
                d="M28 96.5C7 96.5 0.5 72 0.5 72V231.5H729V9.5C729 9.5 723.5 48.5 698 48.5C656.5 48.5 632 0 590.5 0C549 0 524 83 478.5 83C433 83 404.5 24 366.5 24C316 24 298 119.5 251 119.5C204 119.5 185 66 136.5 66C99 66 62.5 96.5 28 96.5Z"
                fill="url(#paint0_linear_90_784)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_90_784"
                  x1="364.75"
                  y1="0"
                  x2="364.75"
                  y2="191.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3246D3" />
                  <stop offset="1" stop-color="#3246D3" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="w-full h-12 flex justify-between items-center px-2">
              <span className="text-sm text-[#9396ad]">Monday</span>
              <span className="text-sm text-[#9396ad]">Tuesday</span>
              <span className="text-sm text-[#9396ad]">Wednesday</span>
              <span className="text-sm text-[#9396ad]">Thursday</span>
              <span className="text-sm text-[#9396ad]">Friday</span>
              <span className="text-sm text-[#9396ad]">Saturday</span>
              <span className="text-sm text-[#9396ad]">Monday</span>
            </div>
          </div>
          <LatestPost />
        </div>
        <div className="h-full w-[20%] max-w-[250px]">
          <TopPost />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
