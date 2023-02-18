import ShowNotification from "../../../../components/ShowNotification/ShowNotification";
import Layout from "../../../../Layout/Layout";




const index = () => {
  return (
    <div>
      <Layout>
        <div className='bg-gray-200 min-h-screen'>
          <div className='p-4  overflow-scroll mx-auto'>
            <ShowNotification />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default index;