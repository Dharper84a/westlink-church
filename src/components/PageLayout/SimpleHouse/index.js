import * as React from 'react'
import Image from 'next/image';

import RichTextRenderer from '../../Common/RichTextRenderer';

import { LayoutSimpleHouse } from './styles';
import CommonList from '../../Common/List';

const SimpleHouse = (props) => {
    console.log('SimpleHouse', props);
    const images = props.images || false;
    const lists = Array.isArray(props.lists) ? props.lists : false;
    return(
        <LayoutSimpleHouse>
            <section>
            {props.description &&
            <RichTextRenderer richText={props.description} />
            }
            </section>
            <aside>
                {images &&
                <figure>
                    <Image
                        src={`https:${images[0].fields.file.url}`}
                        alt={images[0].fields.description || ''}
                        width={images[0].fields.file.details.image.width}
                        height={images[0].fields.file.details.image.height}
                        quality={75}
                        sizes="(max-width: 768px) 80vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                    />
                </figure>
                }
                {lists &&
                    lists.map((list, key) => {
                        return (
                            <CommonList list={list} key={key} />
                        )
                    })
                }
            </aside>
        </LayoutSimpleHouse>
    )
}

export default SimpleHouse;