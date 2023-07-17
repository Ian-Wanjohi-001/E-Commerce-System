import { Outlet } from "react-router-dom";
import { TopBar } from "../admin/components/TopBar";
import Sidebar from "../admin/components/Sidebar";

const AuthLayout = () => {
  return (
    <div className="">
      <TopBar />
      <div className=" flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
