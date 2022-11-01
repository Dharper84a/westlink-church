import Layout from "../components/Layout";
import Error from "../components/Layout/Error";

const Pages500 = () => {
    return (
        <Layout>
            <Error errorType={'500'} />
        </Layout>
    )
}

export default Pages500;