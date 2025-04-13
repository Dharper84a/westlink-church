import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const StandardLayout = ({children}) => {

    return (
        <>
        <SiteHeader />
        <main id="main_content">
            {children}
        </main>
        <SiteFooter />
        </>
    )
}

export default StandardLayout;