import React from 'react'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <div className='h-screen flex flex-row justify-start'>
            <Sidebar />
            <div className='bg-slate-400 flex-1 p-4 text-white '>
                <h3>Result-Rise Dashboard</h3>
            </div>
        </div>
    )
}

export default Layout