import * as React from 'react';
import { useRouter } from 'next/router';
import deliveryClient from '../../lib/datasource/contentful/delivery';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
import PageSections from '../../components/PageSections';
import Event from '../../components/Event';

const PagesEvent = (props) => {
    const router = useRouter();
    if(router.isFallback) {
        return <div>Loading...</div>
    }
    console.log('router', router);
    console.log('PagesEvent', props);

    const hostname = typeof window !== 'undefined' ? window.location.hostname : null;
    const pageUrl = hostname !== null ? hostname + router.asPath : null;

    return (
        <>
        <NextSeo
            title={props.fields.eventName}
            canonical={pageUrl}
            openGraph={{
                url: pageUrl,
                title: props.fields.metaTitle,
            }}
        />
        <Layout>
            <Event {...props} />
        </Layout>
        </>
    )
}

export default PagesEvent;

export async function getStaticPaths() {
    console.log('event/[event].js')
    const paths = [];
    const endpoints = await deliveryClient.endpoints('event');

    endpoints.forEach((endpoint) => {
        paths.push({
            params: {event: endpoint}
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
        const pageData = await deliveryClient.getPage(params.event, 'event');

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
}