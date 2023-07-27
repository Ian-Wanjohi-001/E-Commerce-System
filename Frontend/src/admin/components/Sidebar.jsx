import React from "react";
import adminicon from "/admin-icon.png";
import { Link } from "react-router-dom";
import { FaChartBar, FaUserFriends,FaTag ,FaExpandArrowsAlt,FaCompressArrowsAlt,FaList,FaRegPlusSquare} from "react-icons/fa";

export const Sidebar = () => {
  return (
    <div className="w-[15%]">
      <div className="flex flex-col bg-[#101a32] min-h-[100vh]">
        <div className="p-3 ml-4 bg-blue-100 h-fit w-fit border rounded-full">
          <img
            src={adminicon}
            alt="admin-icon"
            className="h-[3rem]"
          />
        </div>
        <div className=" text-white p-4 text-lg">
          Hello, Ian
        </div>
        <div className="p-4 flex flex-col text-white text-lg ">
          <Link className="mb-[1rem] flex gap-2 items-center"><FaChartBar/> Dashboard</Link>
          <Link to="customers" className="mb-[1rem] flex gap-2 items-center"><FaUserFriends/> Customers</Link>
          <Link to="products" className="mb-[1rem] flex gap-2 items-center"><FaList/>Products</Link>
          <Link to="create" className="flex gap-2 items-center"><FaRegPlusSquare/>New Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
