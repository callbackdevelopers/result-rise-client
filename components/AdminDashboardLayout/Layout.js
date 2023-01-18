
import Sidebar from '../AdminDashboardSidebar/AdminSidebar'

const Layout = ({ children }) => {
    return (
        <div>
            <div className='h-screen flex flex-row justify-start'>
                <Sidebar />
                <div className=' flex-1 p-4  '>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout