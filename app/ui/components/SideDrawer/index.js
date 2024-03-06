import { _SideDrawer, _Content, _Overlay} from "./styles";

const SideDrawer = ({state, closeHandler, children}) => {

    return (
        <_SideDrawer className={`state-${state}`}>
            <_Overlay onClick={closeHandler} />
            <_Content className={state}>
                <header>
                    <button onClick={closeHandler} aria-label="close">
                        Close
                    </button>
                </header>
                {children}
            </_Content>
            
        </_SideDrawer>
    )
}

export default SideDrawer;