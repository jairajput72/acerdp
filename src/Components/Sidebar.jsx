import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/png/logo.png";
import {
    Api,
    DashboardIcon,
    MyServer,
    OrderMyServer,
    Support,
    TopUp,
    Transactions,
} from "../Components/Icon";
import { FiLogOut } from "react-icons/fi";

function Aside() {
    return (
        <>
            {/* Sidebar for xl and above */}
            <aside className="h-[calc(100vh-40px)] overflow-y-scroll sticky top-0 bottom-0 py-5 px-6 hidden xl:block border rounded-[33px] ">
                <div className="flex flex-col justify-between h-[calc(100vh-100px)]">
                    <div className="mt-10 md:mt-6 h-full">
                        <img className="px-3 py-2 sticky top-0 z-50 " src={Logo} alt="logo" />
                        <SidebarLinks />
                    </div>

                    {/* Logout Section */}
                    <div className="group hidden md:py-[14px] py-2 text-[#FF0000] mt-6 xl:block">
                        <div className="py-[14px] px-8 mt-6 whitespace-nowrap">
                            <div className="flex items-center gap-3 mt-4 cursor-pointer text-[#FF0000]">
                                <FiLogOut className="text-2xl" />
                                <span className="font-medium text-sm text-[#909090]">Logout</span>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Bottom Navigation for smaller screens */}
            <nav className="xl:hidden fixed bottom-0 left-0 right-0 bg-[#000] border-t border-gray-300 py-6 px-4 flex justify-between items-center shadow-md z-[99] ">
                <MobileNavLink to="/" icon={DashboardIcon} label="Dashboard" />
                <MobileNavLink to="/services" icon={MyServer} label="Servers" />
                <MobileNavLink to="/Customer" icon={OrderMyServer} label="Order New Server" />
                <MobileNavLink to="/Setting" icon={TopUp} label="Top Up" />
                <MobileNavLink to="/Subscription" icon={Transactions} label="Txns" />
                <MobileNavLink to="/Support" icon={Support} label="Support" />
                <MobileNavLink to="/Api" icon={Api} label="API" />
            </nav>
        </>
    );
}

const SidebarLinks = () => (
    <>
        <div className="pt-10">
            <SidebarLink to="/" icon={DashboardIcon} label="Dashboard" />
        </div>
        <SidebarLink to="/services" icon={MyServer} label="My Servers" />
        <SidebarLink to="/Customer" icon={OrderMyServer} label=" New Server" />
        <SidebarLink to="/Setting" icon={TopUp} label="Top Up" />
        <SidebarLink to="/Subscription" icon={Transactions} label="Transactions" />
        <hr className="w-full border-gray-300 mt-5" />
        <SidebarLink to="/Support" icon={Support} label="Support" />
        <SidebarLink to="/Api" icon={Api} label="Api" />
    </>
);

const SidebarLink = ({ to, icon: Icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            ` group flex items-center gap-3 py-[14px] px-6 rounded-2xl mt-6 cursor-pointer  ${isActive
                ? "bg-[linear-gradient(274.42deg,#FF00004D,#FF00008A)] text-white"
                : "text-gray-600 hover:text-white hover:bg-[linear-gradient(274.42deg,#FF00004D,#FF00008A)]"
            }`
        }
    >
        {({ isActive }) => (
            <>
                <Icon strokeColor={isActive ? "#FFFFFF" : "#909090"} fill={isActive ? "#FFFFFF" : "#909090"} />
                <span className="font-normal text-sm group-hover:text-white">{label}</span>
            </>
        )}
    </NavLink>
);

const MobileNavLink = ({ to, icon: Icon, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `flex flex-col items-center text-xs ${isActive ? "text-red-600" : "text-gray-500"
            }`
        }
    >
        {({ isActive }) => (
            <>
                <Icon strokeColor={isActive ? "#FFFFFF" : "#909090"} fill={isActive ? "#FFFFFF" : "#909090"} />
                <span className="font-normal text-sm group-hover:text-white">{label}</span>
            </>
        )}
    </NavLink>
);

export default Aside;
