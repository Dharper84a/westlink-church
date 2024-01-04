import { Montserrat, Poppins } from 'next/font/google'
import StyledComponentsRegistry from './lib/styled-components/registry';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-monserrat'
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
    variable: '--font-poppins'
})
export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}
