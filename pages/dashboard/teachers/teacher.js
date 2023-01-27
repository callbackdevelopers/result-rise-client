import React from 'react';

const Teacher = ({ teacher }) => {
    const { teacher_name, designation, photo } = teacher;
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{teacher_name}</div>
                            <div className="text-sm opacity-50">{designation}</div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>Purple</td>
                <th>
                    <button className="btn btn-warning btn-xs"> delete</button>
                </th>
            </tr>
        </tbody>
    );
};

export default Teacher;