import * as React from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import deliveryClient from '../lib/datasource/contentful/delivery';

import Layout from '../components/Layout';
import PageSections from '../components/PageSections';

const PagesPage = (props) => {
    const router = useRouter();
    if(router.isFallback) {
        return <div>Loading...</div>
    }
    console.log('router', router);
    console.log('PagesPage', props);

    const hostname = typeof window !== 'undefined' ? window.location.hostname : null;
    const pageUrl = hostname !== null ? hostname + router.asPath : null;

    const hasSocialImage = props.fields.pageSocialImage ? true : false;
    const seoProps = {
        title: props.fields.metaTitle,
        description: props.fields?.metaDescription,
        canonical: pageUrl,
        openGraph: {
            url: pageUrl,
            title: props.fields.metaTitle,
            description: props.fields?.metaDescription,
            images: [],
        }
    }

    if(hasSocialImage) {
        seoProps.openGraph.images.push({
            url: props.fields.pageSocialImage.fields.file.url,
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
            {props?.fields?.pageSections && 
            <PageSections sections={props.fields?.pageSections} />
            }
        </Layout>
        </>
    )
}

export default PagesPage;

export async function getStaticPaths() {
    console.log('pages/[page].js')
    const paths = [];
    const endpoints = await deliveryClient.endpoints('page');

    endpoints.forEach((endpoint) => {
        paths.push({
            params: {page: endpoint}
        })
    })

    // console.log('paths', paths)
    return {
        paths: paths,
        fallback: true
    }
}

export async function getStaticProps({params}) {
    try{
        const pageData = await deliveryClient.getPage(params.page);

        if(pageData) {
            return {
                props: {...pageData},
                revalidate: 60
            }
        } else {
            return {
                notFound: true
            }
        }
    }catch(e) {
        console.log('ERROR - getStaticProps');
        console.log(e);
        return {
            notFound: true
        }
    }
 

    // return await deliveryClient.entry('page', 'slug', params.page).then((entry) => {
    //     return {
    //         props: { ...entry },
    //         revalidate: 30,
    //     }
    // }).catch((err) => {
    //     console.log('ERROR', err)
    //     return { notFound: true }
    // });
}