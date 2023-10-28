import { Open_Sans, Sarabun, Exo, Lato } from "next/font/google";

export const open_sans = Open_Sans({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-open-sans'
})

export const sarabun = Sarabun({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    display: 'swap'
})

export const exo = Exo({
    weight: ['300', '400', '500', '600'],
    subsets: ['latin'],
    display: 'swap'
})

export const lato = Lato({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-lato'
})