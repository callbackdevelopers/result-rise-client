import React, { useState, useMemo } from 'react'
import classNames from "classnames";
import { ArticleIcon, CollapsIcon, HomeIcon, LogoIcon, LogoutIcon, UsersIcon, VideosIcon } from './icons';
import Link from 'next/link';
import { useRouter } from 'next/router';


const menuItems = [
    { id: 1, label: "Dashboard", icon: HomeIcon, link: "/admin/dashboard" },
    { id: 2, label: "Student Classes", icon: ArticleIcon, link: "/classes" },
    { id: 3, label: "Subject", icon: VideosIcon, link: "/subject" },
    { id: 4, label: "Student", icon: UsersIcon, link: "/Student" },
    { id: 5, label: "Result", icon: VideosIcon, link: "/result" },
    { id: 6, label: "Notice", icon: VideosIcon, link: "/notice" },
    { id: 7, label: "Admin Settings", icon: VideosIcon, link: "/settings" },
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
            ["w-80"]: !toggleCollapse,
            ["w-20"]: toggleCollapse,
        }
    );

    const collapsIconClasses = classNames('p-4 rounded bg-gray-200 text-slate-400 absolute right-0',
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

        <div className={wrapperClasses} onMouseEnter={onMouseOver} onMouseLeave={onMouseOver}
            style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
        >
            <div className='flex flex-col'>
                <div className='flex items-center justify-between relative'>
                    <div className='flex items-center pl-1 gap-4'>
                        <LogoIcon></LogoIcon>
                        <span className={classNames("mt-2 text-lg font-medium text-slate-900", { hidden: toggleCollapse })}>
                            Result-Rise
                        </span>
                    </div>
                    {isCollapsed &&
                        <button className={collapsIconClasses} onClick={handleSidebarToggle}>
                            <CollapsIcon></CollapsIcon>
                        </button>
                    }
                </div>
            </div>
            <div className="flex flex-col items-start mt-20">
                {menuItems.map(({ icon: Icon, ...menu }) => {
                    const classes = getNavItemClasses(menu);
                    return (
                        <div className={classes}>
                            <Link href={menu.link}>
                                <p className="flex py-4 px-3 items-center w-full h-full">
                                    <div style={{ width: "2.5rem" }}>
                                        <Icon />
                                    </div>
                                    {!toggleCollapse && (
                                        <span
                                            className={classNames(
                                                "text-sm font-medium text-black"
                                            )}
                                        >
                                            {menu.label}
                                        </span>
                                    )}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className={`${getNavItemClasses({})} px-3 py-4`}>
                <div style={{ width: "2.5rem" }}>
                    <LogoutIcon />
                </div>
                {!toggleCollapse && (
                    <span className={classNames("text-sm font-medium text-text-light")}>
                        Logout
                    </span>
                )}
            </div>
        </div>



    )
}

export default Sidebar