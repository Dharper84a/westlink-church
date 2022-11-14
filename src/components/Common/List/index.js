import * as React from 'react';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { CommonComponent } from './styles';
const CommonList = (props) => {
    const [listItems, setListItems] = React.useState(null);

    React.useEffect(() => {

        const getList = async (list) => {
            const response = await deliveryClient.entryById(list.sys.id);
            console.log(response);
            if(response?.fields) {
                setListItems(response.fields);
            }
        }

        getList(props.list);
     

        return () => {}
    }, [props]);

    return (
        <CommonComponent>
            {Array.isArray(listItems?.listItems) &&
            <>
            <span>{listItems.name}</span>
            <ul>
                {listItems?.listItems.map((item, key) => {
                    return (
                        <li key={key}><FontAwesomeIcon icon={faSquareCheck} />{item}</li>
                    )
                })}
            </ul>
            </>
            }
        </CommonComponent>
    )
}

export default CommonList;