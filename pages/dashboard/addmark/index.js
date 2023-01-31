import { useQuery } from '@tanstack/react-query';
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";



function index() {

    const { data: students = [], isLoading, refetch } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3100/students`)
            const data = await res.json()
            return data
        }
    })
    console.log(students);
    return (
        <>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className="overflow-x-auto w-full">
                        {/* <table className="table table-compact w-full">
                            <thead>
                                <tr>
                                    <th>Student info</th>
                                    <th>id</th>
                                    <th>Prsentaton</th>
                                    <th>viva</th>
                                    <th>class test</th>
                                    <th> midterm</th>
                                    <th> Final</th>
                                    <th> </th>
                                </tr>
                            </thead>
                            {students.map(student =>
                                <tbody >

                                    <tr>
                                        <td>
                                            <div className="flex items-center space-x-2">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">ID :</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <button className="btn btn-warning btn-xs"> Submit</button>
                                        </td>
                                    </tr>
                                </tbody>
                            )}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table> */}


                        <div className="overflow-x-auto">
                            <table className="table table-compact w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Student info</th>
                                        <th>Prsentaton</th>
                                        <th>viva</th>
                                        <th>class test</th>
                                        <th> midterm</th>
                                        <th> Final</th>
                                        <th> </th>
                                    </tr>
                                </thead>
                                {students.map(student =>
                                    <tbody>
                                        <tr>
                                            <th>2</th>
                                            <td>
                                                <div className="flex items-center space-x-2">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="/" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">Hart Hagerty</div>
                                                        <div className="text-sm opacity-50">ID :</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Desktop Support Technician</td>
                                            <td>Zemlak, Daniel and Leannon</td>
                                            <td>United States</td>
                                            <td>12/5/2020</td>
                                            <td>Purple</td>
                                            <td>
                                                <button className="btn btn-warning btn-xs"> Submit</button>
                                            </td>
                                        </tr>
                                    </tbody>)}
                                <tfoot>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
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
        </>
    );
}

export default index;