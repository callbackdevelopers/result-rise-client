import React from 'react';

const UsersTableTamplete = ({ user, handleUser, btnName }) => {
    const { photoURL, address, department, name, email, roll, id, verification } = user;
    return (
        <>
            <tbody>
                <tr>
                    <td>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={photoURL} alt="Avatar" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{name}</div>
                                <div className="text-sm opacity-50">{roll} ID: {id}</div>
                            </div>
                        </div>
                    </td>
                    <td>
                        {address}
                        <br />
                        {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                    </td>
                    <td>{department}</td>
                    <th>
                        <button onClick={() => handleUser(user)} className="btn btn-warning btn-xs">
                            {/* {
                            verification ? "Approve"
                                :
                                "Approved"
                        } */}
                            {btnName}
                        </button>
                    </th>
                </tr>
            </tbody>
        </>

    );
};

export default UsersTableTamplete;