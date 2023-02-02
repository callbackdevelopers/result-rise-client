import Link from "next/link";
import DashboardNavbar from "../../../components/Navbars/DashboardNavbar";
import Sidebars from "../../../components/Sidebars/Sidebars";
import SecondaryButton from "../../../components/Shared/Buttons/SecondaryButton";
import { useFirebase } from "../../../context/UserContext";
import { useQuery } from "@tanstack/react-query";

const index = () => {
  const { user } = useFirebase();
  const url = `http://localhost:3100/resultdata`;
  const {
    data: resultData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(url);
      const data1 = await res.json();
      const data = data1.filter(
        (result) => result.student_email === user.email
      );
      return data;
    },
  });
  console.log(resultData);

  return (
    <>
      <DashboardNavbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="">
            <div className=" py-2">
              <h2 className="lg:text-2xl text-center">Semester Result</h2>
            </div>
            <div className=" gap-3 p-4">
              <div>
                {resultData?.map((semester) => (
                  <div
                    className=" grid lg:grid-cols-2 gap-3"
                    key={semester._id}
                  >
                    {semester.semester_results.map((finaldata) => (
                      <div key={finaldata._id}>
                        <Link
                          href={`/dashboard/result/${finaldata.semesterId}`}
                        >
                          <SecondaryButton>
                            {" "}
                            {finaldata.semester}
                          </SecondaryButton>
                        </Link>
                      </div>
                    ))}

                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Sidebars />
      </div>
    </>
  );
};

export default index;
