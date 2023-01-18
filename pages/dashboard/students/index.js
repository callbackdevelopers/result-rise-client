import Head from "next/head";
import Layout from "../../../Layout/Layout";
import Student from "./student";

const Students = ({ students }) => {
    return (
        <Layout>
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
        </Layout>
    );
};

export default Students;

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3100/students");
    const students = await res.json();
    // console.log(students);

    return {
        props: {
            students,
        },
    };
};
