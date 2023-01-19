import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiBookOpen, BiNews } from "react-icons/bi";
import { FaUserTie } from "react-icons/fa";
import { FiSettings, FiUsers } from "react-icons/fi";
import { ImNotification } from "react-icons/im";
import { MdDashboardCustomize } from "react-icons/md";
import { CollapseIcon, LogoIcon, LogoutIcon } from "../icons";
import LinkTemplate from "../Shared/NavbarLinkTemplate/LinkTemplate";

const menuItems = [
    {
        id: 1,
        label: "Dashboard",
        icon: <MdDashboardCustomize />,
        link: "/admin/dashboard",
    },
    {
        id: 2,
        label: "Student Classes",
        icon: <BiNews />,
        link: "/admin/studentClasses",
    },
    { id: 3, label: "Subject", icon: <BiBookOpen />, link: "/admin/subject" },
    // { id: 4, label: "Student", icon: <FiUsers />, link: "/admin/student" },
    {
        id: 5,
        label: "Result",
        icon: <AiOutlineFileDone />,
        link: "/admin/result",
    },
    { id: 6, label: "Notice", icon: <ImNotification />, link: "/admin/notice" },
    {
        id: 7,
        label: "Admin Settings",
        icon: <FiSettings />,
        link: "/admin/adminSettings",
    },
];

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
        {
            ["w-60"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );
    const CollapseIconClasses = classNames(
        "p-4 rounded bg-gray-200 text-slate-400 absolute right-0 ",
        {
            "rotate-180": toggleCollapse,
        }
    );
    const onMouseOver = () => {
        setIsCollapsed(!isCollapsed);
    };
    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };
    return (
        <div className="shadow-xl">
            <div
                className={wrapperClasses}
                onMouseEnter={onMouseOver}
                onMouseLeave={onMouseOver}
                style={{
                    transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s",
                }}
            >
                <div className="flex flex-col ">
                    <div className="flex items-center justify-between relative">
                        <div className="flex items-center pl-1 gap-4">
                            <LogoIcon></LogoIcon>
                            <span
                                className={classNames(
                                    "mt-2 text-xl  font-medium text-slate-900",
                                    { hidden: toggleCollapse }
                                )}
                            >
                                <Link href="/"> ResultRise</Link>
                            </span>
                        </div>
                        {isCollapsed && (
                            <button
                                className={`${CollapseIconClasses}`}
                                onClick={handleSidebarToggle}
                            >
                                <CollapseIcon />
                            </button>
                        )}
                    </div>
                    <div className="flex flex-col items-start mt-28">
                        <LinkTemplate
                            icon={<BiNews />}
                            title={"Profile"}
                            link={"/dashboard/profile"}
                            toggleCollapse={toggleCollapse}
                        />
                        <LinkTemplate
                            icon={<FiUsers />}
                            title={"All Studets"}
                            link={"/dashboard/Admin/AllStudents"}
                            toggleCollapse={toggleCollapse}
                        />
                        <LinkTemplate
                            icon={<FaUserTie />}
                            title={"All Teachers"}
                            link={"/dashboard/Admin/AllTeachers"}
                            toggleCollapse={toggleCollapse}
                        />
                    </div>
                </div>
                <div className="px-4 py-4 flex">
                    <div style={{ width: "1.5rem" }}>
                        <LogoutIcon />
                    </div>
                    {!toggleCollapse && (
                        <span
                            className={classNames(
                                "text-sm font-medium text-text-light"
                            )}
                        >
                            Logout
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
