import { useQuery } from "@tanstack/react-query";
import DashboardNavbar from "../../../../components/Navbars/DashboardNavbar";
import Pending from "../../../../components/Shared/Pending/pending";
import Sidebars from "../../../../components/Sidebars/Sidebars";
import Spiner from "../../../../components/Spiner/Spiner";
import AlertMessage from "../../../../Hooks/AlertMessage";
import { useQuery } from "@tanstack/react-query";
import DashboardNavbar from "../../../../components/Navbars/DashboardNavbar";
import UsersTableTamplete from "../../../../components/Shared/UsersTableTamplete/usersTableTamplete";
import Sidebars from '../../../../components/Sidebars/Sidebars';
import Spiner from "../../../../components/Spiner/Spiner";
import AlertMessage from "../../../../Hooks/AlertMessage";




const index = () => {
  const { successMessage } = AlertMessage();
  const url = `http://localhost:3100/users`;
  const {
    data: students = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(url);
      const data1 = await res.json();
      const data = data1.filter(
        (ps) => !ps.verification && ps.roll === "student"
      );
      return data;
    },
  });
  console.log("Stu", students);
    const { successMessage } = AlertMessage();
    const btnName = "Approve";
    const url = `http://localhost:3100/users`
    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(url)
            const data1 = await res.json()
            const data = data1.filter(ps => !ps.verification && ps.roll === "student")
            return data;
        }
    })
    console.log("UsersTableTamplete: ", users)

  if (isLoading) {
    return <Spiner></Spiner>;
  }

  const handleVerification = (student) => {
    console.log("Deleting  with id: ", student);

    fetch(`http://localhost:3100/users/${student._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("resultInside", result);
        if (result.acknowledged === true) {
          successMessage("Approved");
          refetch();
        }
      });
  };
  return (
    <>
      <DashboardNavbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Depertment</th>
                  <th></th>
                </tr>
              </thead>
              {students?.map((student) => (
                <Pending
                  id={student._id}
                  student={student}
                  handleVerification={handleVerification}
                ></Pending>
              ))}
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <Sidebars></Sidebars>
      </div>
    </>
  );
};
    const handleUser = (user) => {
        console.log('Verification  with id: ', user)
        fetch(`http://localhost:3100/users/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    successMessage("Approved")
                    refetch()
                }
            })

    }
    return (
        <>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <div className="overflow-x-auto w-full">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Depertment</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {
                                users?.map(user => <UsersTableTamplete
                                    id={user._id}
                                    user={user}
                                    handleUser={handleUser}
                                    btnName={btnName}
                                ></UsersTableTamplete>)
                            }
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <Sidebars></Sidebars>
            </div>
        </>
    );
}

export default index;
