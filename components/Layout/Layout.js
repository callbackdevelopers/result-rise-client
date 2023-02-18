import React from 'react';


import DashboardNavbar from '../Navbars/DashboardNavbar';
import Sidebars from '../Sidebars/Sidebars';


const Layout = ({ children }) => {
    return (
        <>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {children}
                </div>
                <Sidebars />
            </div>
        </>
    );
};

export default Layout;