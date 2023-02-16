import * as React from 'react';
import { useRouter } from 'next/router';
import deliveryClient from '../../../lib/datasource/contentful/delivery';
import { NextSeo, EventJsonLd } from 'next-seo';
import { eventJsonLd } from '../../../lib/event-json-ld';
import Layout from '../../components/Layout';
import PageSections from '../../components/PageSections';
import Event from '../../components/Event';
import { StaticHero } from '../../components/PageHero';


const PagesEvent = (props) => {
    const router = useRouter();
    if(router.isFallback) {
        return <div>Loading...</div>
    }

    if(router.isPreview) {
        console.log('IS IN PREVIEW MODE')
    }
    return (
        <>
        <NextSeo
            title={props.fields.eventName}
            canonical={`https://westlink.church${router.asPath}`}
            openGraph={{
                url: `https://westlink.church${router.asPath}`,
                title: props.fields.metaTitle,
            }}
        />
        <EventJsonLd
            name={props.fields.eventName}
            startDate={props.fields.eventDate}
            endDate={props.fields.endDate}
            location={{
                name: "Westlink Church of Christ",
                address: {
                    streetAddress: "10025 W. Central Ave.",
                    addressLocality: "Wichita",
                    addressRegion: "KS",
                    postalCode: "67212",
                    addressCountry: "US",
                }
            }}
            url={`https://westlink.church${router.asPath}`}
            images={[props.fields?.mainImage?.fields?.file?.url || null]}
        />
        <Layout>
            <StaticHero heading="Event" color="blue_crosses" />
            <Event {...props} />
        </Layout>
        </>
    )
}

export default PagesEvent;

export async function getStaticPaths() {
    // console.log('event/[event].js')
    const paths = [];
    const endpoints = await deliveryClient.endpoints('event', false);

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

export async function getStaticProps({params, preview}) {
    try{
        const pageData = await deliveryClient.getPage(params.event, 'event', preview || false);

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