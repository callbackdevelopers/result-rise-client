import Link from "next/link";
import React from 'react';
const Sidebars = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className="menu py-4  w-64 bg-base-100 lg:bg-inherit text-base-content">
                <li><Link href="/dashboard/profile">Profile</Link></li>
                <li><Link href="/dashboard/result">Results</Link></li>
                <li><Link href="/dashboard/students/Report">Report Student</Link></li>
                <li><Link href="/dashboard/students/pending/reporterdStudent">Pending Reported Students</Link></li>
                <li><Link href="/dashboard/teachers/myreports">My Reports</Link></li>
                <li><Link href="/dashboard/students/ReportedStudents">Reported Students</Link></li>
                <li><Link href="/dashboard/teachers">Teachers</Link></li>
                <li><Link href="/dashboard/students">Students</Link></li>
                <li><Link href="/dashboard/addmark">Add Marks</Link></li>
                <hr />
                <li><Link href="/dashboard/teachers/pending">Pending Teachers</Link></li>
                <li><Link href="/dashboard/students/pending">Pending Students</Link></li>
                <li><Link href="/dashboard/notification/shownotification">Notification</Link></li>
                <li><Link href="/dashboard/notification/pushnotification">Notice Board</Link></li>
            </div>
        </div>
    );
}
export default Sidebars;