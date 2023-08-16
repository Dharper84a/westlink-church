import Layout from "../components/Layout";
import Error from "../components/Layout/Error";
import { StaticHero } from "../components/PageHero";

const Pages404 = (props) => {
    return (
        <Layout>
            <StaticHero heading="&#128533;" color="dark_crosses" />
            <Error errorType={'404'} />
        </Layout>
    )
}

export default Pages404;