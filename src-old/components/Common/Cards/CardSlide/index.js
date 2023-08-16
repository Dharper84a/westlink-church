import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RichTextRenderer from '../../RichTextRenderer';
import deliveryClient from '../../../../../lib/datasource/contentful/delivery';

import { CardComponent } from './styles';

const CardSlide = (props) => {
    const [data, setData] = React.useState(false);

    React.useEffect(() => {
        let ignore = false;
        let s = Date.now()
       
        const awaitCardData = async () => {
            const schema = {
                heading: null,
                description: null,
                image: null,
                link: null,
                pageType: 'page',
            }
            const entryData = await deliveryClient.entryById(props.sys.id);
            if(!ignore) {
                if(entryData?.fields) {
                    schema.heading = entryData.fields?.heading || null;
                    schema.description = entryData.fields?.briefDescription || null;
                    schema.image = entryData.fields?.image?.fields || null;

                    if(entryData.fields?.link) {
                        schema.link = {
                            title: entryData.fields.link.fields?.linkTitle,
                            openInNewTab: entryData.fields.link.fields?.openInNewTab === 'Yes' ? true : false,
                            href: entryData.fields.link.fields?.externalWebpage || null,
                        }
                        if(entryData.fields.link?.fields?.internalPage) {
                            const linkData = await deliveryClient.entryById(entryData.fields.link.fields.internalPage.sys.id);

                            schema.pageType = linkData.sys.contentType.sys.id;
                            if(linkData.sys.contentType.sys.id !== 'page') {
                                schema.link.href = `/${linkData.sys.contentType.sys.id}/${linkData.fields.slug}`;
                            } else {
                                schema.link.href = `/${linkData.fields.slug}`;
                            }

                        }
                        
                        
                        

                    }
                    
                    let d = Date.now() - s;
                    // console.log(`${d}ms`)
                    setData(schema)
                   
                }
            }
        }

        awaitCardData();
        return () => {
            ignore = true;
        }
    }, [props])
    

    return (
        <CardComponent  hasImage={data.image ? true : false}>
            <div>
                <figure>
                    {data.image && 
                        <Image
                            src={`https:${data.image.file.url}`}
                            alt={data.image.description || ''}
                            fill={true}
                        />
                    }
                </figure>
                <h3>{data?.heading}</h3>
                <RichTextRenderer richText={data?.description} />
            </div>
            {data.link &&
            <footer>
                <Link href={data.link.href} title={data.link.title}>
                    {data.link.title}
                </Link>
            </footer>
            }
        </CardComponent>
    );
};

export default CardSlide;
