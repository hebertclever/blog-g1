import React from "react";
import LatestPost from "../components/LatestPost";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full h-20 border border-blue-500 mb-10"></div>
      <div className="w-full h-full flex justify-center gap-5">
        <div className="h-full w-[20%] max-w-[250px] border"></div>
        <div className="h-full w-[60%] max-w-[800px] border flex flex-col gap-5">
          <div className="w-full h-[60%] border border-green-500"></div>
          <LatestPost />
        </div>
        <div className="h-full w-[20%] max-w-[250px] border"></div>
      </div>
    </div>
  );
};

export default Dashboard;
