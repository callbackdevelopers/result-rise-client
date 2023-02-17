import { useQuery } from "@tanstack/react-query";
import Link from "next/link";


const ShowNotification = () => {
  const url = `http://localhost:3100/notice`;
  const {
    data: noticeData = [], refetch, isLoading, } = useQuery({
      queryKey: [],
      queryFn: async () => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      },
    });
  return (
    <div className="mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-xl">Notifications</h1>
        </div>
        <h1 className="text-xl">...</h1>
      </div>
      <div>
        <div className="flex justify-end">
          <Link
            className="text-blue-500"
            href="/dashboard/notification/shownotification">
            See All
          </Link>
        </div>
      </div>
      <div className="">
        {noticeData?.map((notice) => (
          <div className="flex gap-4 my-2 rounded-lg items-center p-3 hover:bg-[#F2F2F2] ">
            <div>
              <img className="rounded-full w-20" src={notice?.photoURL} />
            </div>
            <div>
              <p>{notice.body.slice(0, 50)} </p>
              <small className="font-bold">time ago ago</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowNotification;
