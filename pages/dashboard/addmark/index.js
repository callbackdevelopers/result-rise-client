import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";

function index() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { data: students = [], isLoading, refetch } = useQuery({
        queryKey: ['catagories'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:3100/students`)
            const data = await res.json()
            return data
        }
    })

    const onSubmit = (data) => {
        console.log(data);
    }
    // console.log(students);
    return (
        <>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className="overflow-x-auto w-full">

                        <div className="overflow-x-auto" >
                            <div className="table table-compact w-full">

                                <>
                                    {students.map((student, i) =>
                                        <form onSubmit={() => handleSubmit(onSubmit)}>
                                            <p>{1 + i}</p>
                                            <div>

                                                <div className="flex items-center space-x-2">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={student?.photoURL} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{student.name} </div>
                                                        <div className="text-sm opacity-50">ID :{student.id}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <td>
                                                <input
                                                    type="number" placeholder="mark" className='block p-1 px-3 text-gray-700 bg-white border rounded-lg  w-28 focus:outline-none focus:ring focus:ring-opacity-40'
                                                />
                                            </td>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">First Name</span>
                                                </label>
                                                <input type="text" placeholder="md" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.firstName ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                                    {...register("firstName", { required: 'First Name must required' })}
                                                />
                                                {errors.firstName && <span className="label-text text-red-400">{errors?.firstName.message}</span>}
                                            </div>

                                            <td>United States</td>
                                            <td>12/5/2020</td>
                                            <td>Purple</td>
                                            <td>
                                                <button className="btn btn-warning btn-xs"> Submit</button>
                                            </td>
                                        </form>
                                    )}
                                </>
                            </div>
                        </div>
                    </div>
                </div>
                <Sidebars></Sidebars>
            </div>
        </>
    );
}

export default index;