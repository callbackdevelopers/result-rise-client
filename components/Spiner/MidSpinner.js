import Layout from "../../Layout/Layout";
import Spiner from "./Spiner";

function MidSpinner() {
    return (
        <Layout>
            <div className=" flex justify-center items-center h-[80vh]">
                <Spiner />
            </div>
        </Layout>
    );
}

export default MidSpinner;