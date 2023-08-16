import SimpleHouse from "./SimpleHouse";

const PageLayout = (props) => {
    switch(props.sys.contentType.sys.id) {
        case 'pageLayoutSimpleHouse':
            return <SimpleHouse {...props.fields} />
        default: <></>
    }
    
}

export default PageLayout;