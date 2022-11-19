import * as React from "react";

import deliveryClient from "../../../../lib/datasource/contentful/delivery";
import CardStaff from "./Staff";

import CardStandard from "./Standard";
const CardsResolver = (props) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const _cards = [];

        props.cards.forEach((item, key) => {
            deliveryClient.entryById(item.sys.id).then((res) => {
                const cardId = `${res.sys.id}__${res.sys.contentType.sys.id}_${key}`;
                // console.log('cardID', cardId)
                switch (res.sys.contentType.sys.id) {
                    case 'cardStandard':
                        // console.log(res);
                        _cards.push({
                            key: cardId,
                            comp: <CardStandard heading={res.fields.heading} text={res.fields?.briefDescription} image={res.fields?.image?.fields} key={res.sys.contentType.sys.id}/>
                        })
                        break;
                    case 'cardStaff':
                        console.log('Staff Card')
                        break;
                    case "cardBasic":
                        // _cards.push({
                        //     key: key,
                        //     comp: <BasicCard {...res.fields} key={key}/>
                        // })
                        break;
                    case 'cardLeadership':
                        /** AKA - Card Staff */
                        console.log('cardLeadership', res)
                        _cards.push({
                            key: key,
                            comp: <CardStaff {...res.fields} key={key} />
                        })
                        break;
                    default: null;
                }

                if(_cards.length === props.cards.length) {
                    _cards.sort((a, b) => (a.key > b.key ? 1 : -1));
                    setItems(_cards);
                    setIsLoading(false);
                }
            });
        });

        

        return () => {}
    }, [props.cards]);

    return (
        <>
            {!isLoading &&
                items.map((card) => {
                    return card.comp;
                })}
        </>
    );
};

export default CardsResolver;
