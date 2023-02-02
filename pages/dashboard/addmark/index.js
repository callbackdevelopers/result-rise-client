import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import AddNumberModal from '../../../components/modals/AddNumber/AddNumberModal';
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";

function index() {
    const [show, setShow] = useState(false);
    const [student, setStudent] = useState({});

    const url = `http://localhost:3100/users`
    const { data: students = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data1 = await res.json()
            const data = data1.filter(u => u.roll === "student")
            return data;
        }
    })
    // console.log(students);
    return (
        <>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
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
                </div>
                <Sidebars></Sidebars>
            </div>
            {show && <AddNumberModal
                student={student}
                setShow={setShow}
            />}
        </>
    );
}

export default index;