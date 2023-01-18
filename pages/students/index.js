import Head from "next/head";
import Student from "./student";

const Students = ({ students }) => {
    return (
        <>
            <Head>
                <title>Students</title>
            </Head>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Student Name</th>
                            <th>Student ID</th>
                            <th>CGPA</th>
                            <th>Verification</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {students.map((student, index) => (
                        <Student key={student.key} student={student} index={index}></Student>
                    ))}
                </table>
            </div>
        </>
    );
};

export default Students;

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/students");
    const students = await res.json();
    console.log(students);

    return {
        props: {
            students,
        },
    };
};