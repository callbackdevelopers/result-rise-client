import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout/Layout";
import ShowNotification from "../../../../components/ShowNotification/ShowNotification";



const index = () => {
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
      <Layout>
        <ShowNotification noticeData={noticeData} />
      </Layout>
    </div>
  );
};

export default index;