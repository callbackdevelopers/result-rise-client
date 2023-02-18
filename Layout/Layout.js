import React from 'react';
import DashboardNavbar from '../components/Navbars/DashboardNavbar';
import Sidebars from '../components/Sidebars/Sidebars';


const Layout = ({ children }) => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <DashboardNavbar />
                    {children}
                </div>
                <Sidebars />
            </div>
        </>
    );
};

export default Layout;