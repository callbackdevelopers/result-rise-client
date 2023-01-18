import React from "react";

const Student = ({ student, index }) => {
    const { student_name, student_id, cgpa, photo } = student;
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
                            <div className="font-bold">{student_name}</div>
                        </div>
                    </div>
                </td>
                <td>{student_id}</td>
                <td>{cgpa}</td>
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

export default Student;
