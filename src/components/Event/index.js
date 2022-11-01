import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import RichTextRenderer from '../Common/RichTextRenderer';
import { EventComponent } from './styles';

const parseSeoDescription = (field) => {
    let result = false;
    if (Array.isArray(field.content)) {
        field.content.forEach((content) => {
            if (Array.isArray(content.content)) {
                content.content.forEach((contentNode) => {
                    result = contentNode.value.trim();
                });
            }
        });
    }

    return result;
};
const Event = (props) => {
    const [start, setStart] = React.useState();
    const [end, setEnd] = React.useState();

    const title = props.fields.eventName;
    const richText = props.fields.eventInfo;
    const image = props.fields.mainImage.fields;
    const seoDescription = parseSeoDescription(richText);
    const seoProps = {
        description: seoDescription
    };
    if (!seoDescription) delete seoProps.description;

    const hasLocation = props.fields.location?.lon && props.fields.location?.lat ? true : false;

    React.useEffect(() => {
        const dateTime = new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        if (props.fields.eventDate) {
            setStart(dateTime.format(new Date(props.fields.eventDate)));
        } else {
            setStart('TBD');
        }

        if (props.fields.endDate) {
            setEnd(dateTime.format(new Date(props.fields.endDate)));
        } else {
            setEnd('TBD');
        }
    }, [props.fields.eventDate, props.fields.endDate]);
    return (
        <EventComponent>
            <NextSeo {...seoProps} />
            <header>
                <h1>{title}</h1>
                <div>
                    <p>
                        Begins
                        <br />
                        <time>{start}</time>
                    </p>
                    <p>
                        Ends
                        <br />
                        <time>{end}</time>
                    </p>
                </div>
                {richText && <RichTextRenderer richText={richText} />}
                {hasLocation && (
                    <p>
                        <Link
                            href={`https://maps.google.com/?q=${props.fields.location.lat},${props.fields.location.lon}`}>
                            <a
                                title="View a map of where this event is taking place"
                                target="_blank"
                                rel="noreferrer nopener">
                                View location of event on Google Maps
                            </a>
                        </Link>
                    </p>
                )}
            </header>
            <aside>
                <figure>
                    {image && (
                        <Image
                            src={`https:${image.file.url}`}
                            layout="fill"
                            alt={image.description || ''}
                            priority
                            quality={75}
                            objectFit="cover"
                            sizes="(max-width: 768px) 80vw,
                        40vw"
                        />
                    )}
                </figure>
            </aside>
        </EventComponent>
    );
};

export default Event;
