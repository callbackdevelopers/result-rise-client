import Link from "next/link";
import React from 'react';
const Sidebars = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-8 w-80 bg-base-100 lg:bg-inherit text-base-content">
                <li><Link href="/dashboard/profile">Profile</Link></li>
                <li><Link href="/dashboard/result">Results</Link></li>
                <hr />
                <li><Link href="/dashboard/students/Report">Report Student</Link></li>
                <hr />
                <li><Link href="/dashboard/teachers">Teachers</Link></li>
                <li><Link href="/dashboard/students">Students</Link></li>
                <li><Link href="/dashboard/students/studentsAnalytics">Student Analytics</Link></li>
                <hr />
                <li><Link href="/dashboard/teachers/pending">Pending Teachers</Link></li>
                <li><Link href="/dashboard/students/pending">Pending Students</Link></li>
                <li><Link href="/dashboard/addmark">Add Marks</Link></li>
                <li><Link href="/dashboard/students/ReportedStudents">Reported Students</Link></li>
            </ul>
        </div>
    );
}
export default Sidebars;