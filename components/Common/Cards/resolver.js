import * as React from "react";

import deliveryClient from "../../../lib/datasource/contentful/delivery";

import CardStandard from "./Standard";
const CardsResolver = (props) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        const _cards = [];

        props.cards.forEach((item, key) => {
            deliveryClient.entryById(item.sys.id).then((res) => {
                switch (res.sys.contentType.sys.id) {
                    case 'cardStandard':
                        console.log(res);
                        _cards.push({
                            key: res.sys.contentType.sys.id,
                            comp: <CardStandard heading={res.fields.heading} text={res.fields?.briefDescription} image={res.fields?.image?.fields} key={res.sys.contentType.sys.id}/>
                        })
                        break;
                    case "cardBasic":
                        // _cards.push({
                        //     key: key,
                        //     comp: <BasicCard {...res.fields} key={key}/>
                        // })
                        break;
                    case 'cardLeadership':
                        // _cards.push({
                        //     key: key,
                        //     comp: <LeadershipCard {...res.fields} key={key} />
                        // })
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
