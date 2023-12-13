import { createContext, useContext, useReducer } from "react";

const SiteContext = createContext(null);
const SiteDispatchContext = createContext(null);

export const SiteProvider = ({children}) => {
    const [state, dispatch] = useReducer(
        stateReducer,
        initialState
    )

    return (
        <SiteContext.Provider value={state}>
            <SiteDispatchContext.Provider value={dispatch}>
                {children}
            </SiteDispatchContext.Provider>
        </SiteContext.Provider>
    )

}

export const useSiteContext = () => {
    return useContext(SiteContext);
}

export const useSiteDispatch = () => {
    return useContext(SiteDispatchContext);
}

const stateReducer = (state, action) => {
    switch(action.type) {
        case 'headerVariant': 
            return {
                ...state,
                headerVariant: action.variant
            }
        default: throw Error('Unknown action: ' + action.type);
    }
}

const initialState = {
    headerVariant: 'transparent'
}
