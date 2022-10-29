import * as React from "react";
import deliveryClient from "../../lib/datasource/contentful/delivery";

import BasicCard from "./Basic";
import LeadershipCard from "./Leadership";
const Cards = (props) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    // console.log("Cards", props);
    React.useEffect(() => {
        const _cards = [];

        props.cards.forEach((item, key) => {
            deliveryClient.entryById(item.sys.id).then((res) => {
                switch (res.sys.contentType.sys.id) {
                    case "cardBasic":
                        _cards.push({
                            key: key,
                            comp: <BasicCard {...res.fields} key={key}/>
                        })
                        break;
                    case 'cardLeadership':
                        _cards.push({
                            key: key,
                            comp: <LeadershipCard {...res.fields} key={key} />
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

export default Cards;
