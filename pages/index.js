import { useRouter } from 'next/router';
import deliveryClient from '../lib/datasource/contentful/delivery';
import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import PageSections from '../components/PageSections';

export default function Home(props) {  
    console.log('Page', props);
    const router = useRouter();
    const hostname = typeof window !== 'undefined' ? window.location.hostname : null;
    const pageUrl = hostname !== null ? hostname + router.asPath : null;
    const seoTitle = "Welcome to Westlink";
    return (
        <>
        <NextSeo
            title={seoTitle}
            description={props.fields?.metaDescription}
            canonical={pageUrl}
            openGraph={{
                url: pageUrl,
                title: props.fields.metaTitle,
                description: props.fields?.metaDescription,
            }}
        />
        <Layout>
            <PageSections sections={props.fields?.pageSections} />
        </Layout>
        </>
    )
}

export async function getStaticProps() {
    const entry = await deliveryClient.homepage();
    
    if(entry) {
        return {
            props: { ...entry },
            revalidate: 30,
        }
    }

    return {
        notFound: true
    }
   
}