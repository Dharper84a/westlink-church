import { useRouter } from 'next/router';
import deliveryClient from '../../lib/datasource/contentful/delivery';
import { NextSeo } from 'next-seo';

import Layout from '../components/Layout';
import PageSections from '../components/PageSections';
import PageHero from '../components/PageHero';

export default function Home(props) {  
    // console.log('Page', props);
    const router = useRouter();
    const hostname = typeof window !== 'undefined' ? window.location.hostname : null;
    const pageUrl = hostname !== null ? hostname + router.asPath : null;
    const seoTitle = "Welcome to Westlink";

    const pageHero = props.fields?.pageHero || false;
    const hasSocialImage = props.fields.pageSocialImage ? true : false;

    const seoProps = {
        title: seoTitle,
        description: props.fields?.metaDescription,
        canonical: "https://westlink.church",
        openGraph: {
            url: "https://westlink.church",
            title: seoTitle,
            description: props.fields?.metaDescription,
            images: [],
        }
    }

    if(hasSocialImage) {
        seoProps.openGraph.images.push({
            url: 'https:' + props.fields.pageSocialImage.fields.file.url,
            width: props.fields.pageSocialImage.fields.file.details.image.width,
            height: props.fields.pageSocialImage.fields.file.details.image.height,
            alt: props.fields.pageSocialImage.fields.description,
        })
    } else {
        delete seoProps.openGraph.images;
    }
    return (
        <>
        <NextSeo {...seoProps}/>

        <Layout>
            {pageHero && <PageHero {...pageHero} />}
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