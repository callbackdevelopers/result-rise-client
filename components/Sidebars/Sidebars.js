import Link from "next/link";
import React from 'react';
const Sidebars = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 lg:bg-inherit text-base-content">
                <li><a><Link href="/dashboard/profile">Profile</Link></a></li>
                <li><a><Link href="/dashboard/students">Students</Link></a></li>
            </ul>
        </div>
    );
}

export default Sidebars;