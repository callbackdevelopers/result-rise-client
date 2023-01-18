import Head from "next/head";
import Layout from "../../../Layout/Layout";
import Teacher from "./teacher";

const Teachers = ({ teachers }) => {
    return (
        <Layout>
            <Head>
                <title>Teachers</title>
            </Head>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Teacher Name</th>
                            <th>Teacher ID</th>
                            <th>Designation</th>
                            <th>Verification</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {teachers.map((teacher, index) => (
                        <Teacher
                            key={teacher.key}
                            teacher={teacher}
                            index={index}
                        ></Teacher>
                    ))}
                </table>
            </div>
        </Layout>
    );
};

export default Teachers;

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3100/teachers");
    const teachers = await res.json();
    // console.log(teachers);

    return {
        props: {
            teachers,
        },
    };
};
