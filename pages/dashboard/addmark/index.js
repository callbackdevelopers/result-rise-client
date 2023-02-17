import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import AddNumberModal from '../../../components/modals/AddNumber/AddNumberModal';
import MidSpinner from '../../../components/Spiner/MidSpinner';
import Layout from '../../../Layout/Layout';

function index() {
    const [show, setShow] = useState(false);
    const [student, setStudent] = useState({});

    const url = `http://localhost:3100/verified/student`
    const { data: students = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data;
        }
    })
    if (isLoading) return <MidSpinner />
    return (
        <>
            <Layout>
                <div className="overflow-x-auto w-full">
                    <div className="overflow-x-auto" >
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>department</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {students?.map((student, i) =>
                                    <tr key={i}>
                                        <th>{i + 1}</th>
                                        <td>{student.name}</td>
                                        <td>{student.id}</td>
                                        <td>{student.department}</td>
                                        <td>
                                            <label onClick={() => { setStudent(student), setShow(true) }} htmlFor="add_Number_modal" className="btn btn-sm btn-warning">Add Number</label>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </Layout>

            {show && <AddNumberModal
                student={student}
                setShow={setShow}
            />}
        </>
    );
}

export default index;