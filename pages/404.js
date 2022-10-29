import Layout from "../components/Layout";
import Error from "../components/Layout/Error";

const Pages404 = (props) => {
    return (
        <Layout>
            <Error errorType={'404'} />
        </Layout>
    )
}

export default Pages404;