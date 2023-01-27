import React from 'react';

const Student = ({ student, handleStudentDelete }) => {
    console.log(student)
    const { photo, student_name, student_id } = student;
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
                            <div className="font-bold">{student_name}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>{student_id}</td>
                <th>
                    <button onClick={() => handleStudentDelete(student)} className="btn btn-warning btn-xs">Delete</button>
                </th>
            </tr>
        </tbody>
    );
};

export default Student;