'use client';
import Image from 'next/image';
import Script from 'next/script';
import { schemaBuilder } from '../../../lib/schema';
import { _Container } from './styles';
import RichText from '../RichText';
import { useState, useEffect } from 'react';

const PersonAndBio = ({ heading, name, copy, image, pills, schema, variant }) => {
    const [schemaData, setSchemaData] = useState();

    const _variant = variant || [];
    const copyPosition = _variant.includes('right') ? 'right' : 'left';
    const colorStyle = _variant.includes('dark') ? 'dark' : 'light';

    const scriptId = crypto.randomUUID();

    useEffect(() => {
        if(!schema) return;
        const _schema = schemaBuilder(schema?.type, schema?.properties);
        setSchemaData(_schema);
    }, [schema])
    return (
        <_Container colorStyle={colorStyle}>
            {schemaData && (
                <Script 
                    strategy="afterInteractive" 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                    id={scriptId}
                />
            )}
            <h2>{heading}</h2>
            {image && copyPosition === 'right' && (
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
            )}
            <article>
                <h3>{name}</h3>
                {pills && (
                    <ul>
                        {pills.map((item, key) => {
                            return <li key={key}>{item}</li>;
                        })}
                    </ul>
                )}
                <RichText copy={copy} />
            </article>
            {image && copyPosition === 'left' && (
                <Image src="https://placekitten.com/720/720" alt="" width={720} height={720} />
            )}
        </_Container>
    );
};

export default PersonAndBio;
