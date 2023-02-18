import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";
import { GrNotification } from "react-icons/gr";
import { useFirebase } from "../../context/UserContext";
import ShowNotification from "../ShowNotification/ShowNotification";


const DashboardNavbar = () => {
  const { user } = useFirebase();
  const route = useRouter();

  const url = `http://localhost:3100/notice`;
  const {
    data: noticeData = [], refetch, isLoading, } = useQuery({
      queryKey: ["noticeData"],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      },
    });

  refetch();


  return (
    <div>
      <div className="navbar container mx-auto sticky top-0 ">
        <div className="flex-1">
          <a className="lg:ml-28 normal-case text-xl font-semibold">
            Hello , {user?.displayName}
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end flex">
              {
                route.pathname === "/dashboard/notification/shownotification"
                  ? undefined :
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <GrNotification size="20px" />
                      <span className="badge badge-sm indicator-item">{noticeData.length}</span>
                    </div>
                  </label>}
              <div
                tabIndex={0}
                className="mt-8 card card-compact border w-96  dropdown-content bg-base-100 shadow"
              >
                <div className="card-body w-84 border max-h-[70vh] overflow-scroll z-50 ">
                  <ShowNotification
                    noticeData={noticeData} />
                </div>
              </div>
              <div>
                <label className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardNavbar;
