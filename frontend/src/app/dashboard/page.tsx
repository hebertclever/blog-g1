import React from "react";
import LatestPost from "../components/LatestPost";
import TopPost from "../components/TopPost";
import SideBar from "../components/SideBar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col bg-zinc-100">
      <div className="w-full h-20 mb-10"></div>
      <div className="w-full h-full flex justify-center gap-5 mb-5">
        <div className="h-full w-[20%] max-w-[250px] ">
          <SideBar />
        </div>
        <div className="h-full w-[55%] max-w-[800px]  flex flex-col gap-5">
          <div className="w-full h-[60%] bg-white rounded-md"></div>
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
