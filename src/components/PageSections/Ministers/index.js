import * as React from 'react';
import Image from 'next/image';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';

import RichTextRenderer from '../../Common/RichTextRenderer';
import { Component, LeadMinister, AssistantMinisters } from './styles';
import TagPill, { TagPillList } from '../../Common/TagPill';

const Ministers = (props) => {
    const [leadMinister, setLeadMinister] = React.useState();
    const [assistantMinisters, setAssistantMinisters] = React.useState();

    // console.log('Ministers', props)

    React.useEffect(() => {
        let ignore = false;
        const awaitData = async (field, state) => {
            if(Array.isArray(field)) {
                const p_data = field.map(async(item) => {
                    const res = await deliveryClient.entryById(item.sys.id);
                    return res.fields;
                })

                const data = await Promise.all(p_data);
                if(!ignore) {
                    state(data);
                }
            } else {
                const data = await deliveryClient.entryById(field.sys.id);
                if(!ignore) {
                    // console.log(data.fields)
                    state(data.fields);
                }
            }
            
            
        }

        awaitData(props.leadMinister, setLeadMinister);
        awaitData(props.assistantMinisters, setAssistantMinisters);

        return () => {
            ignore = true;
        }
    }, [props.assistantMinisters, props.leadMinister])

    return(
        <Component>
            <h2 id="ministers">Lead Minister</h2>
            {leadMinister && 
                <LeadMinister>
                    <figure>
                        <Image
                            src={`https:${leadMinister.profilePicture.fields.file.url}`}
                            width={480}
                            height={360}
                            alt={leadMinister.profilePicture.description}
                        />
                    </figure>
                    <aside>
                        <h3>{leadMinister.displayName}</h3>
                        <TagPillList items={leadMinister.groups} style="light" />
                     
                       
                        <RichTextRenderer richText={leadMinister.shortBio} />
                    </aside>
                </LeadMinister>
            }
            {assistantMinisters && Array.isArray(assistantMinisters) &&
                <>
                <h3>Assistant Ministers</h3>
                <AssistantMinisters>
                    
                    {assistantMinisters.map((item, key) => {
                        return(
                            <div key={key}>
                                <figure>
                                    <Image
                                        src={`https:${item.profilePicture.fields.file.url}`}
                                        width={480}
                                        height={360}
                                        alt={item.profilePicture.description}
                                    />
                                </figure>
                                <aside>
                                    <h4>{item.displayName}</h4>
                                    <TagPillList items={item.groups} style="light" />
                                </aside>
                            </div>
                        )
                    })}
                </AssistantMinisters>
                </>
            }
        </Component>
    )
}

export default Ministers;