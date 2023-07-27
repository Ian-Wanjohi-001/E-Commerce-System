import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/components/Sidebar';
import { TopBar } from '../admin/components/TopBar';
import './adminlayout.css';

const AdminLayout = () => {
    return (
        <div className="">
            {/* <TopBar /> */}
            <div className=" flex">
                <Sidebar />
                <div className='w-[85%] p-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout