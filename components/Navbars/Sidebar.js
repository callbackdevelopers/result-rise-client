import React, { useState, useMemo } from 'react'

import { MdDashboardCustomize } from 'react-icons/md';
import { BiNews, BiBookOpen } from 'react-icons/bi';
import { FiUsers, FiSettings } from 'react-icons/fi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { ImNotification } from 'react-icons/im';

import classNames from "classnames";
import { CollapseIcon, LogoIcon, LogoutIcon } from '../icons';
import Link from 'next/link';
import { useRouter } from 'next/router';


const menuItems = [
    { id: 1, label: "Dashboard", icon: <MdDashboardCustomize />, link: "/admin/dashboard" },
    { id: 2, label: "Student Classes", icon: <BiNews />, link: "/admin/studentClasses" },
    { id: 3, label: "Subject", icon: <BiBookOpen />, link: "/admin/subject" },
    { id: 4, label: "Student", icon: <FiUsers />, link: "/admin/student" },
    { id: 5, label: "Result", icon: <AiOutlineFileDone />, link: "/admin/result" },
    { id: 6, label: "Notice", icon: <ImNotification />, link: "/admin/notice" },
    { id: 7, label: "Admin Settings", icon: <FiSettings />, link: "/admin/adminSettings" },
];

const Sidebar = () => {
    const [toggleCollapse, setToggleCollapse] = useState(false)
    const [isCollapsed, setIsCollapsed] = useState(false)


    const router = useRouter();

    const activeMenu = useMemo(
        () => menuItems.find((menu) => menu.link === router.pathname),
        [router.pathname]
    );

    const wrapperClasses = classNames(
        "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
        {
            ["w-60"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const CollapseIconClasses = classNames('p-4 rounded bg-gray-200 text-slate-400 absolute right-0',
        {
            "rotate-180": toggleCollapse,
        })

    const getNavItemClasses = (menu) => {
        return classNames(
            "flex items-center cursor-pointer hover:bg-gray-300 rounded w-full overflow-hidden whitespace-nowrap",
            {
                ["bg-bg-gray-400"]: activeMenu?.id === menu.id,
            }
        );
    };


    const onMouseOver = () => {
        setIsCollapsed(!isCollapsed);
    };
    const handleSidebarToggle = () => {
        setToggleCollapse(!toggleCollapse);
    };

    return (

        <div className='shadow-xl'>
            <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}
                style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
            >
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between relative'>
                        <div className='flex items-center pl-1 gap-4'>
                            <LogoIcon></LogoIcon>
                            <span className={classNames("mt-2 text-xl  font-medium text-slate-900", { hidden: toggleCollapse })}>
                                Result Rise
                            </span>
                        </div>
                        {isCollapsed &&
                            <button className={CollapseIconClasses} onClick={handleSidebarToggle}>
                                <CollapseIcon></CollapseIcon>
                            </button>
                        }
                    </div>
                </div>
                <div className="flex flex-col items-start mt-20">

                    {menuItems.map(({ icon, ...menu }) => {
                        const classes = getNavItemClasses(menu);
                        return (
                            <Link href={menu.link} className={`${classes}, "flex py-4 px-3 items-center w-full h-full"`} >


                                <span className='w-7'>
                                    {icon}
                                </span>
                                {/* <div className='w-10'>
                                    <Icon></Icon>
                                </div> */}

                                {/* <span className='w-10'>
                                    <Icon />
                                </span> */}
                                {!toggleCollapse && (

                                    <span
                                        className={classNames(
                                            "text-md font-medium text-text-light"
                                        )}
                                    >
                                        {menu.label}
                                    </span>
                                )}


                            </Link>
                        );
                    })}
                </div>
                <div className={`${getNavItemClasses({})} px-4 py-4`}>
                    <div style={{ width: "1.5rem" }}>
                        <LogoutIcon />
                    </div>
                    {!toggleCollapse && (
                        <span className={classNames("text-sm font-medium text-text-light")}>
                            Logout
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sidebar