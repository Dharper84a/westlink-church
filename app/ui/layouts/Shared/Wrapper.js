// Styles
import { ThemeProvider } from 'styled-components';
import {theme} from '../../styles/theme';
import GlobalStyle from '../../styles/GlobalStyles';

// Components
import SharedHeader from './Header';
import SharedFooter from './Footer';
const SharedWrapper = ({children}) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SharedHeader />
            <main>
                {children}
            </main>
            <SharedFooter />
        </ThemeProvider>
    )
}

export default SharedWrapper;