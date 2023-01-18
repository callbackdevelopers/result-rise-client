import React from "react";

const Teacher = ({ teacher, index }) => {
    const { teacher_name, teacher_id, designation, photo } = teacher;
    return (
        <tbody>
            <tr>
                <td>{index + 1}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar " />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{teacher_name}</div>
                        </div>
                    </div>
                </td>
                <td>{teacher_id}</td>
                <td>{designation}</td>
                <td>
                    <button className="btn btn-ghost btn-xs">pending</button>
                </td>
                <th>
                    <div className="flex items-center space-x-3">
                        <button className="btn btn-primary btn-xs">Edit</button>
                        <button className="btn btn-secondary btn-xs">
                            Delete
                        </button>
                    </div>
                </th>
            </tr>
        </tbody>
    );
};

export default Teacher;
