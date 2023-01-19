import React from 'react'
import { useFirebase } from '../../context/UserContext'

const DashboardNavbar = () => {
    const { user } = useFirebase()
    return (
        <div>
            <div className="navbar ">
                <div className="flex-1">
                    <a className=" normal-case text-xl font-semibold">Hello , {user.displayName}</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardNavbar