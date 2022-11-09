import * as React from 'react'
import Link from 'next/link';
import RichTextRenderer from '../../Common/RichTextRenderer';

import { ComponentBase } from './styles';
const MaterialDownload = (props) => {

    const hasHeader = props?.heading || props?.content ? true : false;
    const hasDownloads = props?.material.length > 0 ? true : false;

    return (
        <ComponentBase>
            {hasHeader &&
            <header>
                {props?.heading && <h2>{props.heading}</h2>}
                {props?.content && <RichTextRenderer richText={props.content} />}
            </header>
            }
            {hasDownloads &&
            <ul>
                {props.material.map((material, key) => {
                    return (
                        <li key={key}>
                            <Link href={`https:${material.fields.file.url}`}>
                                <a target="_blank" rel="noopener noreferrer">
                                    {material.fields.title}
                                </a>
                            </Link>
                        </li>
                    )
                })}
                
            </ul>
            }
        </ComponentBase>
    )
}

export default MaterialDownload;